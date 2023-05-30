from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
from selenium.webdriver.support.ui import WebDriverWait
import time
import numpy as np

# 직무 분류
def classify_position(position):
#     if position in ['시스템 네트워크','시스템, 네트워크 관리자', '시스템 소프트웨어', '로보틱스 미들웨어', '사물인터넷(IoT)']:
#         return '시스템/네트워크'
    if position in ['모바일 게임', '게임 클라이언트', '게임 서버']:
        return '게임개발'
    elif position in ['머신러닝', '인공지능', '머신러닝 엔지니어']:
        return 'AI/ML'
    elif position in ['웹 개발자','웹 풀스택','PHP 개발자','루비온레일즈 개발자']:
        return '웹개발'
    elif position in ['데이터 엔지니어','데이터 엔지니어링','빅데이터 엔지니어','BI 엔지니어']:
        return '데이터 엔지니어'
    elif position in ['데브옵스','DevOps/시스템 관리자']:
        return 'DevOps'
#     elif position in ['인터넷 보안','보안 엔지니어']:
#         return '보안엔지니어'
#     elif position in ['임베디드 소프트웨어','임베디드 개발자','하드웨어 엔지니어']:
#         return 'HW/임베디드'
#     elif position in ['크로스 플랫폼', '크로스플랫폼 앱 개발자']:
#         return '크로스플랫폼'
#     elif position in ['그래픽스','영상,음성 엔지니어', '그래픽스 엔지니어']:
#         return '멀티미디어 엔지니어'
#     elif position in ['소프트웨어 엔지니어','.NET 개발자']:
#         return '소프트웨어'
    elif position in ['서버/백엔드', '서버 개발자', '자바 개발자', 'C,C++ 개발자','파이썬 개발자','Node.js 개발자','DBA']:
        return '백엔드'
    elif position in ['프론트엔드', '프론트엔드 개발자']:
        return '프론트엔드'
    elif position in ['안드로이드', '안드로이드 개발자']:
        return '안드로이드'
    elif position in ['iOS', 'iOS 개발자']:
        return 'iOS'
#     elif position in ['개발PM','개발 매니저','프로덕트 매니저']:
#         return '개발PM'
#     elif position in ['QA', 'QA, 테스트 엔지니어']:
#         return 'QA'
    elif position in ['블록체인 플랫폼 엔지니어','블록체인']:
        return '블록체인'
    elif position in ['VR/AR/3D','VR 엔지니어']:
        return 'VR/AR'
#     elif position in ['기술지원']:
#         return '기술지원' 
#     elif position in ['데이터 사이언티스트']:
#         return '데이터 사이언티스트' 
#     elif position in ['웹퍼블리셔', '웹 퍼블리싱']:
#         return '웹퍼블리셔' 
    
