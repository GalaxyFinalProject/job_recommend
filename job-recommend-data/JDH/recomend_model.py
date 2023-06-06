# -*- coding: utf-8 -*-
"""
Created on Tue Jun  6 11:40:25 2023

@author: n1ne1
"""

import pandas as pd
import re
from gensim.models import Word2Vec
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import ast
# 함수 정의: 사용자가 입력한 기술과 데이터에 있는 기술의 일치도를 계산하는 함수
def calculate_skills_match(skills_input, skills_data):
    input_skills = set([x.lower().strip() for x in skills_input.split(',')])
    data_skills = set([x.lower().strip() for x in skills_data])
    if not input_skills & data_skills:
        return 0  # 아무런 일치하는 기술 스택이 없으면 0 반환
    else:
        return len(input_skills & data_skills) / len(input_skills)
# 먼저, 공고 데이터가 있는 CSV 파일을 불러옵니다.
dataframe = pd.read_csv('C:/myPyCode/final_project/final_true.csv', encoding='cp949')  # your_file.csv를 실제 파일 이름으로 바꾸어주세요.
dataframe['직무'] = dataframe['직무'].str.replace('데이터 엔지니어', '데이터_엔지니어')
# 모든 문자를 소문자로 변환하고, 특수문자 제거
dataframe['content_clean'] = dataframe['직무'] + ' ' + dataframe['근무지'] + ' ' + dataframe['기술스택']
dataframe['content_clean'] = dataframe['content_clean'].str.lower()
dataframe['content_clean'] = dataframe['content_clean'].apply(lambda x: re.sub(r'["\[\]]', ' ', x))
# Word2Vec 모델 학습
documents = [text.split(' ') for text in dataframe.content_clean]
model = Word2Vec(documents, vector_size=100, window=5, min_count=1, workers=4)
# 각각의 공고에서 'content_clean' 칼럼을 벡터로 변환하여 'content_vector' 칼럼 생성
dataframe['content_vector'] = dataframe['content_clean'].apply(lambda x: np.mean([model.wv[word] for word in x.split(' ') if word in model.wv.key_to_index], axis=0))
# 사용자 입력을 받습니다.
def preprocess_job(job):
    if job == '데이터 엔지니어':
        return '데이터_엔지니어'
    return job
user_input_job = input('직무를 입력하세요: ').lower()
user_input_job = preprocess_job(user_input_job)
user_input_location = input('근무지를 입력하세요: ').lower()
user_input_skills = input('기술 스택을 입력하세요(여러 개 입력 시 공백으로 구분): ').lower()
# 사용자 입력을 벡터로 변환합니다.
user_input_content = user_input_job + ' ' + user_input_location + ' ' + user_input_skills
user_vector = np.mean([model.wv[word] for word in user_input_content.split(' ') if word in model.wv.key_to_index], axis=0)
# 사용자 입력과 각 공고의 유사도를 계산합니다.
dataframe['similarity'] = dataframe['content_vector'].apply(lambda x: cosine_similarity([x], [user_vector]))
# 기술 스택 문자열을 문자열 리스트로 변환합니다.
dataframe['기술스택'] = dataframe['기술스택'].apply(ast.literal_eval)
# 직무 문자열을 문자열 리스트로 변환합니다.
dataframe['직무'] = dataframe['직무'].apply(ast.literal_eval)
# 사용자 입력과 각 공고의 직무가 얼마나 유사한지를 계산합니다.
user_job_set = set(user_input_job.split(' '))
dataframe['job_match'] = dataframe['직무'].apply(lambda x: len(user_job_set.intersection(set([i.lower() for i in x]))) / len(set([i.lower() for i in x])) if len(x) > 0 else 0)
# 사용자 입력과 각 공고의 기술 스택이 얼마나 유사한지를 계산합니다.
user_skills_set = set(user_input_skills.split(' '))
dataframe['skills_match'] = dataframe['기술스택'].apply(lambda x: calculate_skills_match(user_input_skills, x))
# 주소의 첫 번째와 두 번째 부분만 사용합니다.
dataframe['근무지'] = dataframe['근무지'].apply(lambda x: ' '.join(x.split(' ')[:2]))
# 사용자 입력과 각 공고의 근무지가 얼마나 유사한지를 계산합니다.
user_location_set = set(user_input_location.split(' '))
dataframe['location_match'] = dataframe['근무지'].apply(lambda x: len(user_location_set.intersection(set(x.split(' ')))) / len(set(x.split(' '))) if len(x) > 0 else 0)
# 최종 점수는 유사도와 기술 스택 일치도, 직무 일치도, 근무지 일치도를 조합합니다.
# 가중치는 직무: 0.5, 기술 스택: 0.3, 근무지: 0.2 로 설정합니다.
dataframe['score'] = 0.4 * dataframe['job_match'] + 0.4 * dataframe['skills_match'] + 0.2 * dataframe['location_match']
# 기술 스택의 길이를 저장하는 새로운 칼럼 'tech_stack_length'를 생성합니다.
dataframe['tech_stack_length'] = dataframe['기술스택'].apply(lambda x: len(x))
# 기술 스택 일치도가 0보다 큰 공고들 중에서 최종 점수가 가장 높은 공고를 추출합니다.
recommendations = dataframe[dataframe['skills_match'] > 0]
# 이를 'job_match', 'location_match', 'tech_stack_length' 칼럼을 기준으로 정렬합니다.
recommendations = dataframe[dataframe['skills_match'] > 0].copy()
recommendations.sort_values(by=['job_match', 'location_match', 'tech_stack_length'], ascending=[False, False, True], inplace=True)
# 상위 15개의 추천 공고를 출력합니다.
print(recommendations[:15])