import { useState } from 'react';
import styles from './main.module.css';
import { SiTensorflow, SiPytorch, SiApachekafka, SiElasticsearch, SiOpencv, SiApachehadoop, SiTypescript, SiJavascript, SiSvelte, SiFlutter, SiJquery, SiSpring, SiNestjs, SiGoland, SiKotlin, SiExpress, SiMysql, SiMongodb, SiDjango, SiGraphql, SiFirebase, SiKubernetes, SiMicrosoftazure, SiTerraform } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaAngular, FaNodeJs, FaJava, FaPython, FaPhp, FaAws, FaLinux, FaDocker, FaSwift, FaUnity, FaRProject, FaArrowLeft } from "react-icons/fa";
import { DiGoogleCloudPlatform, DiSpark } from "react-icons/di";
import { IoIosSearch } from "react-icons/io";
import { CgCPlusPlus } from "react-icons/cg";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, removeSkill } from '../../store/store';
import Pagination from 'react-bootstrap/Pagination';
function MainPage() {

    let dispatch = useDispatch();
    let skillList = useSelector(state => state.userSkill);
    const [frontEnd, setfrontEnd] = useState(false);
    const [backEnd, setbackEnd] = useState(false);
    const [Devops, setDevops] = useState(false);
    const [mobile, setmobile] = useState(false);
    const [AI_ML, setAI_ML] = useState(false);
    const [DataEngineer, setDataEngineer] = useState(false);
    const [selectSkill, setSelectSkill] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let [currentItems, setCurrentItems] = useState([]);

    const itemsPerPage = 9; // 페이지당 아이템 수
    const totalItems = selectSkill.length; // 총 아이템 수

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // 현재 페이지의 아이템 목록 가져오기
    currentItems = selectSkill.slice(startIndex, endIndex);

    let searchData = "";
    const postSkill = async () => {
        const data = JSON.stringify(skillList);
        await axios.post("/api/skill", { data }).then((response) => {
            console.log(response.data);
        }).catch((e) => {
            console.log(e);
        })
    };
    const GetSkill = async () => {
        await axios.get("/api/list").then((response) => {
            let total = [];
            for (let i = 0; i < (response.data).length; i++) {
                total.push((response.data)[i]);
            }
            setSelectSkill(total);
        }).catch((e) => {
            console.log(e);
        })
    };
    const ALLSkill = async () => {
        await axios.get("/all").then((response) => {
            let total = [];
            for (let i = 0; i < (response.data).length; i++) {
                total.push((response.data)[i]);
            }
            setSelectSkill(total);
        }).catch((e) => {
            console.log(e);
        })
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    useEffect(() => {
        postSkill();
        GetSkill();
        if (skillList.length == 0) ALLSkill();
    }, [skillList]);

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
                            <button className={skillList.includes('TypeScript') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('TypeScript') == false) dispatch(addSkill('TypeScript'));
                                else dispatch(removeSkill('TypeScript'));

                            }}><SiTypescript></SiTypescript>TypeScript</button>
                            <button className={skillList.includes('React') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('React') == false) dispatch(addSkill('React'));
                                else dispatch(removeSkill('React'));

                            }}><FaReact ></FaReact>React</button>
                            <button className={skillList.includes('JavaScript') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('JavaScript') == false) dispatch(addSkill('JavaScript'));
                                else dispatch(removeSkill('JavaScript'));

                            }}><SiJavascript></SiJavascript>JavaScript</button>
                            <button className={skillList.includes('svelte') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('svelte') == false) dispatch(addSkill('svelte'));
                                else dispatch(removeSkill('svelte'));

                            }}><SiSvelte></SiSvelte>Svelte</button>
                            <button className={skillList.includes('Next.js') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Next.js') == false) dispatch(addSkill('Next.js'));
                                else dispatch(removeSkill('Next.js'));

                            }}><TbBrandNextjs></TbBrandNextjs>Nextjs</button>
                            <button className={skillList.includes('HTML') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('HTML') == false) dispatch(addSkill('HTML'));
                                else dispatch(removeSkill('HTML'));

                            }}><FaHtml5></FaHtml5>HTML</button>
                            <button className={skillList.includes('Vue.js') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Vue.js') == false) dispatch(addSkill('Vue.js'));
                                else dispatch(removeSkill('Vue.js'));

                            }}><FaVuejs></FaVuejs>Vue</button>
                            <button className={skillList.includes('CSS') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('CSS') == false) dispatch(addSkill('CSS'));
                                else dispatch(removeSkill('CSS'));

                            }}><FaCss3Alt></FaCss3Alt>CSS</button>
                            <button className={skillList.includes('jQuery') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('jQuery') == false) dispatch(addSkill('jQuery'));
                                else dispatch(removeSkill('jQuery'));

                            }}><SiJquery></SiJquery>jQuery</button>
                            <button className={skillList.includes('Angular') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Angular') == false) dispatch(addSkill('Angular'));
                                else dispatch(removeSkill('Angular'));

                            }}><FaAngular></FaAngular>Angular</button>
                            <button className={skillList.includes('Node.js') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Node.js') == false) dispatch(addSkill('Node.js'));
                                else dispatch(removeSkill('Node.js'));

                            }}><FaNodeJs></FaNodeJs>Nodejs</button>
                        </div> : null
                }
                {
                    backEnd == true ?
                        <div className={styles.jobskill}>
                            <button className={skillList.includes('Java') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Java') == false) dispatch(addSkill('Java'));
                                else dispatch(removeSkill('Java'));

                            }}><FaJava></FaJava>Java</button>
                            <button className={skillList.includes('Spring') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Spring') == false) dispatch(addSkill('Spring'));
                                else dispatch(removeSkill('Spring'));

                            }}><SiSpring></SiSpring>Spring</button>
                            <button className={skillList.includes('Nest.Js') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Nest.Js') == false) dispatch(addSkill('Nest.Js'));
                                else dispatch(removeSkill('Nest.Js'));

                            }}><SiNestjs></SiNestjs>NestJs</button>
                            <button className={skillList.includes('Node.js') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Node.js') == false) dispatch(addSkill('Node.js'));
                                else dispatch(removeSkill('Node.js'));

                            }}><FaNodeJs></FaNodeJs>NodeJs</button>
                            <button className={skillList.includes('Go') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Go') == false) dispatch(addSkill('Go'));
                                else dispatch(removeSkill('Go'));

                            }}><SiGoland></SiGoland>Go</button>
                            <button className={skillList.includes('Kotlin') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Kotlin') == false) dispatch(addSkill('Kotlin'));
                                else dispatch(removeSkill('Kotlin'));

                            }}><SiKotlin></SiKotlin>Kotlin</button>
                            <button className={skillList.includes('ExpressJS') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('ExpressJS') == false) dispatch(addSkill('ExpressJS'));
                                else dispatch(removeSkill('ExpressJS'));

                            }}><SiExpress></SiExpress>Express</button>
                            <button className={skillList.includes('MySQL') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('MySQL') == false) dispatch(addSkill('MySQL'));
                                else dispatch(removeSkill('MySQL'));

                            }}><SiMysql></SiMysql>MySQL</button>
                            <button className={skillList.includes('MongoDB') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('MongoDB') == false) dispatch(addSkill('MongoDB'));
                                else dispatch(removeSkill('MongoDB'));

                            }}><SiMongodb></SiMongodb>MongoDB</button>
                            <button className={skillList.includes('Python') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Python') == false) dispatch(addSkill('Python'));
                                else dispatch(removeSkill('Python'));

                            }}><FaPython></FaPython>Python</button>
                            <button className={skillList.includes('Django') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Django') == false) dispatch(addSkill('Django'));
                                else dispatch(removeSkill('Django'));

                            }}><SiDjango></SiDjango>Django</button>
                            <button className={skillList.includes('PHP') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('PHP') == false) dispatch(addSkill('PHP'));
                                else dispatch(removeSkill('PHP'));

                            }}><FaPhp></FaPhp>php</button>
                            <button className={skillList.includes('GraphQL') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('GraphQL') == false) dispatch(addSkill('GraphQL'));
                                else dispatch(removeSkill('GraphQL'));

                            }}><SiGraphql></SiGraphql>GraphQL</button>
                            <button className={skillList.includes('Firebase') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Firebase') == false) dispatch(addSkill('Firebase'));
                                else dispatch(removeSkill('Firebase'));

                            }}><SiFirebase></SiFirebase>Firebase</button>
                        </div> : null
                }
                {
                    Devops == true ?
                        <div className={styles.jobskill}>
                            <button className={skillList.includes('AWS') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('AWS') == false) dispatch(addSkill('AWS'));
                                else dispatch(removeSkill('AWS'));

                            }}><FaAws></FaAws>AWS</button>
                            <button className={skillList.includes('Linux') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Linux') == false) dispatch(addSkill('Linux'));
                                else dispatch(removeSkill('Linux'));

                            }}><FaLinux></FaLinux>Linux</button>
                            <button className={skillList.includes('Python') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Python') == false) dispatch(addSkill('Python'));
                                else dispatch(removeSkill('Python'));

                            }}><FaPython></FaPython>Python</button>
                            <button className={skillList.includes('Kubernetes') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Kubernetes') == false) dispatch(addSkill('Kubernetes'));
                                else dispatch(removeSkill('Kubernetes'));

                            }}><SiKubernetes></SiKubernetes>Kubernetes</button>
                            <button className={skillList.includes('Docker') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Docker') == false) dispatch(addSkill('Docker'));
                                else dispatch(removeSkill('Docker'));

                            }}><FaDocker></FaDocker>Docker</button>
                            <button className={skillList.includes('GCP') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('GCP') == false) dispatch(addSkill('GCP'));
                                else dispatch(removeSkill('GCP'));

                            }}><DiGoogleCloudPlatform></DiGoogleCloudPlatform>GCP</button>
                            <button className={skillList.includes('Azure') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Azure') == false) dispatch(addSkill('Azure'));
                                else dispatch(removeSkill('Azure'));

                            }}><SiMicrosoftazure></SiMicrosoftazure>AZURE</button>
                            <button className={skillList.includes('Terraform') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Terraform') == false) dispatch(addSkill('Terraform'));
                                else dispatch(removeSkill('Terraform'));

                            }}><SiTerraform></SiTerraform>Terraform</button>
                        </div> : null
                }
                {
                    mobile == true ?
                        <div className={styles.jobskill}>
                            <button className={skillList.includes('Flutter') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Flutter') == false) dispatch(addSkill('Flutter'));
                                else dispatch(removeSkill('Flutter'));

                            }}><SiFlutter></SiFlutter>Flutter</button>
                            <button className={skillList.includes('Swift') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Swift') == false) dispatch(addSkill('Swift'));
                                else dispatch(removeSkill('Swift'));

                            }}><FaSwift></FaSwift>Swift</button>
                            <button className={skillList.includes('Kotlin') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Kotlin') == false) dispatch(addSkill('Kotlin'));
                                else dispatch(removeSkill('Kotlin'));

                            }}><SiKotlin></SiKotlin>Kotlin</button>
                            <button className={skillList.includes('React Native') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('React Native') == false) dispatch(addSkill('React Native'));
                                else dispatch(removeSkill('React Native'));

                            }}><TbBrandReactNative></TbBrandReactNative>React Native</button>
                            <button className={skillList.includes('Unity') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Unity') == false) dispatch(addSkill('Unity'));
                                else dispatch(removeSkill('Unity'));

                            }}><FaUnity></FaUnity>Unity</button>
                        </div> : null
                }
                {
                    AI_ML == true ?
                        <div className={styles.jobskill}>
                            <button className={skillList.includes('Python') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Python') == false) dispatch(addSkill('Python'));
                                else dispatch(removeSkill('Python'));

                            }}><FaPython></FaPython>Python</button>
                            <button className={skillList.includes('Tensorflow') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Tensorflow') == false) dispatch(addSkill('Tensorflow'));
                                else dispatch(removeSkill('Tensorflow'));

                            }}><SiTensorflow></SiTensorflow>TensorFlow</button>
                            <button className={skillList.includes('PyTorch') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('PyTorch') == false) dispatch(addSkill('PyTorch'));
                                else dispatch(removeSkill('PyTorch'));

                            }}><SiPytorch></SiPytorch>PyTorch</button>
                            <button className={skillList.includes('C / C++') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('C / C++') == false) dispatch(addSkill('C / C++'));
                                else dispatch(removeSkill('C / C++'));

                            }}><CgCPlusPlus></CgCPlusPlus>C/C++</button>
                            <button className={skillList.includes('OpenCV') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('OpenCV') == false) dispatch(addSkill('OpenCV'));
                                else dispatch(removeSkill('OpenCV'));

                            }}><SiOpencv></SiOpencv>OpenCV</button>
                            <button className={skillList.includes('Java') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Java') == false) dispatch(addSkill('Java'));
                                else dispatch(removeSkill('Java'));

                            }}><FaJava></FaJava>Java</button>
                        </div> : null
                }
                {
                    DataEngineer == true ?
                        <div className={styles.jobskill}>
                            <button className={skillList.includes('Python') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Python') == false) dispatch(addSkill('Python'));
                                else dispatch(removeSkill('Python'));

                            }}><FaPython></FaPython>Python</button>
                            <button className={skillList.includes('R') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('R') == false) dispatch(addSkill('R'));
                                else dispatch(removeSkill('R'));

                            }}><FaRProject></FaRProject>R</button>
                            <button className={skillList.includes('Hadoop') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Hadoop') == false) dispatch(addSkill('Hadoop'));
                                else dispatch(removeSkill('Hadoop'));

                            }}><SiApachehadoop></SiApachehadoop>Hadoop</button>
                            <button className={skillList.includes('Spark') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Spark') == false) dispatch(addSkill('Spark'));
                                else dispatch(removeSkill('Spark'));

                            }}><DiSpark></DiSpark>Spark</button>
                            <button className={skillList.includes('Java') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Java') == false) dispatch(addSkill('Java'));
                                else dispatch(removeSkill('Java'));

                            }}><FaJava></FaJava>Java</button>
                            <button className={skillList.includes('Kafka') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Kafka') == false) dispatch(addSkill('Kafka'));
                                else dispatch(removeSkill('Kafka'));

                            }}><SiApachekafka></SiApachekafka>Kafka</button>
                            <button className={skillList.includes('Tensorflow') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('Tensorflow') == false) dispatch(addSkill('Tensorflow'));
                                else dispatch(removeSkill('Tensorflow'));

                            }}><SiTensorflow></SiTensorflow>TensorFlow</button>
                            <button className={skillList.includes('PyTorch') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('PyTorch') == false) dispatch(addSkill('PyTorch'));
                                else dispatch(removeSkill('PyTorch'));

                            }}><SiPytorch></SiPytorch>PyTorch</button>
                            <button className={skillList.includes('ElasticSearch') ? styles.JobskillbtnClick : styles.Jobskillbtn} onClick={() => {
                                if (skillList.includes('ElasticSearch') == false) dispatch(addSkill('ElasticSearch'));
                                else dispatch(removeSkill('ElasticSearch'));

                            }}><SiElasticsearch></SiElasticsearch>Elasticsearch</button>
                        </div> : null
                }
            </div>
            <div className={styles.contents}>
                <div className={styles.search}>
                    <IoIosSearch style={{ color: '#8B8B8B', width: '35px', height: '35px', marginRight: '10px' }} onClick={async () => {
                        let total = [];
                        let data = searchData;
                        await axios.post("search", { data }).then((response) => {
                            for (let i = 0; i < (response.data).length; i++) {
                                total.push((response.data)[i]);
                            }
                            setSelectSkill(total);
                        }).catch((e) => {
                            console.log(e);
                        })
                    }}></IoIosSearch>
                    <input type='text' placeholder='공고 찾기' style={{ border: '0', outline: 'none', paddingBottom: '15px' }} onChange={(e) => { searchData = e.target.value; }}></input>
                    <Pagination>
                        <Pagination.Prev
                            onClick={() => {
                                handlePageChange(currentPage - 1);
                            }}
                            disabled={currentPage === 1}
                        />
                        <Pagination.Next
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
                        />
                    </Pagination>
                </div>

                {
                    currentItems.map((a, i) => {
                        if (IsJsonString(currentItems[i].recruitJob) == true) currentItems[i].recruitJob = JSON.parse(currentItems[i].recruitJob);
                        if (IsJsonString(currentItems[i].recruitSkill) == true) currentItems[i].recruitSkill = JSON.parse(currentItems[i].recruitSkill);
                        return (
                            <div className={styles.jobPosting}>
                                <div className={styles.boxSize} onClick={() => { window.open(currentItems[i].recruitLink) }}>
                                    {
                                        (currentItems[i].recruitJob).map((a, i) => {
                                            return (
                                                <div style={{ display: 'inline-block' }}>
                                                    <div style={{ fontSize: '1.1rem', color: '#3D4FF1', fontWeight: 'bold', marginLeft: '20px', marginTop: '15px', marginRight: '15px' }}>{a}</div>
                                                </div>
                                            );
                                        })
                                    }
                                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '10px', marginLeft: '10px', marginRight: '10px', minHeight: '62.4px', maxHeight: '62.4px', overflow: 'hidden' }}>{currentItems[i].recruitName}</div>
                                    <div style={{ fontSize: '0.9rem', color: '#000080', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>{currentItems[i].companyName}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'red', textAlign: 'center', marginTop: '15px' }}>마감일 : {currentItems[i].recruitDate}</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: 'bold', textAlign: 'center', marginTop: '15px', marginLeft: '15px', marginRight: '15px', marginBottom: '15px' }}>{currentItems[i].recruitAddress}</div>
                                    <div style={{ marginLeft: '5rem', marginRight: '5rem', maxHeight: '120px', overflow: 'hidden' }}>
                                        {
                                            currentItems[i].recruitSkill.map((a, i) => {
                                                let language = ['TypeScript', 'React', 'JavaScript', 'svelte', 'Next.js', 'HTML', 'Vue.js', 'CSS', 'jQuery', 'Angular', 'Node.js', 'Java', 'Spring', 'Nest.Js',
                                                    'Go', 'Kotlin', 'ExpressJS', 'MySQL', 'MongoDB', 'Python', 'Django', 'PHP', 'GraphQL', 'Firebase', 'AWS', 'Linux', 'Kubernetes', 'Docker', 'GCP', 'Azure', 'Terraform',
                                                    'Flutter', 'Swift', 'React Native', 'Unity', 'Tensorflow', 'PyTorch', 'C / C++', 'OpenCV', 'R', 'Hadoop', 'Spark', 'Kafka', 'ElasticSearch'];
                                                return (
                                                    <>
                                                        {(a == 'TypeScript') ? <SiTypescript className={styles.icon_size}></SiTypescript> : null}
                                                        {(a == 'React') ? <FaReact className={styles.icon_size}></FaReact> : null}
                                                        {(a == 'JavaScript') ? <SiJavascript className={styles.icon_size}></SiJavascript> : null}
                                                        {(a == 'svelte') ? <SiSvelte className={styles.icon_size}></SiSvelte> : null}
                                                        {(a == 'Next.js') ? <TbBrandNextjs className={styles.icon_size}></TbBrandNextjs> : null}
                                                        {(a == 'HTML') ? <FaHtml5 className={styles.icon_size}></FaHtml5> : null}
                                                        {(a == 'Vue.js') ? <FaVuejs className={styles.icon_size}></FaVuejs> : null}
                                                        {(a == 'CSS') ? <FaCss3Alt className={styles.icon_size}></FaCss3Alt> : null}
                                                        {(a == 'jQuery') ? <SiJquery className={styles.icon_size}></SiJquery> : null}
                                                        {(a == 'Angular') ? <FaAngular className={styles.icon_size}></FaAngular> : null}
                                                        {(a == 'Node.js') ? <FaNodeJs className={styles.icon_size}></FaNodeJs> : null}
                                                        {(a == 'Java') ? <FaJava className={styles.icon_size}></FaJava> : null}
                                                        {(a == 'Spring') ? <SiSpring className={styles.icon_size}></SiSpring> : null}
                                                        {(a == 'Nest.Js') ? <SiNestjs className={styles.icon_size}></SiNestjs> : null}
                                                        {(a == 'Go') ? <SiGoland className={styles.icon_size}></SiGoland> : null}
                                                        {(a == 'Kotlin') ? <SiKotlin className={styles.icon_size}></SiKotlin> : null}
                                                        {(a == 'ExpressJS') ? <SiExpress className={styles.icon_size}></SiExpress> : null}
                                                        {(a == 'MySQL') ? <SiMysql className={styles.icon_size}></SiMysql> : null}
                                                        {(a == 'MongoDB') ? <SiMongodb className={styles.icon_size}></SiMongodb> : null}
                                                        {(a == 'Python') ? <FaPython className={styles.icon_size}></FaPython> : null}
                                                        {(a == 'Django') ? <SiDjango className={styles.icon_size}></SiDjango> : null}
                                                        {(a == 'PHP') ? <FaPhp className={styles.icon_size}></FaPhp> : null}
                                                        {(a == 'GraphQL') ? <SiGraphql className={styles.icon_size}></SiGraphql> : null}
                                                        {(a == 'Firebase') ? <SiFirebase className={styles.icon_size}></SiFirebase> : null}
                                                        {(a == 'AWS') ? <FaAws className={styles.icon_size}></FaAws> : null}
                                                        {(a == 'Linux') ? <FaLinux className={styles.icon_size}></FaLinux> : null}
                                                        {(a == 'Kubernetes') ? <SiKubernetes className={styles.icon_size}></SiKubernetes> : null}
                                                        {(a == 'Docker') ? <FaDocker className={styles.icon_size}></FaDocker> : null}
                                                        {(a == 'GCP') ? <DiGoogleCloudPlatform className={styles.icon_size}></DiGoogleCloudPlatform> : null}
                                                        {(a == 'Azure') ? <SiMicrosoftazure className={styles.icon_size}></SiMicrosoftazure> : null}
                                                        {(a == 'Terraform') ? <SiTerraform className={styles.icon_size}></SiTerraform> : null}
                                                        {(a == 'Flutter') ? <SiFlutter className={styles.icon_size}></SiFlutter> : null}
                                                        {(a == 'Swift') ? <FaSwift className={styles.icon_size}></FaSwift> : null}
                                                        {(a == 'React Native') ? <TbBrandReactNative className={styles.icon_size}></TbBrandReactNative> : null}
                                                        {(a == 'Unity') ? <FaUnity className={styles.icon_size}></FaUnity> : null}
                                                        {(a == 'Tensorflow') ? <SiTensorflow className={styles.icon_size}></SiTensorflow> : null}
                                                        {(a == 'PyTorch') ? <SiPytorch className={styles.icon_size}></SiPytorch> : null}
                                                        {(a == 'C / C++') ? <CgCPlusPlus className={styles.icon_size}></CgCPlusPlus> : null}
                                                        {(a == 'OpenCV') ? <SiOpencv className={styles.icon_size}></SiOpencv> : null}
                                                        {(a == 'R') ? <FaRProject className={styles.icon_size}></FaRProject> : null}
                                                        {(a == 'Hadoop') ? <SiApachehadoop className={styles.icon_size}></SiApachehadoop> : null}
                                                        {(a == 'Spark') ? <DiSpark className={styles.icon_size}></DiSpark> : null}
                                                        {(a == 'Kafka') ? <SiApachekafka className={styles.icon_size}></SiApachekafka> : null}
                                                        {(a == 'ElasticSearch') ? <SiElasticsearch className={styles.icon_size}></SiElasticsearch> : null}
                                                    </>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>);
                    })
                }
            </div>
        </div >
    );
}

function IsJsonString(str) {
    try {
        var json = JSON.parse(str);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}

export default MainPage;