# 기술 분류
def classify_skill(skill):
    if skill in [ 'AWS','AWS Alexa','AWS Amplify','AWS CloudFront','AWS DynamoDB','AWS EC2','AWS ECS','AWS EKS','AWS Lambda','AWS RDS','AWS S3','AWS Serverless Application Repository','AWS Simple Notification Service(AWS SNS)','AWS Simple Queue Service(AWS SQS)','Amazon Web Service','Amazon Web Services(AWS)']:
        return 'AWS'
    elif skill in ['Android','Android Studio']:
        return 'Android Studio'
    elif skill in ['Angular','AngularJS',]:
        return 'Angular'
    elif skill in ['Apache']:
        return 'Apache'
    elif skill in ['Apache Hadoop','Hadoop']:
        return 'Hadoop'
    elif skill in ['Apache Kafka']:
        return 'Kafka'
    elif skill in [ 'Apache Spark','Spark']:
        return 'Spark'
    elif skill in ['Apache ZooKeeper']:
        return 'ZooKeeper'
    elif skill in [ 'Azure','Azure Computer Vision','Azure Emotion']:
        return 'Azure'
    elif skill in ['C#']:
        return 'C#'
    elif skill in [ 'C', 'C / C++','C++',]:
        return 'C / C++'
    elif skill in ['AutoCAD','CAD']:
        return 'CAD'
    elif skill in [ 'CSS','CSS3']:
        return 'CSS'
    elif skill in [ 'ElasticSearch','Elasticsearch']:
        return 'ElasticSearch'
    elif skill in [ 'FPGA','FPGA 프로토 타이핑']:
        return 'FPGA'
    elif skill in ['Figma']:
        return 'Figma'
    elif skill in ['GCP','GCP(Google Cloud Platform)','GCPs','Google Cloud Platform']:
        return 'GCP'
    elif skill in ['GIS','GIS 시스템','GIS 응용 프로그램']:
        return 'GIS'
    elif skill in [ 'Git','GitHub','GitLab','Github']:
        return 'Git'
    elif skill in ['Gradle']:
        return 'Gradle'
    elif skill in ['GraphQL']:
        return 'GraphQL'
    elif skill in ['HAProxy']:
        return 'HAProxy'
    elif skill in ['HLSL']:
        return 'HLSL'
    elif skill in [ 'HTML','HTML5']:
        return 'HTML'
    elif skill in ['HTTP']:
        return 'HTTP'
    elif skill in [ 'JSP','JSP 개발']:
        return 'JSP'
    elif skill in ['Java']:
        return 'Java'
    elif skill in [ 'Node.js', 'NodeJS']:
        return 'Node.js'
    elif skill in [ 'NumPy','Numpy']:
        return 'NumPy'
    elif skill in ['ORCAD']:
        return 'ORCAD'
    elif skill in ['Pandas']:
        return 'Pandas'
    elif skill in ['Python']:
        return 'Python'
    elif skill in ['React',  'React.js','ReactJS']:
        return 'React'
    elif skill in [ 'Redux','Redux-Saga','Redux-Thunk','Redux.js']:
        return 'Redux'
    elif skill in ['Ruby']:
        return 'Ruby'
    elif skill in ['Ruby on Rails']:
        return 'Ruby on Rails'
    elif skill in [ 'SAP','SAP ERP','SAP FI','SAP FICO','SAP HR','SAP MM','SAP SD','SAP 구현']:
        return 'SAP'
    elif skill in [ 'Shell','Shell Script','Shell Scripting']:
        return 'Shell'
    elif skill in [  'Hibernate','JPA','JPA(Java Persistent API)', 'Spring', 'Spring Batch','Spring Boot','Spring Cloud','Spring Framework']:
        return 'Spring'
    elif skill in [ 'Vue.JS','Vue.js','VueJS']:
        return 'Vue.JS'
    elif skill in [ '.NET','.NET Core']:
        return '.NET'
    elif skill in [ 'ASP', 'ASP .NET','ASP.NET']:
        return 'ASP.NET'
    elif skill in [ 'Linux', 'Linux kernel','CentOS']:
        return 'Linux'
    elif skill in ['UNIX','Unix']:
        return 'UNIX'
    elif skill in ['PyTorch','Pytorch']:
        return 'PyTorch'
    elif skill in ['Flutter','flutter']:
        return 'Flutter'
    elif skill in ['Nest.js','NestJS']:
        return 'Nest.js'
    elif skill in ['Objective-C','ObjectiveC']:
        return 'Objective-C'
    elif skill in ['3D','3D 모델링','API 개발','Big Data', 'Blockchain', 'Data Analysis','Data Analysys','Database','Deep Learning', 
                   'DevOps','DirectX','EEO','ERP 소프트웨어', 'ETL', 'Eclipse','Embedded System', 'Excel','GPU','GUI', 'Google Analytics',
                   'Google Apps', 'ISO','IT 관리','IT 운영','Image Processing','IntelliJ IDEA','IoT', 'JSON', 'ORM','OTN', 'PCB 디자인',
                   'PCB 레이아웃 설계','PKI(Public key infrastructure)','PLC','PMP','QA 엔지니어링', 'RDBMS','REST','REST API',
                   'RESTful Architecture', 'RESTful WebServices', 'RPC(Remote Procedure Call)', 'RTL 설계','RTL 코딩', 'React Admin',
                   'Restful API', 'Rx',  'SCM', 'SDN','SEO', 'SNMP','SONET','SPI', 'SSH','SSO', 'Scrum', 'Slack', 'Slack API', 'SoC', 
                   'Storage', 'TCP','TCP/IP','TDD',  'UDP','UI 디자인', 'Verilog', 'WPF','WPF 개발','Web Socket', 'WebSocket',
                   'WebSphere MQ', 'XML','XP', 'debugging','dlib',  'iOS','iOS 개발', '강의','개발','검증','고객 관계','고객 지원',
                   '공공 부문','공차 분석','교육 관리','교육 기술','구매 관리', '기술 개발','기술 관리', '기술 교육', '기술 문서',
                   '네비게이션 시스템', '네트워크 개발', '네트워크 관리','네트워크 보안', '네트워크 설계', '네트워크 운영',
                   '네트워크 인프라', '데이터베이스', '딥 러닝', '라이브러리 관리', '로봇', '로봇 프로그래밍', '리눅스 커널',
                   '마이크로프로세서','머신 비전', '모뎀', '모바일 기술', '모바일 장치', '백엔드 개발','보안', '보안 감사', '보안 관리',
                   '복제', '빅 데이터', '샘플 관리', '샘플 준비','생산 계획', '서버', '서버 관리', '서버 아키텍처', '서비스 관리',
                   '성능 측정', '소프트웨어 개발','솔루션 개발', '시스템 관리', '안드로이드 개발', '알고리즘 개발', '암호화', 
                   '연구 및 개발', '영상', '운영 관리', '운영체제', '웹 개발', '윈도우 모바일', '윈도우 프로그래밍', '유지보수', 
                   '인공 지능', '인프라','임베디드 소프트웨어', '임베디드 시스템', '자동차', '재고 관리', '전원 엔지니어링', 
                   '전자정부프레임워크', '정보 보안','정보 운영','정보관리','제안서 작성', '제어 시스템 설계', '제품 개발','차량',
                   '최적화', '취약점 스캐닝','카메라', '컴파일러', '컴퓨터 비전', '클라우드 보안', '테스트 실행', '통신', '펌웨어', 
                   '품질 관리', '프로그램 관리', '프로젝트 관리', '프론트엔드 개발자', '하드웨어', '회로', '회로 분석', '회로 설계',
                  'Agile','Children','Windows','Windows 8','Windows Embedded','Windows Server','Windows kernel',
                   'Windows 서버']:
        return '기술이 아님' 
    else:
        return skill

