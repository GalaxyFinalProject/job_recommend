import pandas as pd
import numpy as np
import re

# 각각 csv 불러오기
df1=pd.read_csv(r'C:\Users\Playdata\Desktop\programers_cp949_1.csv', encoding='cp949')
df2=pd.read_csv(r"C:\Users\Playdata\Desktop\wanted_cp949_1.csv", encoding='cp949')

# df 합치기
df = pd.concat([df1, df2])
df =df.drop('Unnamed: 0',axis=1)

# 기술스택 전처리
# np.where(condition, x, y)를 활용해서 condition이 참일 경우 x를, 아닌 경우 y로!
df['기술스택'] = df['기술스택'].str.replace("'", '"')
df['기술스택'] = np.where((df['기술스택'].isnull()) | (df['기술스택'] == "[]"), """[""]""", df['기술스택'])

# 마감일 전처리 
df['마감일'] = df['마감일'].fillna('상시 채용')

# 날짜 형식 2023-04-12
import datetime

def format_date(date_str):
    if date_str.startswith('상시 채용'):
        return date_str
    elif ':' in date_str:
        date_obj = datetime.datetime.strptime(date_str, '%y년 %m월 %d일 %H:%M까지')
        formatted_date = date_obj.strftime('%Y-%m-%d')
        return formatted_date
    else:
        return date_str

df['마감일'] = df['마감일'].apply(format_date)

# # 날짜 형식 2023-04-12 00:00
# import datetime

# def format_date(date_str):
#     if date_str.startswith('상시 채용'):
#         return date_str
#     elif ':' in date_str:
#         date_obj = datetime.datetime.strptime(date_str, '%y년 %m월 %d일 %H:%M까지')
#         formatted_date = date_obj.strftime('%Y-%m-%d %H:%M')
#         return formatted_date
#     else:
#         date_obj = datetime.datetime.strptime(date_str, '%Y-%m-%d')
#         formatted_date = date_obj.strftime('%Y-%m-%d') + ' 24:00'
#         return formatted_date

# df['마감일'] = df['마감일'].apply(format_date)

# 연봉 전처리
df['연봉'] = df['연봉'].fillna('추후 협의')

# 근무지 전처리
df['근무지'] = df['근무지'].str.replace('주소 ', '')
df['근무지'] = df['근무지'].str.replace('대한민국 ', '')
df['근무지'] = df['근무지'].str.replace('서울특별시', '서울')
df['근무지'] = df['근무지'].str.replace('서울시', '서울')
df['근무지'] = df['근무지'].str.replace('경기도', '경기')
df['근무지'] = df['근무지'].str.replace('제주특별자치도', '제주')
df['근무지'] = df['근무지'].str.replace('제주특별자치도', '제주')
df['근무지'] = df['근무지'].str.replace('울산광역시', '울산')
df['근무지'] = df['근무지'].str.replace('경상북도', '경북')
df['근무지'] = df['근무지'].str.replace('부산광역시', '부산')
df['근무지'] = df['근무지'].str.replace('인천광역시', '인천')
df['근무지'] = df['근무지'].str.replace('대전시', '대전')
df['근무지'] = df['근무지'].str.replace('대전광역시', '대전')
df['근무지'] = df['근무지'].str.replace('대구광역시', '대전')
df['근무지'] = df['근무지'].str.replace('서울 경기', '경기')


# 따로 열어보고 이상한 것 적는 곳
df['근무지'] = df['근무지'].str.replace('Level ', '')
df['근무지'] = df['근무지'].str.replace('입니다', '')
df['근무지'] = df['근무지'].str.replace('Seoul, Republic of Korea', '')
df['근무지'] = df['근무지'].str.replace('입니다', '')
df['근무지'] = df['근무지'].str.replace('대구 대전', '대전')
df['근무지'] = df['근무지'].str.replace('서울 06237', '')
df['근무지'] = df['근무지'].str.replace('서울 onetkorea137@gmail.com', '')
df['근무지'] = df['근무지'].str.replace(r'서울 \(06159\)\s*', '')
df['근무지'] = df['근무지'].str.replace(r'서울 13449\)\s*', '')
df['근무지'] = df['근무지'].str.replace(r'\(08380\)\s*', '')


df['근무지'] = df['근무지'].fillna('')  # 결측치를 빈 문자열로 대체
df['근무지'] = df['근무지'].astype(str)  # 데이터 타입을 문자열로 변환
df['근무지'].unique()

df['근무지'] = df['근무지'].apply(lambda x: x.split(' ', 1)[1] if len(x.split(' ')) > 1 and x.split(' ')[0] == x.split(' ')[1] else x)


# 같은 공고 판별하기
# 프로그래머스와 원티드에서 공통되는 회사 구하기
intersection = pd.Series(list(set(df1['회사명'].unique()) & set(df2['회사명'].unique())))
# 공통 회사 공고 구하기
filtered_df = df[df['회사명'].isin(intersection)]
# 공고명에서 '신입'과 ()로 둘러싸인 부분 삭제
filtered_df['공고명'] = filtered_df['공고명'].apply(lambda x: re.sub(r' \(신입.*?\)|신입|\[신입.*?\] ', '', x))

# 공고문과 회사명이 일치하는 것들 뽑아냄
duplicates = filtered_df[filtered_df.duplicated(subset=['공고명', '회사명'], keep=False)]
find_df = pd.concat([filtered_df, duplicates]).drop_duplicates(keep=False)

# 회사가 같고, 링크는 다르고, 한 공고문이 다른 공고문을 완전히 포함하고 있을 때 
# 중복된 공고명을 가진 그룹 찾기
grouped = find_df.groupby('회사명')

# 필터링된 결과를 저장할 데이터프레임을 생성
filtered_results = pd.DataFrame(columns=find_df.columns)

# 각 그룹에서 필터링 작업 수행
for _, group in grouped:
    if len(group) > 1:
        for i in range(len(group)):
            prog_group = group.iloc[i]
            for j in range(i + 1, len(group)):
                wanted_group = group.iloc[j]
                if ((prog_group['링크'].startswith('https://programmers.co.kr') and wanted_group['링크'].startswith('https://www.wanted.co.kr'))
                    or (prog_group['링크'].startswith('https://www.wanted.co.kr') and wanted_group['링크'].startswith('https://programmers.co.kr'))):
                    if pd.Series(prog_group['공고명']).str.contains(wanted_group['공고명'], regex=False).any() or pd.Series(wanted_group['공고명']).str.contains(prog_group['공고명'], regex=False).any():
                        filtered_results = filtered_results.append(prog_group)
                        filtered_results = filtered_results.append(wanted_group)

filtered_results.reset_index(drop=True, inplace=True)

# 프로그래머스와 원티드에 공통으로 올라와있는 것
same = pd.concat([duplicates, filtered_results])
# 공고문과 회사명 일치하는 건 프로그래머스로 통일
same_pro_df = same[same['링크'].str.startswith('https://programmers.co.kr')]

# 회사 공고가 양쪽에 다 올라왔지만 겹치지 않는 공고
solo_df = filtered_df[~filtered_df.duplicated(subset=['공고명', '회사명'], keep=False)]
solo_df = solo_df[~solo_df['링크'].isin(filtered_results['링크'])]

# 최종 데이터
excluded_links = filtered_df['링크'].tolist()
final_df = df[~df['링크'].isin(excluded_links)]
final_df = final_df.append(solo_df, ignore_index=True)
final_df = final_df.append(same_pro_df, ignore_index=True)

# 저장
final_df.to_csv(r'C:\Users\Playdata\Desktop\programers+wanted_final.csv', index=False, encoding='cp949')