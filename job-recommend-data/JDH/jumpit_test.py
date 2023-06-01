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
import pandas as pd
import numpy as np
import re

# 기술 분류
def classify_skill(skill):
    if skill in [ 'AWS','AWS Alexa','AWS Amplify','AWS CloudFront','AWS DynamoDB','AWS EC2','AWS ECS','AWS EKS','AWS Lambda',
                 'AWS RDS','AWS S3','AWS Serverless Application Repository','AWS Simple Notification Service(AWS SNS)',
                 'AWS Simple Queue Service(AWS SQS)','Amazon Web Service','Amazon Web Services(AWS)','AWS App Mesh',
                 'AWS Cloud Development Kit','AWS CodeCommit','AWS IoT Device Management','AWS Shell','Amazon API Gateway',
                 'Amazon CloudFront','Amazon Connect','Amazon DynamoDB','Amazon EC2','Amazon EKS','Amazon RDS','Amazon RDS for PostgreSQL',
                 'Amazon Route 53','Amazon S3','aws','amazon dynamodb', 'Yocto','aws batch', 'EC2' ,'EMR']:
        return 'AWS'
    elif skill in ['Kotlin','Android','Android Studio','Android OS','Android SDK', 'android os']:
        return 'Kotlin'
    elif skill in ['Angular','AngularJS','angular 2']:
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
    elif skill in [ 'ElasticSearch','Elasticsearch', 'elasticsearch ']:
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
    elif skill in ['jQuery', 'jquery ']:
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
                   'RabbitMQ', 'STL', 'STP',  'SVG','Scala', 'Scikit-Learn', 'Servlets', 'Shader', 'Simulink', 'Sketch', 'Socket.IO', 
                   'Solidity', 'Spa',  'Spinnaker', 'Storybook',  'Sybase',  'SLAM', 'TCL', 'Tableau','TeamCity', 'Tomcat', 'Truffle',
                   'TypeORM','UML', 'Ubuntu', 'Unreal Engine', 'VM웨어', 'Visual Basic', 'Visual Studio', 'Visual Studio Code','Vuetify.js',
                   'Web3.py','web3.js', 'WebGL', 'WebRTC', 'Webpack', 'WinForm', 'Xcode', 'Xilinx', 'Yarn', 'gRPC', 'DevExpress' ]:
        pass 
    else:
        return skill


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
pos = ['백엔드', '프론트엔드', '웹개발', '모바일', '모바일', '게임개발', '게임개발', 'DBA', '데이터 엔지니어', 'AL/ML', 'DevOps', 'VR/AR/3D', '블록체인']
pos_num = [2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 20, 21]
pos_dict = dict(zip(pos_num, pos))  # 딕셔너리 생성

for i in pos_num:
    position = driver.find_element(By.CSS_SELECTOR, f'div.list_job_btn_wrap > button:nth-child({i})')
    position_text = pos_dict[i]
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


csv_save_path = 'C:/myPyCode/final_project/jumpit_page_fix.csv'
position_save_path = 'C:/myPyCode/final_project/jumpit_position_stack_fix.csv'

position_stack = {}
with open(csv_save_path, 'w', newline='', encoding='cp949') as file:
    writer = csv.writer(file)
    writer.writerow(['공고명', '회사명', '직무', '마감일', '근무지', '기술스택', '링크'])
    
    for orig_url, position in add_list:
        driver.get(orig_url)
        time.sleep(4)

        title = driver.find_element(By.CSS_SELECTOR, 'section.sc-gnnDb > h1').text
        company = driver.find_element(By.CSS_SELECTOR, 'div.position_title_box_desc > a').text

        try:
            deadline_text = driver.find_element(By.CSS_SELECTOR, 'dl.sc-itWPBs:nth-child(4) > dd').text
            if re.match(r"\d{4}-\d{2}-\d{2}", deadline_text):
                deadline = deadline_text  # 날짜 형식이라면 해당 값을 그대로 사용
            else:
                deadline = "상시 채용"
        except NoSuchElementException:
            deadline = "상시 채용"

        try:    
            element = driver.find_element(By.XPATH, '//*[@id="root"]/main/div/div[2]/div/section[3]/dl[4]/dd/ul/li')
            work_location = element.text.replace('지도보기', '').replace('주소복사', '')
        except NoSuchElementException:
            work_location = None
        try:
            skill_elements = driver.find_elements(By.XPATH, '/html/body/div[1]/main/div/div[2]/div/section[2]/dl[1]/dd/pre/div')
            # skill = [element.text for element in skill_elements]
            # 기술 스택
            stack = []
            
            for element in skill_elements:
                skill = element.text
                classified_skill = classify_skill(skill)
            
                if classified_skill is not None:
                    stack.append(classified_skill)
                    filtering_skill = classified_skill
                    
                if position in position_stack:
                    position_stack[position].add(filtering_skill)
                else:
                    position_stack[position] = {filtering_skill}
            
        except NoSuchElementException:
            stack = []
        link = orig_url
        
        writer.writerow([title, company, position, deadline, work_location, stack, link])
            
driver.quit()
with open(position_save_path, 'w', newline='', encoding='cp949') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(position_stack.keys())
    writer.writerow(position_stack.values())
csv_save_path = 'C:/myPyCode/final_project/jumpit_page_fix.csv'
df=pd.read_csv(csv_save_path, encoding='cp949')
df['근무지'] = df['근무지'].str.replace(r'^\(\d+\)\s*', '', regex=True)
df['근무지'] = df['근무지'].str.replace(r'\[.*?\]', '', regex=True)
df['근무지'] = df['근무지'].str.replace('서울특별시', '서울', regex=True)
df['근무지'] = df['근무지'].str.replace('서울시', '서울', regex=True)
df['근무지'] = df['근무지'].str.replace('경기도', '경기', regex=True)
df['근무지'] = df['근무지'].str.replace('연남로13길9', '서울 마포구 연남로13길9', regex=True)
df['근무지'] = df['근무지'].str.replace('제주특별자치도', '제주', regex=True)
df['근무지'] = df['근무지'].str.replace('울산광역시', '울산', regex=True)
df['근무지'] = df['근무지'].str.replace('경상북도', '경북', regex=True)
df['근무지'] = df['근무지'].str.replace('부산광역시', '부산', regex=True)
df['근무지'] = df['근무지'].str.replace('인천광역시', '인천', regex=True)
df['근무지'] = df['근무지'].str.replace('대전시', '대전', regex=True)
df['근무지'] = df['근무지'].str.replace('대전광역시', '대전', regex=True)
df['근무지'] = df['근무지'].str.replace('대구광역시', '대구', regex=True)
df['근무지'] = df['근무지'].str.replace('전라남도', '전남', regex=True)

# 기술 스택 획일화
# np.where(condition, x, y)를 활용해서 condition이 참일 경우 x를, 아닌 경우 y로!
df['기술스택'] = df['기술스택'].str.replace("'", '"')
df['기술스택'] = np.where((df['기술스택'].isnull()) | (df['기술스택'] == "[]"), """[""]""", df['기술스택'])
#csv 저장
csv_save_path_updated = 'C:/myPyCode/final_project/jumpit_page_fix_updated.csv'
df.to_csv(csv_save_path_updated, index=False, encoding='cp949')
