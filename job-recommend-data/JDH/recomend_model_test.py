import pandas as pd
import re
from gensim.models import Word2Vec
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import ast

location_mapping = {
    '경기북부': ['경기 고양시', '경기 김포시', '경기 파주시', '경기 의정부시', '경기 구리시',  '경기 남양주시'],
    '경기남부': ['경기 부천시', '경기 광명시', '경기 시흥시', '경기 안산시', '경기 과천시', '경기 안양시', '경기 의왕시', '경기 성남시', '경기 광주시', '경기 수원시', '경기 용인시', '경기 오산시', '경기 이천시', '경기 평택시', '경기 화성시', '경기 이천시'],
    '경남': ['경남', '경남 창원시'],
    '경북': ['경북', '경북 안동시', '경북 포항시'],
    '광주광역시': ['광주', '광주 북구'],
    '대구광역시': ['대구', '대구 광역시', '대구 남구', '대구 북구', '대구 달서구', '대구 달성군', '대구 동구', '대구 수성구'],
    '대전광역시': ['대전', '대전 유성구', '대전 중구'],
    '부산광역시': ['부산', '부산 남구', '부산 동구', '부산 사상구', '부산 해운대구'],
    '강북': ['서울 은평구', '서울 마포구', '서울 서대문구', '서울 용산구', '서울 중구', '서울 종로구', '서울 성북구', '서울 강북구', '서울 도봉구', '서울 노원구', '서울 동대문구', '서울 성동구', '서울 중랑구', '서울 광진구'],
    '강서': ['서울 강서구', '서울 양천구', '서울 구로구', '서울 영등포구', '서울 금천구', '서울 동작구', '서울 관악구'],
    '강남': ['서울', '서울 서초구', '서울 강남구', '서울 송파구', '서울 강동구'],
    '울산광역시': ['울산', '울산 울주군', '울산 중구'],
    '인천광역시': ['인천', '인천 서구',' 인천 연수구'],
    '전남': ['전남', '전남 순천시'],
    '전북': ['전북', '전북 군산시', '전북 익산시'],
    '충남': ['충남', '충남 천안시'],
    '제주': ['제주', '제주 제주시']
}

class JobRecommendation:
    def __init__(self, location_mapping):
        self.location_mapping = location_mapping
        self.dataframe = None
        self.model = None

    def preprocess_job(self, job):
        if job == '데이터 엔지니어':
            return '데이터_엔지니어'
        return job

    def calculate_skills_match(self, skills_input, skills_data):
        input_skills = set([x.lower().strip() for x in skills_input.split()])
        data_skills = set([x.lower().strip() for x in skills_data])
        if not input_skills & data_skills:
            return 0
        else:
            return len(input_skills & data_skills) / len(input_skills)

    def calculate_location_match(self, user_input_location, job_location):
        location_score = 0.0

        # '서울 구로구' -> ['서울', '구로구']
        user_input_location_parts = user_input_location.split(' ')

        # '서울 구로구 디지털로31길 53, 1101호(구로동, 이엔씨벤처드림타워5차)' -> ['서울', '구로구', ...]
        job_location_parts = job_location.split(' ')

        # Check if the first two parts of user_input_location match the first two parts of job_location
        if user_input_location_parts[0] == job_location_parts[0] and user_input_location_parts[1] == job_location_parts[1]:
            location_score = 1.0

        return location_score


    

    def load_data(self, csv_path):
        dataframe = pd.read_csv(csv_path, encoding='cp949')
        dataframe['직무'] = dataframe['직무'].str.replace('데이터 엔지니어', '데이터_엔지니어')
        dataframe['근무지'] = dataframe['근무지'].apply(lambda x: ' '.join(x.split(' ')[:2]))  # Add this line
        dataframe['content_clean'] = dataframe['직무'] + ' ' + dataframe['근무지'] + ' ' + dataframe['기술스택']
        dataframe['content_clean'] = dataframe['content_clean'].str.lower()
        dataframe['content_clean'] = dataframe['content_clean'].apply(lambda x: re.sub(r'\W+', ' ', x))
        documents = [text.split() for text in dataframe.content_clean]
        self.model = Word2Vec(documents, vector_size=100, window=5, min_count=1, workers=4)
        self.dataframe = dataframe

    def get_recommendations(self, user_input_job, user_input_location, user_input_skills):
        user_input_job = self.preprocess_job(user_input_job)
        user_input_location = ' '.join(user_input_location.split(' ')[:2])  # Add this line
        user_input_content = user_input_job + ' ' + user_input_location + ' ' + user_input_skills
        user_vector = np.mean([self.model.wv[word] for word in user_input_content.split() if word in self.model.wv.key_to_index], axis=0)
        self.dataframe['similarity'] = self.dataframe['content_clean'].apply(lambda x: cosine_similarity([user_vector], [np.mean([self.model.wv[word] for word in x.split() if word in self.model.wv.key_to_index], axis=0)]))
        job_weight = 0.4
        location_weight = 0.2
        tech_stack_weight = 0.4
        self.dataframe['job_match'] = self.dataframe['직무'].apply(lambda x: len(set(user_input_job.split()).intersection(set([i.lower() for i in ast.literal_eval(x)])))) / len(set(user_input_job.split()))
        self.dataframe['skills_match'] = self.dataframe['기술스택'].apply(lambda x: self.calculate_skills_match(user_input_skills, ast.literal_eval(x)))
        self.dataframe['location_match'] = self.dataframe['근무지'].apply(lambda x: self.calculate_location_match(user_input_location, x))
        self.dataframe['score'] = self.dataframe['similarity'] * tech_stack_weight + self.dataframe['job_match'] * job_weight + self.dataframe['location_match'] * location_weight
        self.dataframe['tech_stack_length'] = self.dataframe['기술스택'].apply(lambda x: len(ast.literal_eval(x)))
        # 수정된 부분 시작
        location_matches = self.dataframe[self.dataframe['location_match'] > 0].copy()
        location_matches.sort_values(by=['location_match'], ascending=False, inplace=True)
        location_matches.reset_index(drop=True, inplace=True)
        recommendations = pd.concat([location_matches, self.dataframe[self.dataframe['location_match'] == 0]])
        recommendations.sort_values(by=['job_match', 'tech_stack_length'], ascending=[False, True], inplace=True)
        recommendations.reset_index(drop=True, inplace=True)

        # 수정된 부분 끝
        return recommendations.head(15)




# JobRecommendation 클래스의 인스턴스 생성
job_recommendation = JobRecommendation(location_mapping)

# 데이터 로드
job_recommendation.load_data('C:/myPyCode/final_project/final_true.csv')  # 실제 파일 경로에 맞게 수정해주세요.

# 사용자 입력 받기
user_input_job = input('직무를 입력하세요: ').lower()
user_input_location = input('근무지를 입력하세요: ').lower().strip()
user_input_skills = input('기술 스택을 입력하세요(여러 개 입력 시 공백으로 구분): ').lower().strip()

# 추천 공고 가져오기
recommendations = job_recommendation.get_recommendations(user_input_job, user_input_location, user_input_skills)

# 상위 15개의 추천 공고 출력
print(recommendations)
