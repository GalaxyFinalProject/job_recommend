import pandas as pd
import numpy as np
import re
import csv

# 각각 크롤링한 csv 불러오기
df1=pd.read_csv(r'C:\Users\Playdata\Desktop\programers_cp949_3.csv', encoding='cp949')
df2=pd.read_csv(r"C:\Users\Playdata\Desktop\wanted_cp949_1.csv", encoding='cp949')
df3=pd.read_csv(r"C:\Users\Playdata\Desktop\jumpit_cp949_2.csv", encoding='cp949')


# 직무&기술스택보기 위한 부분
# 세 개의 CSV 파일 합치기
combined_position_stack = {}

# 첫 번째 CSV 파일 읽어오기
with open(r"C:\Users\Playdata\Desktop\position_stack1.csv", 'r') as csvfile:
    reader = csv.reader(csvfile)
    next(reader)  # 헤더 건너뛰기
    for row in reader:
        position = row[0]
        stack_item = row[1]
        if position in combined_position_stack:
            combined_position_stack[position].add(stack_item)
        else:
            combined_position_stack[position] = {stack_item}
            
# 두 번째 CSV 파일 읽어오기
with open(r"C:\Users\Playdata\Desktop\position_stack2.csv", 'r') as csvfile:
    reader = csv.reader(csvfile)
    next(reader)  # 헤더 건너뛰기
    for row in reader:
        position = row[0]
        stack_item = row[1]
        if position in combined_position_stack:
            combined_position_stack[position].add(stack_item)
        else:
            combined_position_stack[position] = {stack_item}

            
# 세 번째 CSV 파일 읽어오기
with open(r"C:\Users\Playdata\Desktop\position_stack3.csv", 'r') as csvfile:
    reader = csv.reader(csvfile)
    next(reader)  # 헤더 건너뛰기
    for row in reader:
        position = row[0]
        stack_item = row[1]
        if position in combined_position_stack:
            combined_position_stack[position].add(stack_item)
        else:
            combined_position_stack[position] = {stack_item}

#최종 저장
import os
directory = r'C:\Users\Playdata\Desktop\\' 

filename1 = os.path.join(directory, 'combined_position_stack.csv')

