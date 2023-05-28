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