# 데이터 프레임
job_postings_df = pd.DataFrame(columns=['공고명', '회사명', '직무', '마감일', '고용형태', '연봉', '근무지', '학력', '기술스택','링크'])

driver = webdriver.Chrome()
driver.get('https://career.programmers.co.kr/job?page=1&min_career=0&order=recent')
time.sleep(3)  # 3초 동안 대기

# 직무 버튼 누르기
buttons = driver.find_element(By.XPATH, '//*[@id="search-form"]/div[2]/div[1]/button')
buttons.click()

time.sleep(3)
html = driver.page_source

# 직무 딕셔너리 받아내기
soup = BeautifulSoup(html, 'lxml')
labels=soup.find_all('label', class_="job_category_label")
position_url = {}
for label in labels:
    position = classify_position(label.get_text(strip=True))
    if position is not None:
        url= "&job_category_ids=" + label.input['value']
        if position in position_url:
            position_url[position] = position_url[position] + url
        else:
            position_url[position] = url
            
print("position_url 딕셔너리를 완성했습니다!")

# 크롤링 시작
for position, url in position_url.items():
    print(f"{position} 공고 탐방을 시작하겠습니다!")
    URL=f'https://career.programmers.co.kr/job?page=1&min_career=0&order=recent{url}'
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    driver.get(URL)

    time.sleep(4)  # 3초 동안 대기
    driver.implicitly_wait(10)
    html = driver.page_source
    soup = BeautifulSoup(html, 'lxml')
    
    # 각 직무의 마지막 페이지 알아보기
    last_page=soup.find_all("span",class_="page-link")
    last_page=int(last_page[-2].get_text(strip=True))
    print(f"{position}의 마지막 페이지는 {last_page}!")
    
    url_num=[]
    
    # 각 직군의 전체 공고 url받아내기
    for page in range(1, last_page + 1):
        orig_url = f'https://career.programmers.co.kr/job?page={page}&min_career=0&order=recent{url}'
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

        print(f"{position} 공고 {page}/{last_page}")
        
        n = 0
        
    print(f"{position}의 총 공고수는  {len(url_num)}개!")
    
    for url in url_num:
        URL = f'https://programmers.co.kr/job_positions/{url}'
        if URL in job_postings_df['링크'].values:
            # 이미 존재하는 URL인 경우 해당 position 값에 추가
            existing_positions = job_postings_df.loc[job_postings_df['링크'] == URL, '직무']
            updated_position = existing_positions + ", " + position
            job_postings_df.loc[job_postings_df['링크'] == URL, '직무'] = updated_position
            print("기존에 있는 공고이기에 position만 추가했습니다.")
        else:
            headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
            driver.get(url=URL)

            time.sleep(4)  # 3초 동안 대기

            driver.implicitly_wait(10)
            html = driver.page_source
            soup = BeautifulSoup(html, 'lxml')

            # 공고명
            title_element = soup.select_one("h2")
            title = title_element.text if title_element else None

            # 회사명
            company = soup.select_one('h4.e_ow99Z6WyqEsY3oG3gk a').text

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
            stack = []

            if stacks:
                for li_tag in stacks.find_all('li'):
                    skill = li_tag.text
                    classified_skill = classify_skill(skill)

                    if classified_skill not in stack:
                        stack.append(classified_skill)
            else:
                stack = None


            # 추출한 정보를 데이터프레임에 추가
            job_postings_df.loc[len(job_postings_df)] = [title, company, position, deadline, employment_type, salary, work_location, None, stack, URL]
            print(f"현재까지 모인 {position} 공고:{n+1}개!")

            n += 1
    print(f"{position} 공고 전체 끝!")

driver.quit()

# 저장
job_postings_df.to_csv(r'C:\Users\Playdata\Desktop\programers_cp949_1.csv', index=True, encoding='cp949')
# 저장
job_postings_df.to_csv(r'C:\Users\Playdata\Desktop\programers_cp949_2.csv', index=False, encoding='cp949')