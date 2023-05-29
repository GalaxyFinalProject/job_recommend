# -*- coding: utf-8 -*-
"""
Created on Thu May 25 15:55:22 2023

@author: user
"""
from bs4 import BeautifulSoup
from selenium import webdriver # 브라우저를 열수 있는 드라이브모듈
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
import time
from selenium.common.exceptions import NoSuchElementException
import csv



chrome_options = Options()

chrome_options.add_experimental_option("detach", True)

service = Service(executable_path=ChromeDriverManager().install())

driver = webdriver.Chrome(service=service, options=chrome_options)

orig_url = 'https://www.jumpit.co.kr/positions' # 크롤링 할 사이트


driver.get(orig_url)
time.sleep(2)

#스크롤 전 높이
before_h = driver.execute_script("return window.scrollY")  # 스크롤을 하지 않았으니 0이 변수에 대입된다.


first_click = driver.find_element(By.CSS_SELECTOR, 'div > section > h1')
first_click.click()
time.sleep(1)
career = driver.find_element(By.XPATH, '/html/body/div[1]/main/div/div[1]/div/div[1]/div/div[1]/div[2]/button')
career.click()
time.sleep(2)

rookie = driver.find_element(By.XPATH, '//*[@id="root"]/main/div/div/div/div[1]/div/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/label')
rookie.click()
time.sleep(2)

protector = driver.find_element(By.CSS_SELECTOR, '#root > main')
protector.click()
time.sleep(1)


add_list = []
pos = ['서버/백엔드', '프론트엔드', '웹개발', '안드로이드', 'IOS', '크로스플랫폼', '게임개발', '게임개발', 'DBA', '데이터 엔지니어', 'AL/ML', 'DevOps', '보안엔지니어', 'QA', '개발PM', 'HW/임베디드', '소프트웨어', '웹퍼블리셔', 'VR/AR/3D', '블록체인', '기술지원' ]

for i in range(2, 23):
    position = driver.find_element(By.CSS_SELECTOR, f'div.list_job_btn_wrap > button:nth-child({i})')
    position_text = pos[i-2]
    position.click()

    # 무한 스크롤
    prev_page_source = ""
    while True:
        # 맨 아래로 스크롤
        driver.find_element(By.CSS_SELECTOR, "body").send_keys(Keys.END)
        time.sleep(2)

        # 페이지 소스 가져오기
        current_page_source = driver.page_source

        if current_page_source == prev_page_source:
            # 이전 페이지 소스와 현재 페이지 소스가 같으면 스크롤이 끝까지 이동한 것으로 판단하여 반복문을 탈출
            break

        prev_page_source = current_page_source

    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    items = soup.select('div.sc-fIosxK.fKzIXW')

    for item in items:
        add_elem = item.select('a')
        for add in add_elem:
            add_list.append(('https://www.jumpit.co.kr' + add['href'], position_text))

    driver.find_element(By.CSS_SELECTOR, "body").send_keys(Keys.HOME)
    time.sleep(1)
    position.click()
    time.sleep(2)


csv_save_path = 'C:/myPyCode/final_project/jumpit_page.csv'

with open(csv_save_path, 'w', newline='', encoding='cp949') as file:
    writer = csv.writer(file)
    writer.writerow(['Title', 'Company', 'Position', 'Deadline', 'Employment Type', 'Salary', 'Work Location', 'Grade', 'Stack', 'Link'])

    for orig_url, position in add_list:
        driver.get(orig_url)
        time.sleep(4)

        title = driver.find_element(By.CSS_SELECTOR, 'section.sc-gnnDb > h1').text
        company = driver.find_element(By.CSS_SELECTOR, 'div.position_title_box_desc > a').text

        try:
            deadline = driver.find_element(By.CSS_SELECTOR, 'dl.sc-itWPBs:nth-child(4) > dd').text
        except NoSuchElementException:
            deadline = None

        try:    
            work_location = driver.find_element(By.CSS_SELECTOR, 'dl.sc-itWPBs:nth-child(5) > dd:nth-child(2) > ul:nth-child(1) > li:nth-child(1)').text
        except NoSuchElementException:
            work_location = None
        try:
            grade = driver.find_element(By.CSS_SELECTOR, 'dl.sc-itWPBs:nth-child(3) > dd:nth-child(2)').text
        except NoSuchElementException:
            grade = None
        try:
            stack_elements = driver.find_elements(By.XPATH, '/html/body/div[1]/main/div/div[2]/div/section[2]/dl[1]/dd/pre/div')
            stack = [element.text for element in stack_elements]
        except NoSuchElementException:
            stack = None
        salary = None
        employment_type = None
        link = orig_url
        
        writer.writerow([title, company, position, deadline, employment_type, salary, work_location, grade, stack, link])

driver.quit()

