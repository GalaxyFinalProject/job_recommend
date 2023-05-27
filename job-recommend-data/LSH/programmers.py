from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import time

last_page = 16

url_num = []
driver = webdriver.Chrome()

for page in range(1, last_page + 1):
    orig_url = f'https://career.programmers.co.kr/job?page={page}&min_career=0&order=recent'
    driver.get(orig_url)
    imgcount = driver.find_elements(By.CSS_SELECTOR, '.list-positions')

    for i in imgcount:
        s = i.get_attribute('outerHTML')

    html = driver.page_source
    soup = BeautifulSoup(html, 'lxml')
    divs = soup.find_all('ul', class_='list-positions')

    for div in divs:
        lists = div.find_all('li', class_='list-position-item')
        for list in lists:
            atag = list.find('a', class_='position-link')
            url_num.append(atag.attrs['href'].split('/')[-1])

    print(f"{page}페이지 전체 공고 훑어보기 끝!")

driver.quit()



print()
print("이제부터 데이터프레임을 만들어 보겠습니다!")
print()


job_postings_df = pd.DataFrame(columns=['공고명', '회사명', '직무', '마감일', '고용형태', '연봉', '근무지', '학력', '기술스택','링크'])
print(job_postings_df)

n = 0
driver = webdriver.Chrome("chromedriver")

for url in url_num:
    URL = f'https://programmers.co.kr/job_positions/{url}'
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    driver.get(url=URL)
    
    time.sleep(3)  # 3초 동안 대기
    
    driver.implicitly_wait(10)
    html = driver.page_source
    soup = BeautifulSoup(html, 'lxml')

    # 공고명
    title_element = soup.select_one("h2")
    title = title_element.text if title_element else None

    # 회사명
    company = soup.select_one('h4.e_ow99Z6WyqEsY3oG3gk a').text

    # 직무
    position = soup.find("div", text="직무")
    position = position.find_next_sibling("div").text if position and position.find_next_sibling("div") else None

    # 지원 마감
    deadline = soup.find("div", text="지원 마감")
    deadline = deadline.find_next_sibling("div").text if deadline and deadline.find_next_sibling("div") else None

    # 고용 형태 정보 추출
    employment_type = soup.find("div", text="고용 형태")
    employment_type = employment_type.find_next_sibling("div").text if employment_type and employment_type.find_next_sibling("div") else None

    # 연봉 정보 추출
    salary = soup.find("div", text="연봉")
    salary = salary.find_next_sibling("div").text if salary and salary.find_next_sibling("div") else None

    # 근무 위치 정보 추출
    work_location = soup.find("div", text="근무 위치")
    work_location = work_location.find_next_sibling("div").text if work_location and work_location.find_next_sibling("div") else None

    # 기술 스택 정보 추출
    stacks = soup.find("ul", class_="cV112CI8tyAk3_QcrdKs")
    if stacks:
        stack = [li_tag.text for li_tag in stacks.find_all('li')]
    else:
        stack = None

    # 추출한 정보를 데이터프레임에 추가
    job_postings_df.loc[len(job_postings_df)] = [title, company, position, deadline, employment_type, salary, work_location, None, stack, URL]
    print(f"현재까지 모인 공고:{n+1}개!")
    
    if n%5==0:
        print(job_postings_df.tail())

    n += 1

driver.quit()

# 저장
job_postings_df.to_csv(r"C:\Users\Playdata\Desktop\programers.csv", encoding='utf-8-sig', index=False)

