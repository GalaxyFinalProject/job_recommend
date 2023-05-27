from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time
import pandas as pd
import requests
import json

# 저장할 데이터프레임 미리 만들어놓기
job_postings_df = pd.DataFrame(columns=['공고명', '회사명', '직무', '마감일', '고용 형태', '근무지','학력', '기술 스택','링크'])

driver = webdriver.Chrome()

# 페이지 열기
driver.get('https://www.wanted.co.kr/wdlist/518/873?country=kr&job_sort=company.response_rate_order&years=0&locations=all')

time.sleep(3)  # 3초 동안 대기
    
driver.implicitly_wait(10)
html = driver.page_source
soup = BeautifulSoup(html, 'lxml')

# 직무 버튼 클릭
buttons = driver.find_element(By.XPATH, '//*[@id="__next"]/div[3]/article/div/div[2]/button/span[2]')
buttons.click()

time.sleep(3)
html = driver.page_source

# 직무 리스트 만들기
soup = BeautifulSoup(html, 'lxml')
positions=soup.find_all('button', class_="JobCategoryItem_JobCategoryItem__oUaZr")
positions = [position.text for position in positions][1:]

for i in range(0,len(positions)):
    position = positions[i]
    print(f"지금 포지션은 {position}")
    if i==0:
        pass
    else:
        driver.close()
        driver = webdriver.Chrome()

        # 페이지 열기
        driver.get('https://www.wanted.co.kr/wdlist/518/873?country=kr&job_sort=company.response_rate_order&years=0&locations=all')
    
        buttons = driver.find_element(By.XPATH, '//*[@id="__next"]/div[3]/article/div/div[2]/button')
        buttons.click()
    
        driver.implicitly_wait(10)
        
        button = driver.find_element(By.XPATH, '//*[@id="__next"]/div[3]/article/div/div[2]/section/div[1]/div/button[2]')
        button.click()

        button = driver.find_element(By.XPATH, f'//*[@id="__next"]/div[3]/article/div/div[2]/section/div[1]/div/button[{i+2}]')
        button.click()

        button = driver.find_element(By.XPATH, '//*[@id="__next"]/div[3]/article/div/div[2]/section/div[2]/button/span[2]')
        button.click()
    print(f'{i+1}. 지금부터 {position} 시작!')
    
    # position 별 크롤링 하는 것

    # 스크롤 하는 횟수 세는 변수
    scroll_count = 0

    # 스크롤 내리기
    while True:
        # 스크롤 위치 저장
        last_height = driver.execute_script("return document.documentElement.scrollHeight")

        # 스크롤 내리기
        driver.execute_script("window.scrollTo(0, document.documentElement.scrollHeight);")

        # 로딩 대기
        time.sleep(3)

        # 스크롤 위치 갱신
        new_height = driver.execute_script("return document.documentElement.scrollHeight")
        scroll_count += 1

        # 스크롤을 더 이상 내릴 수 없는 경우 종료
        if new_height == last_height or scroll_count == 10000:
            break


    # 페이지 내용 가져오기
    page_source = driver.page_source

    # BeautifulSoup을 사용하여 데이터 추출
    soup = BeautifulSoup(page_source, 'lxml')
    # 원하는 정보를 찾기 위해 적절한 BeautifulSoup 메소드를 사용합니다.

    a=soup.find("div", class_="List_List_container__JnQMS")
    href_selector = 'div.Card_className__u5rsb a[href]'
    href_values = [a['href'] for a in soup.select(href_selector)]

    # 결과 출력
    url_num=[href for href in href_values]
    print(f'{position} url주소 추출 끝!')
    
    print("이제 데이터 프레임 채워넣기를 시작하겠습니다.")
    
    # 데이터프레임 채워넣기 시작
    for url in url_num:
        URL = f'https://www.wanted.co.kr//{url}'
        headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

        # 웹 페이지 가져오기
        response = requests.get(URL)
        html_content = response.content

        # BeautifulSoup 객체 생성
        soup = BeautifulSoup(html_content, 'lxml')
        script_content = soup.select("script", type='application/ld+json')[0]
        data = json.loads(script_content.string)

        # 공고명
        title=data['title']
        #회사명
        company=data['hiringOrganization']['name']
        #마감일
        deadline=data['validThrough']
        #근무지
        work_location=data['jobLocation']['address']['streetAddress']

        driver = webdriver.Chrome()
        driver.get(url=URL)

        html = driver.page_source
        soup = BeautifulSoup(html, 'lxml')

        # 기술 스택
        stack= [stack.text for stack in soup.find_all("div",class_="SkillItem_SkillItem__E2WtM")]

        #추출한 정보를 데이터프레임에 추가
        job_postings_df.loc[len(job_postings_df)] = [title, company, position, deadline, None, work_location, None, stack, URL]
    print(f"{position} 데이터 프레임 생성 끝!")

# 저장
job_postings_df.to_csv(r"C:\Users\Playdata\Desktop\wanted.csv", encoding='utf-8-sig', index=False)
    