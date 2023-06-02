import { useState } from 'react';
import styles from './main.module.css';
import { SiTensorflow, SiPytorch, SiApachekafka, SiElasticsearch, SiOpencv, SiApachehadoop, SiTypescript, SiJavascript, SiSvelte, SiFlutter, SiJquery, SiSpring, SiNestjs, SiGoland, SiKotlin, SiExpress, SiMysql, SiMongodb, SiDjango, SiGraphql, SiFirebase, SiKubernetes, SiMicrosoftazure, SiTerraform } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaAngular, FaNodeJs, FaJava, FaPython, FaPhp, FaAws, FaLinux, FaDocker, FaSwift, FaUnity, FaRProject, FaArrowLeft } from "react-icons/fa";
import { DiGoogleCloudPlatform, DiSpark } from "react-icons/di";
import { IoIosSearch } from "react-icons/io";
import { CgCPlusPlus } from "react-icons/cg";
import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight } from "react-icons/fi";
function MainPage() {
    const [frontEnd, setfrontEnd] = useState(false);
    const [backEnd, setbackEnd] = useState(false);
    const [Devops, setDevops] = useState(false);
    const [mobile, setmobile] = useState(false);
    const [AI_ML, setAI_ML] = useState(false);
    const [DataEngineer, setDataEngineer] = useState(false);

    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <div className={styles.jobList}>
                    <button className={(frontEnd == true) ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                        if (frontEnd === true) setfrontEnd(false);
                        else setfrontEnd(true);
                        setbackEnd(false);
                        setDevops(false);
                        setmobile(false);
                        setAI_ML(false);
                        setDataEngineer(false);
                        console.log(frontEnd);
                    }}>프론트엔드</button>
                    <button className={(backEnd == true) ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                        if (backEnd === true) setbackEnd(false);
                        else setbackEnd(true);

                        setfrontEnd(false)
                        setDevops(false);
                        setmobile(false);
                        setAI_ML(false);
                        setDataEngineer(false);
                    }}>백엔드</button>
                    <button className={(Devops == true) ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                        if (Devops === true) setDevops(false);
                        else setDevops(true);

                        setfrontEnd(false)
                        setbackEnd(false);
                        setmobile(false);
                        setAI_ML(false);
                        setDataEngineer(false);
                    }}>DevOps</button>
                    <button className={(mobile == true) ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                        if (mobile === true) setmobile(false);
                        else setmobile(true);

                        setfrontEnd(false)
                        setbackEnd(false);
                        setDevops(false);
                        setAI_ML(false);
                        setDataEngineer(false);
                    }}>모바일</button>
                    <button className={(AI_ML == true) ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                        if (AI_ML === true) setAI_ML(false);
                        else setAI_ML(true);

                        setfrontEnd(false)
                        setbackEnd(false);
                        setDevops(false);
                        setmobile(false);
                        setDataEngineer(false);
                    }}>AI/ML</button>
                    <button className={(DataEngineer == true) ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                        if (DataEngineer === true) setDataEngineer(false);
                        else setDataEngineer(true);

                        setfrontEnd(false)
                        setbackEnd(false);
                        setDevops(false);
                        setmobile(false);
                        setAI_ML(false);
                    }}>데이터 엔지니어</button>
                </div>
                {
                    frontEnd == true ?
                        <div className={styles.jobskill}>
                            <button className={styles.Jobskillbtn}><SiTypescript></SiTypescript>TypeScript</button>
                            <button className={styles.Jobskillbtn}><FaReact ></FaReact>React</button>
                            <button className={styles.Jobskillbtn}><SiJavascript></SiJavascript>JavaScript</button>
                            <button className={styles.Jobskillbtn}><SiSvelte></SiSvelte>Svelte</button>
                            <button className={styles.Jobskillbtn}><TbBrandNextjs></TbBrandNextjs>Nextjs</button>
                            <button className={styles.Jobskillbtn}><FaHtml5></FaHtml5>HTML</button>
                            <button className={styles.Jobskillbtn}><FaVuejs></FaVuejs>Vue</button>
                            <button className={styles.Jobskillbtn}><FaCss3Alt></FaCss3Alt>CSS</button>
                            <button className={styles.Jobskillbtn}><SiJquery></SiJquery>jQuery</button>
                            <button className={styles.Jobskillbtn}><FaAngular></FaAngular>Angular</button>
                            <button className={styles.Jobskillbtn}><FaNodeJs></FaNodeJs>Nodejs</button>
                        </div> : null
                }
                {
                    backEnd == true ?
                        <div className={styles.jobskill}>
                            <button className={styles.Jobskillbtn}><FaJava></FaJava>Java</button>
                            <button className={styles.Jobskillbtn}><SiSpring></SiSpring>Spring</button>
                            <button className={styles.Jobskillbtn}><SiNestjs></SiNestjs>NestJs</button>
                            <button className={styles.Jobskillbtn}><FaNodeJs></FaNodeJs>NodeJs</button>
                            <button className={styles.Jobskillbtn}><SiGoland></SiGoland>Go</button>
                            <button className={styles.Jobskillbtn}><SiKotlin></SiKotlin>Kotlin</button>
                            <button className={styles.Jobskillbtn}><SiExpress></SiExpress>Express</button>
                            <button className={styles.Jobskillbtn}><SiMysql></SiMysql>MySQL</button>
                            <button className={styles.Jobskillbtn}><SiMongodb></SiMongodb>MongoDB</button>
                            <button className={styles.Jobskillbtn}><FaPython></FaPython>Python</button>
                            <button className={styles.Jobskillbtn}><SiDjango></SiDjango>Django</button>
                            <button className={styles.Jobskillbtn}><FaPhp></FaPhp>php</button>
                            <button className={styles.Jobskillbtn}><SiGraphql></SiGraphql>GraphQL</button>
                            <button className={styles.Jobskillbtn}><SiFirebase></SiFirebase>Firebase</button>
                        </div> : null
                }
                {
                    Devops == true ?
                        <div className={styles.jobskill}>
                            <button className={styles.Jobskillbtn}><FaAws></FaAws>AWS</button>
                            <button className={styles.Jobskillbtn}><FaLinux></FaLinux>Linux</button>
                            <button className={styles.Jobskillbtn}><FaPython></FaPython>Python</button>
                            <button className={styles.Jobskillbtn}><SiKubernetes></SiKubernetes>Kubernetes</button>
                            <button className={styles.Jobskillbtn}><FaDocker></FaDocker>Docker</button>
                            <button className={styles.Jobskillbtn}><DiGoogleCloudPlatform></DiGoogleCloudPlatform>GCP</button>
                            <button className={styles.Jobskillbtn}><SiMicrosoftazure></SiMicrosoftazure>AZURE</button>
                            <button className={styles.Jobskillbtn}><SiTerraform></SiTerraform>Terraform</button>
                        </div> : null
                }
                {
                    mobile == true ?
                        <div className={styles.jobskill}>
                            <button className={styles.Jobskillbtn}><SiFlutter></SiFlutter>Flutter</button>
                            <button className={styles.Jobskillbtn}><FaSwift></FaSwift>Switft</button>
                            <button className={styles.Jobskillbtn}><SiKotlin></SiKotlin>Kotlin</button>
                            <button className={styles.Jobskillbtn}><TbBrandReactNative></TbBrandReactNative>React Native</button>
                            <button className={styles.Jobskillbtn}><FaUnity></FaUnity>Unity</button>
                        </div> : null
                }
                {
                    AI_ML == true ?
                        <div className={styles.jobskill}>
                            <button className={styles.Jobskillbtn}><FaPython></FaPython>Python</button>
                            <button className={styles.Jobskillbtn}><SiTensorflow></SiTensorflow>TensorFlow</button>
                            <button className={styles.Jobskillbtn}><SiPytorch></SiPytorch>PyTorch</button>
                            <button className={styles.Jobskillbtn}><CgCPlusPlus></CgCPlusPlus>C/C++</button>
                            <button className={styles.Jobskillbtn}><SiOpencv></SiOpencv>OpenCV</button>
                            <button className={styles.Jobskillbtn}><FaJava></FaJava>Java</button>
                        </div> : null
                }
                {
                    DataEngineer == true ?
                        <div className={styles.jobskill}>
                            <button className={styles.Jobskillbtn}><FaPython></FaPython>Python</button>
                            <button className={styles.Jobskillbtn}><FaRProject></FaRProject>R</button>
                            <button className={styles.Jobskillbtn}><SiApachehadoop></SiApachehadoop>Hadoop</button>
                            <button className={styles.Jobskillbtn}><DiSpark></DiSpark>Spark</button>
                            <button className={styles.Jobskillbtn}><FaJava></FaJava>Java</button>
                            <button className={styles.Jobskillbtn}><SiApachekafka></SiApachekafka>Kafka</button>
                            <button className={styles.Jobskillbtn}><SiTensorflow></SiTensorflow>TensorFlow</button>
                            <button className={styles.Jobskillbtn}><SiPytorch></SiPytorch>PyTorch</button>
                            <button className={styles.Jobskillbtn}><SiElasticsearch></SiElasticsearch>Elasticsearch</button>
                        </div> : null
                }
            </div>
            <div className={styles.contents}>
                <div className={styles.search}>
                    <IoIosSearch style={{ color: '#8B8B8B', width: '35px', height: '35px', marginRight: '10px' }} onClick={() => { console.log('test'); }}></IoIosSearch>
                    <input type='text' placeholder='공고 찾기' style={{ border: '0', outline: 'none' }}></input>
                </div>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((a, i) => {
                        return (<div className={styles.jobPosting}>
                            <div className={styles.boxSize}>
                                <div style={{ fontSize: '1.1rem', color: '#3D4FF1', fontWeight: 'bold', marginLeft: '35px', marginTop: '20px' }}>백엔드</div>
                                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>[갤럭시]백엔드 개발자 채용</div>
                                <div style={{ fontSize: '0.8rem', color: '#B7AEAE', fontWeight: 'bold', textAlign: 'center', marginTop: '15px' }}>마감일 2023.05.31</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>서울 동작구</div>
                                <div style={{ marginLeft: '5rem', marginRight: '5rem' }}>
                                    <FaPython className={styles.icon_size}></FaPython>
                                    <FaJava className={styles.icon_size}></FaJava>
                                    <FaJava className={styles.icon_size}></FaJava>
                                    <FaJava className={styles.icon_size}></FaJava>
                                    <FaJava className={styles.icon_size}></FaJava>
                                </div>
                            </div>

                        </div>);
                    })
                }
                <div className={styles.pageWrap}>
                    <ul className={styles.pageNation}>
                        <li><a href="/"><FiChevronsLeft style={{ marginBottom: '4px' }} /></a></li>
                        <li><a href="/"><FiChevronLeft style={{ marginBottom: '4px' }} /></a></li>
                        <li><a href="/">1</a></li>
                        <li><a href="/">2</a></li>
                        <li><a href="/">3</a></li>
                        <li><a href="/">4</a></li>
                        <li><a href="/">5</a></li>
                        <li><a href="/"><FiChevronRight style={{ marginBottom: '4px' }} /></a></li>
                        <li><a href="/"><FiChevronsRight style={{ marginBottom: '4px' }} /></a></li>
                    </ul>
                </div>

            </div>
        </div >
    );
}

export default MainPage;