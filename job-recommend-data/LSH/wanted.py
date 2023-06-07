from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time
import pandas as pd
import requests
import json
import numpy as np

# 직무 분류
def classify_position(position):
    if position in ['머신러닝', '인공지능', '머신러닝 엔지니어']:
        return 'AI/ML'
    elif position in ['웹 개발자','웹 풀스택']:
        return '웹개발'
    elif position in ['데이터 엔지니어','데이터 엔지니어링','빅데이터 엔지니어','BI 엔지니어']:
        return '데이터 엔지니어'
    elif position in ['데브옵스','DevOps/시스템 관리자']:
        return 'DevOps'
    elif position in ['서버/백엔드', 'PHP 개발자', '루비온레일즈 개발자', '서버 개발자', '자바 개발자', 'C,C++ 개발자','파이썬 개발자','Node.js 개발자','DBA']:
        return '백엔드'
    elif position in ['프론트엔드', '프론트엔드 개발자']:
        return '프론트엔드'
    elif position in ['안드로이드', '안드로이드 개발자', 'iOS', 'iOS 개발자' ]:
        return '모바일'
    
# 기술 분류
def classify_skill(skill):
    if skill in [ 'AWS','AWS Alexa','AWS Amplify','AWS CloudFront','AWS DynamoDB','AWS EC2','AWS ECS','AWS EKS','AWS Lambda',
                 'AWS RDS','AWS S3','AWS Serverless Application Repository','AWS Simple Notification Service(AWS SNS)',
                 'AWS Simple Queue Service(AWS SQS)','Amazon Web Service','Amazon Web Services(AWS)','AWS App Mesh',
                 'AWS Cloud Development Kit','AWS CodeCommit','AWS IoT Device Management','AWS Shell','Amazon API Gateway',
                 'Amazon CloudFront','Amazon Connect','Amazon DynamoDB','Amazon EC2','Amazon EKS','Amazon RDS','Amazon RDS for PostgreSQL',
                 'Amazon Route 53','Amazon S3','aws','amazon dynamodb','Amazon SQS', 'Yocto','aws batch', 'EC2' ,'EMR']:
        return 'AWS'
    elif skill in ['Kotlin','Android','Android Studio','Android OS','Android SDK', 'android os']:
        return 'Kotlin'
    elif skill in ['Angular','AngularJS','angular 2','Angular 2']:
        return 'Angular'
    elif skill in ['Apache','Apache HTTP Server','Apache Tomcat','Apache Traffic Server', 'apache tomcat']:
        return 'Apache'
    elif skill in ['Apache Hadoop','Hadoop']:
        return 'Hadoop'
    elif skill in ['Apache Kafka','Kafka','kafka']:
        return 'Kafka'
    elif skill in [ 'Apache Spark','Spark']:
        return 'Spark'
    elif skill in ['Apache ZooKeeper']:
        return 'ZooKeeper'
    elif skill in [ 'Azure','Azure Computer Vision','Azure Emotion','AZURE', 'Microsoft Azure']:
        return 'Azure'
    elif skill in ['C#']:
        return 'C#'
    elif skill in [ 'C', 'C / C++','C++','c','c++','Mfc','Mantis','Embedded C']:
        return 'C / C++'
    elif skill in ['AutoCAD','CAD']:
        return 'CAD'
    elif skill in [ 'CSS','CSS3','css 3','CSS 3','Tailwind CSS']:
        return 'CSS'
    elif skill in [ 'ElasticSearch','Elasticsearch', 'elasticsearch ','elasticsearch']:
        return 'ElasticSearch'
    elif skill in [ 'FPGA','FPGA 프로토 타이핑']:
        return 'FPGA'
    elif skill in ['Figma']:
        return 'Figma'
    elif skill in ['GCP','GCP(Google Cloud Platform)','GCPs','Google Cloud Platform']:
        return 'GCP'
    elif skill in ['GIS','GIS 시스템','GIS 응용 프로그램']:
        return 'GIS'
    elif skill in [ 'Git','GitHub','GitLab','Github','git','gitlab',
                  'Gerrit Code Review','GitHub Actions','GitLab CI']:
        return 'Git'
    elif skill in ['Gradle']:
        return 'Gradle'
    elif skill in ['GraphQL']:
        return 'GraphQL'
    elif skill in ['HAProxy']:
        return 'HAProxy'
    elif skill in ['HLSL']:
        return 'HLSL'
    elif skill in [ 'HTML','HTML5','html5']:
        return 'HTML'
    elif skill in ['HTTP']:
        return 'HTTP'
    elif skill in [ 'JSP','JSP 개발', 'jsp']:
        return 'JSP'
    elif skill in ['Java', 'java']:
        return 'Java'
    elif skill in [ 'Node.js', 'NodeJS','Mongoose', 'node.js']:
        return 'Node.js'
    elif skill in [ 'NumPy','Numpy']:
        return 'NumPy'
    elif skill in ['ORCAD']:
        return 'ORCAD'
    elif skill in ['Pandas']:
        return 'Pandas'
    elif skill in ['Python','python']:
        return 'Python'
    elif skill in ['React',  'React.js','ReactJS','react']:
        return 'React'
    elif skill in [ 'Redux','Redux-Saga','Redux-Thunk','Redux.js','React.js Boilerplate', 'redux-saga']:
        return 'Redux'
    elif skill in ['Ruby']:
        return 'Ruby'
    elif skill in ['Ruby on Rails']:
        return 'Ruby on Rails'
    elif skill in [ 'SAP','SAP ERP','SAP FI','SAP FICO','SAP HR','SAP MM','SAP SD','SAP 구현']:
        return 'SAP'
    elif skill in [ 'Shell','Shell Script','Shell Scripting']:
        return 'Shell'
    elif skill in [  'Hibernate','JPA','JPA(Java Persistent API)', 'Spring', 
                   'Spring Batch','Spring Boot','Spring Cloud','Spring Framework',
                  'spring','spring boot','spring framework', 'Spring MVC','Spring Data JPA']:
        return 'Spring'
    elif skill in [ 'Vue.JS','Vue.js','VueJS','vue.js']:
        return 'Vue.JS'
    elif skill in [ '.NET','.NET Core','.net']:
        return '.NET'
    elif skill in [ 'ASP', 'ASP .NET','ASP.NET']:
        return 'ASP.NET'
    elif skill in [ 'Linux', 'Linux kernel','CentOS', 'centos', 'linux','Embedded Linux']:
        return 'Linux'
    elif skill in ['UNIX','Unix']:
        return 'UNIX'
    elif skill in ['PyTorch','Pytorch', 'pytorch']:
        return 'PyTorch'
    elif skill in ['Flutter','flutter']:
        return 'Flutter'
    elif skill in ['Nest.js','NestJS']:
        return 'Nest.js'
    elif skill in ['Objective-C','ObjectiveC','objective-c']:
        return 'Objective-C'
    elif skill in ['JavaScript','javascript','ES6']:
        return 'JavaScript'
    elif skill in ['3Ds Max']:
        return '3Ds Max'
    elif skill in ['Sass(SCSS)', 'SCSS','Sass','SASS']:
        return 'SASS'
    elif skill in ['Rxswift', 'rxswift']:
        return 'Rxswift'
    elif skill in ['SQL 서버','Microsoft SQL Server']:
        return 'SQL 서버'
    elif skill in ['NoSQL', 'NoSql', 'nosql']:
        return 'NoSQL'
    elif skill in ['Sequelize.js','Sequelize']:
        return 'Sequelize.js'
    elif skill in ['Swift','SwiftUI', 'swift']:
        return 'Swift'
    elif skill in ['Tensorflow','Tensorflow Lite','TensorFlow', 'tensorflow']:
        return 'Tensorflow'
    elif skill in ['Django','django','DRF(Django REST framework)']:
        return 'Django'
    elif skill in ['jQuery', 'jquery ', 'jquery']:
        return 'jQuery'
    elif skill in ['Keras', 'keras']:
        return 'Keras'
    elif skill in ['Terraform']:
        return 'Terraform'
    elif skill in ['MariaDB','mariadb']:
        return 'MariaDB'
    elif skill in ['MATLAB','matlab']:
        return 'MATLAB'
    elif skill in ['MongoDB','mongodb']:
        return 'MongoDB'
    elif skill in ['MSSQL','mssql']:
        return 'MSSQL'
    elif skill in ['MySQL','mysql']:
        return 'MySQL'
    elif skill in ['Nginx','NGINX','nginx']:
        return 'Nginx'
    elif skill in ['Notion','notion.so']:
        return 'Notion'
    elif skill in ['OpenCV','opencv']:
        return 'OpenCV'
    elif skill in ['PHP','php']:
        return 'PHP'
    elif skill in ['PostgreSQL', 'postgresql']:
        return 'PostgreSQL'
    elif skill in ['R','r']:
        return 'R'
    elif skill in ['Redis','redis']:
        return 'Redis'
    elif skill in [ 'Unity','Unity3D','unity']:
        return 'Unity'
    elif skill in [ 'SQL', 'SQLite']:
        return 'SQL'
    elif skill in [ 'Go', 'Golang']:
        return 'Go'
    elif skill in ['CI/CD' ]:
        return 'CI/CD' 
    elif skill in [ 'Docker' ]:
        return  'Docker' 
    elif skill in ['ExpressJS']:
        return 'ExpressJS'
    elif skill in ['FastAPI' ]:
        return 'FastAPI' 
    elif skill in ['Firebase']:
        return 'Firebase'
    elif skill in ['Flask' ]:
        return 'Flask' 
    elif skill in ['JIRA' ,'Jira']:
        return 'JIRA'
    elif skill in ['Jenkins']:
        return 'Jenkins' 
    elif skill in ['Kubernetes' ]:
        return 'Kubernetes' 
    elif skill in ['Microservice Architecture' ]:
        return 'Microservice Architecture' 
    elif skill in ['Next.js' ]:
        return 'Next.js' 
    elif skill in ['OpenCL']:
        return 'OpenCL' 
    elif skill in ['OpenGL']:
        return 'OpenGL'
    elif skill in ['Redmine' ]:
        return 'Redmine' 
    elif skill in ['Rust' ]:
        return 'Rust' 
    elif skill in ['SVN' ]:
        return 'SVN' 
    elif skill in ['Selenium']:
        return 'Selenium'
    elif skill in ['TypeScript' ]:
        return 'TypeScript' 
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
                   'Agile','Children','Windows','Windows 8','Windows Embedded','Windows Server','Windows kernel', 'Windows 서버',
                   'BigData', 'DB', 'Etl','ai/인공지능','blockchain','ios','windows','3D Rendering','3D Volume Rendering','AI/인공지능',
                   'Cisco','DeepLearning','ERP','Embedded','HW','ISMS','MCU,''MQTT','MachineLearning','Matplotlib','Network','Optimize',
                   'Pads','PyCharm','QA','RDB','Red Hat Enterprise ','SW','Switch','switch','Smartcontract','VPN','VR','cisco','WebStorm',
                   'deeplearning','embedded','machinelearning', 'network', 'l2', 'l3','l4','rest api','sw','hw','WordPress', 'ADC', 'AJAX',
                   'API','AR', 'ARM', 'Adobe XD', 'Ajax', 'Appium', 'Aurora DB','Axios', 'Babel', 'Bash', 'BitBucket', 'Bootstrap', 'CAM',
                   'CRM','CUDA','CodeIgniter','Confluence','Consul','Coroutine', 'Cucumber', 'DACS', 'DART for Publishers', 
                   'DBA(Database administration)','DWDM', 'Dart','Delphi', 'Element UI', 'EnCase','Entity Framework', 'Ethereum','FFmpeg',
                   'FMEA','Flow','GStreamer','Hyperledger', 'I2C', 'IDA(Interactive DisAssembler)', 'IIS','IP', 'IPS','JSTL', 'JsonAPI', 
                   'Klaytn', 'Laravel', 'LiDAR', 'Lua', 'MES', 'MFC', 'ML', 'MVC', 'MVVM', 'MXNET', 'Machine Learning', 'Machine Vision', 
                   'Material-UI', 'Maven', 'Memcached', 'Moodle', 'MyBatis', 'NFC', 'NLP', 'NVIDIA TensorRT', 'Netty','OOP','OpenFlow',
                   'OpenMP', 'OpenStack','Oracle', 'Oracle Database', 'Perl', 'PowerBuilder', 'Prisma', 'Qt','RHEL', 'ROS','RS232', 'RTOS',
                   'RabbitMQ', 'STL', 'STP',  'SVG','Scala', 'Scikit-Learn', 'scikit-learn', 'Servlets', 'Shader', 'Simulink', 'Sketch', 'Socket.IO', 
                   'Solidity', 'Spa',  'Spinnaker', 'Storybook',  'Sybase',  'SLAM', 'TCL', 'Tableau','TeamCity', 'Tomcat', 'Truffle',
                   'TypeORM','UML', 'Ubuntu', 'Unreal Engine', 'VM웨어', 'Visual Basic', 'Visual Studio', 'Visual Studio Code','Vuetify.js',
                   'Web3.py','web3.js', 'WebGL', 'WebRTC', 'Webpack', 'WinForm', 'Xcode', 'Xilinx', 'Yarn', 'gRPC', 'DevExpress',
                  '고객 중심', 'Windows 서비스', 'EMC 규정 준수', '의료 장비', 'UX 디자인', '의료 영상', '비즈니스 분석', '설계', '보안 운영', '의료 기기'  ]:
        return None
    else:
        return skill