with open(filename1, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Position', 'Stack'])  # 헤더 작성
    for position, stack in combined_position_stack.items():
        for stack_item in stack:
            writer.writerow([position, stack_item])            





# df 합치기
df = pd.concat([df1, df2])
df = pd.concat([df, df3])
df =df.drop('Unnamed: 0',axis=1)

# 직무 전처리
import ast
# 문자열을 리스트로 변환하고 원하는 형식으로 변경하는 함수
def format_list(string):
    formatted_lst = [f'"{item.strip()}"' for item in string.split(',')]  # 원하는 형식으로 변경
    return formatted_lst
# '직무' 컬럼의 데이터 형식 변경
df['직무'] = df['직무'].apply(format_list)

# 기술스택 전처리
# np.where(condition, x, y)를 활용해서 condition이 참일 경우 x를, 아닌 경우 y로!
df['기술스택'] = df['기술스택'].str.replace("'", '"')
df['기술스택'] = np.where((df['기술스택'].isnull()) | (df['기술스택'] == "[]"), """[""]""", df['기술스택'])

# 마감일 전처리 
df['마감일'] = df['마감일'].str.replace('상시', '')
df['마감일'] = df['마감일'].str.replace('상시 ', '')
df['마감일'] = df['마감일'].str.replace('채용', '상시 채용')
df['마감일'] = df['마감일'].str.replace(' 상시 채용', '상시 채용')
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
df['근무지'] = df['근무지'].str.replace('대구광역시', '대구')
df['근무지'] = df['근무지'].str.replace('서울 경기', '경기')
df['근무지'] = df['근무지'].str.replace('전라남도', '전남')


# 따로 열어보고 이상한 것 적는 곳
df['근무지'] = df['근무지'].str.replace('Level ', '')
df['근무지'] = df['근무지'].str.replace('입니다', '')
df['근무지'] = df['근무지'].str.replace('입니다', '')
df['근무지'] = df['근무지'].str.replace('대구 대전', '대전')
df['근무지'] = df['근무지'].str.replace('서울 06237', '')
df['근무지'] = df['근무지'].str.replace(' 서울', '서울')
df['근무지'] = df['근무지'].str.replace('서울 onetkorea137@gmail.com', '')
df['근무지'] = df['근무지'].str.replace(r'서울 \(06159\)\s*', '')
df['근무지'] = df['근무지'].str.replace(r'서울 13449\)\s*', '')
df['근무지'] = df['근무지'].str.replace(r'\(07807\)\s*', '')
df['근무지'] = df['근무지'].str.replace(r'\(08380\)\s*', '')
df['근무지'] = df['근무지'].str.replace(r'\(06159\)\s*', '')
df['근무지'] = df['근무지'].str.replace(r'\[본사\]\s*', '')
df['근무지'] = df['근무지'].str.replace('\n·', '')
df['근무지'] = df['근무지'].str.replace(r'^\(\d+\)\s*', '', regex=True)
df['근무지'] = df['근무지'].str.replace(r'\[.*?\]', '', regex=True)
df['근무지'] = df['근무지'].str.replace('연남로13길9', '서울 마포구 연남로13길9', regex=True)
df['근무지'] = df['근무지'].str.replace('광주 광주광역시', '광주')
df['근무지'] = df['근무지'].str.replace('서울 논현로', '서울 강남구 논현로')
df['근무지'] = df['근무지'].str.replace('서울 왕십리로', '서울 성동구 왕십리로')
# df['근무지'] = df['근무지'].str.replace('서울 대치로', '')
df['근무지'] = df['근무지'].str.replace('서울 서초동', '서울 서초구 서초동')
df['근무지'] = df['근무지'].str.replace('서울 마포대로', '서울 마포구 마포대로')
# df['근무지'] = df['근무지'].str.replace('서울 강남대로', '')
df['근무지'] = df['근무지'].str.replace('서울 반포대로', '서울 서초구 반포대로')
df['근무지'] = df['근무지'].str.replace('서울 원격 근무', '')
df['근무지'] = df['근무지'].str.replace('서울 개포로', '서울 강남구 개포로')
df['근무지'] = df['근무지'].str.replace('서울 삼성로', '서울 강남구 삼성로')
df['근무지'] = df['근무지'].str.replace('서울 여의도', '서울 영등포구 여의도동')
df['근무지'] = df['근무지'].str.replace('서울서울', '서울')
df['근무지'] = df['근무지'].str.replace('서울 선릉로', '서울 강남구 선릉로')
df['근무지'] = df['근무지'].str.replace('서울 테헤란로', '서울 강남구 테헤란로')
df['근무지'] = df['근무지'].str.replace('서울 삼성동', '서울 강남구 삼성동')
df['근무지'] = df['근무지'].str.replace('서울 양재동', '서울 서초구 양재동')
df['근무지'] = df['근무지'].str.replace('경기 금토로', '경기 성남시 수정구 금토로')
df['근무지'] = df['근무지'].str.replace('대전 가정북로', '대전 유성구 가정북로')
df['근무지'] = df['근무지'].str.replace('서울 강남대로 156', '서울 서초구 강남대로 156')
df['근무지'] = df['근무지'].str.replace('경기 판교', '경기 성남시 분당구 판교동')
df['근무지'] = df['근무지'].str.replace('대구 대구시내', '대구 중구 동성로')
df['근무지'] = df['근무지'].str.replace('서울 양화로', '서울 마포구 양화로')
df['근무지'] = df['근무지'].str.replace('서울 발산역', '서울 강서구 마곡동')
df['근무지'] = df['근무지'].str.replace('서울 양재역', '서울 서초구 양재역')
# '근무지' 컬럼의 데이터 형식 변경

df.loc[df['근무지'].str.contains('Seoul, Republic of Korea', na=False), '근무지'] = ''
df.loc[df['근무지'].str.contains('서울 대치로 223', na=False), '근무지'] = ''


df['근무지'] = df['근무지'].fillna('')  # 결측치를 빈 문자열로 대체
df['근무지'] = df['근무지'].astype(str)  # 데이터 타입을 문자열로 변환

df['근무지'] = df['근무지'].apply(lambda x: x.split(' ', 1)[1] if len(x.split(' ')) > 1 and x.split(' ')[0] == x.split(' ')[1] else x)


# 같은 공고 판별하기
# 프로그래머스와 원티드에서 공통되는 회사 구하기
intersection = pd.Series(list(set(df1['회사명'].unique()) & set(df2['회사명'].unique())))
# 공통 회사 공고 구하기
filtered_df = df[df['회사명'].isin(intersection)]

# 공고명에서 '신입'과 ()로 둘러싸인 부분 삭제
filtered_df.loc[:, '공고명'] = filtered_df['공고명'].apply(lambda x: re.sub(r' \(신입.*?\)|신입|\[신입.*?\] |\[코스닥상장사\] |채용', '', x))

# 공고문과 회사명이 일치하는 것들 뽑아냄
duplicates_df = filtered_df[filtered_df.duplicated(subset=['공고명', '회사명'], keep=False)]

# 회사가 같고, 링크는 다르고, 한 공고문이 다른 공고문을 완전히 포함하고 있을 때 
# 중복된 공고명을 가진 그룹 찾기
grouped = filtered_df.groupby('회사명')

# 필터링된 결과를 저장할 데이터프레임을 생성
filtered_results = pd.DataFrame(columns=filtered_df.columns)

# 각 그룹에서 필터링 작업 수행
for _, group in grouped:
    if len(group) > 1:
        for i in range(len(group)):
            prog_group = group.iloc[i]
            for j in range(i + 1, len(group)):
                wanted_group = group.iloc[j]
                # 서로 다른 링크인지 검사
                if ((prog_group['링크'].startswith('https://programmers.co.kr') and wanted_group['링크'].startswith('https://www.wanted.co.kr'))
                    or (prog_group['링크'].startswith('https://www.wanted.co.kr') and wanted_group['링크'].startswith('https://programmers.co.kr'))):
                    # 공고문이 다른 공고문을 완전히 포함하는지 확인
                    if pd.Series(prog_group['공고명']).str.contains(wanted_group['공고명'], regex=False).any() or pd.Series(wanted_group['공고명']).str.contains(prog_group['공고명'], regex=False).any():
                        filtered_results = filtered_results._append(prog_group)
                        filtered_results = filtered_results._append(wanted_group)

filtered_results.reset_index(drop=True, inplace=True)

# 프로그래머스와 원티드에 공통으로 올라와있는 것
same = pd.concat([duplicates_df, filtered_results])
# 공고문과 회사명 일치하는 건 프로그래머스로 통일
same_df = same[same['링크'].str.startswith('https://programmers.co.kr')]

# 회사 공고가 양쪽에 다 올라왔지만 겹치지 않는 공고
# solos_df = filtered_df - duplicates
solo_df = filtered_df[~filtered_df.duplicated(subset=['공고명', '회사명'], keep=False)]
# 구해진 solo_df에 공고 똑같은데 이름이 다른 데이터(filtered_results) 까지 제외
solo_df = solo_df[~solo_df['링크'].isin(filtered_results['링크'])]

# 프로그래머스+원티드 데이터
# 중복데이터로 분류된 값들의 링크들을 변수에 저장
excluded_links = filtered_df['링크'].tolist()
# 중복데이터가 아닌 데이터들을 final_df에 저장
pro_wanted_df = df[~df['링크'].isin(excluded_links)]
# 회사는 겹치지만 공고는 겹치지 않는 solo_ignore 추가
pro_wanted_df = pd.concat([pro_wanted_df, solo_df], ignore_index=True)

# 중복데이터 중에 프로그래머스 링크만 있는 것 추가
pro_wanted_df = pro_wanted_df._append(same_df, ignore_index=True)
pro_wanted_df = pro_wanted_df.drop_duplicates(subset='링크')

# 프로그래머스_원티드 & 점핏
intersection = pd.Series(list(set(pro_wanted_df['회사명'].unique()) & set(df3['회사명'].unique())))
df=pro_wanted_df

filtered_df = df[df['회사명'].isin(intersection)]

# 공고명에서 '신입'과 ()로 둘러싸인 부분 삭제
filtered_df.loc[:, '공고명'] = filtered_df['공고명'].apply(lambda x: re.sub(r' \(신입.*?\)|신입|\[신입.*?\] |\[코스닥상장사\] |채용', '', x))

# 공고문과 회사명이 일치하는 것들 뽑아냄
duplicates_df = filtered_df[filtered_df.duplicated(subset=['공고명', '회사명'], keep=False)]

# 회사가 같고, 링크는 다르고, 한 공고문이 다른 공고문을 완전히 포함하고 있을 때 
# 중복된 공고명을 가진 그룹 찾기
grouped = filtered_df.groupby('회사명')

# 필터링된 결과를 저장할 데이터프레임을 생성
filtered_results = pd.DataFrame(columns=filtered_df.columns)

# 각 그룹에서 필터링 작업 수행
for _, group in grouped:
    if len(group) > 1:
        for i in range(len(group)):
            prog_wanted_group = group.iloc[i]
            for j in range(i + 1, len(group)):
                jumpit_group = group.iloc[j]
                # 서로 다른 링크인지 검사
                if (
                    (prog_wanted_group['링크'].startswith('https://programmers.co.kr') or prog_wanted_group['링크'].startswith('https://www.wanted.co.kr'))
                    and jumpit_group['링크'].startswith('https://www.jumpit.co.kr')
                ) or (
                    jumpit_group['링크'].startswith('https://www.jumpit.co.kr')
                    and (prog_wanted_group['링크'].startswith('https://www.wanted.co.kr') or prog_wanted_group['링크'].startswith('https://programmers.co.kr'))
                ):

                    # 공고문이 다른 공고문을 완전히 포함하는지 확인
                    if pd.Series(prog_wanted_group['공고명']).str.contains(jumpit_group['공고명'], regex=False).any() or pd.Series(jumpit_group['공고명']).str.contains(prog_wanted_group['공고명'], regex=False).any():
                        filtered_results = filtered_results._append(prog_wanted_group)
                        filtered_results = filtered_results._append(jumpit_group)

filtered_results.reset_index(drop=True, inplace=True)

same = pd.concat([duplicates_df, filtered_results])
# 점핏과 겹치는 경우, 점핏을 대표로 함
same_df = same[same['링크'].str.startswith('https://www.jumpit.co.kr')]

# 회사가 같지만 회사명과 공고명이 같은 데이터(duplicates)는 아닌 것들을 solo_df에 저장
# solos_df = filtered_df - duplicates
solo_df = filtered_df[~filtered_df.duplicated(subset=['공고명', '회사명'], keep=False)]
# 구해진 solo_df에 공고 똑같은데 이름이 다른 데이터(filtered_results) 까지 제외
solo_df = solo_df[~solo_df['링크'].isin(filtered_results['링크'])]

# 최종 데이터
# 중복데이터로 분류된 값들의 링크들을 변수에 저장
excluded_links = filtered_df['링크'].tolist()
# 중복데이터가 아닌 데이터들을 final_df에 저장
final_data = df[~df['링크'].isin(excluded_links)]
# 회사는 겹치지만 공고는 겹치지 않는 solo_ignore 추가
final_data = pd.concat([final_data, solo_df], ignore_index=True)

# 중복데이터 중에 프로그래머스 링크만 있는 것 추가
final_data = pd.concat([final_data, same_df], ignore_index=True)


final_data = final_data.drop_duplicates(subset='링크')

# 저장
final_data.to_csv(r'C:\Users\Playdata\Desktop\final.csv', index=False, encoding='cp949')


# 직무 마지막 전처리
df4=pd.read_csv(r"C:\Users\Playdata\Desktop\final.csv", encoding='cp949')
df4['직무'] = df4['직무'].str.replace("'", '"')
df4.to_csv(r'C:\Users\Playdata\Desktop\final__.csv', index=False, encoding='cp949')