# 저장할 데이터프레임 미리 만들어놓기
job_postings_df = pd.DataFrame(columns=['공고명', '회사명', '직무', '마감일', '근무지', '기술스택', '링크'])

driver = webdriver.Chrome()

# 페이지 열기
driver.get('https://www.wanted.co.kr/wdlist/518?country=kr&job_sort=company.response_rate_order&years=0&locations=all')
time.sleep(3)  # 3초 동안 대기
    
# 직무 버튼 누르기
buttons = driver.find_element(By.XPATH, '//*[@id="__next"]/div[3]/article/div/div[2]/button/span[2]')
buttons.click()

time.sleep(3)
html = driver.page_source

# 직무 리스트 받아내기
soup = BeautifulSoup(html, 'lxml')
positions=soup.find_all('button', class_="JobCategoryItem_JobCategoryItem__oUaZr")
positions = [position.text for position in positions][1:]

done_position=set()

# 직무별 스택 모아볼 수 있는 코드
position_stack={}

# 지역 저장 시 사용하는 keywords
keywords = ['대한민국', '서울', '경기', '제주', '울산', '경상북도', '경북', '부산', '인천', '대전', '경기']

for i in range(0,len(positions)):
    position = classify_position(positions[i])
    print(f"지금 포지션은 {position}")
    if position is not None:
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
        n=1
        for url in url_num:
            URL = f'https://www.wanted.co.kr//{url}'
            if URL in job_postings_df['링크'].values:
                if position not in done_position:
                # 이미 존재하는 URL인 경우 해당 position 값에 추가
                    existing_positions = job_postings_df.loc[job_postings_df['링크'] == URL, '직무']
                    updated_position = existing_positions + ", " + position
                    job_postings_df.loc[job_postings_df['링크'] == URL, '직무'] = updated_position
                    print("기존에 있는 공고이기에 position만 추가했습니다.")
            else:
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
                address=data['jobLocation']['address']['streetAddress']
                
                if address == '':
                    work_location = None
                    
                else: 
                    first_word = address.split()[0]
                    if any(keyword in first_word for keyword in keywords):
                        work_location = address
                    else:
                        region = data['jobLocation']['address']['addressRegion']
                        work_location = f"{region[:2]} {address}"
                        
                driver = webdriver.Chrome()
                driver.get(url=URL)

                html = driver.page_source
                soup = BeautifulSoup(html, 'lxml')

                # 기술 스택
                stack_elements = soup.find_all("div", class_="SkillItem_SkillItem__E2WtM")
                stack = []

                for element in stack_elements:
                    skill = element.text
                    classified_skill = classify_skill(skill)

                    if classified_skill is None:
                        pass
                    else:
                        if classified_skill not in stack:
                            stack.append(classified_skill)

                        if position in position_stack:
                            position_stack[position].add(classified_skill)
                        else:
                            position_stack[position] = set([classified_skill])

                #추출한 정보를 데이터프레임에 추가
                job_postings_df.loc[len(job_postings_df)] = [title, company, position, deadline, work_location, stack, URL]
                print(f"{position}의 {n}번째 공고 정보 끝!")
                n+=1

        print(f"{position} 데이터 프레임 생성 끝!")
        done_position.add(position)
    
driver.quit()

# 저장
job_postings_df.to_csv(r"C:\Users\Playdata\Desktop\wanted_cp949_1.csv", index=True, encoding='cp949')
# 저장
job_postings_df.to_csv(r"C:\Users\Playdata\Desktop\wanted_cp949_2.csv", index=False, encoding='cp949')

# position_stack 저장
import os
import csv

position_stack2 = position_stack

directory = r'C:\Users\Playdata\Desktop\\' 

filename2 = os.path.join(directory, 'position_stack2.csv')

with open(filename2, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Position', 'Stack'])  # 헤더 작성
    for position, stack in position_stack2.items():
        for stack_item in stack:
            writer.writerow([position, stack_item])