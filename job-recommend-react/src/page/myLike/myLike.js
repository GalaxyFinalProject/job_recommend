import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './myLike.module.css';
import { SiTensorflow, SiPytorch, SiApachekafka, SiElasticsearch, SiOpencv, SiApachehadoop, SiTypescript, SiJavascript, SiSvelte, SiFlutter, SiJquery, SiSpring, SiNestjs, SiGoland, SiKotlin, SiExpress, SiMysql, SiMongodb, SiDjango, SiGraphql, SiFirebase, SiKubernetes, SiMicrosoftazure, SiTerraform } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaAngular, FaNodeJs, FaJava, FaPython, FaPhp, FaAws, FaLinux, FaDocker, FaSwift, FaUnity, FaRProject, FaArrowLeft } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { DiGoogleCloudPlatform, DiSpark } from "react-icons/di";
import { IoIosSearch } from "react-icons/io";
import { CgCPlusPlus } from "react-icons/cg";


function MyLikePage() {
    let dispatch = useDispatch();
    let userShow = useSelector(state => state.LoginUser);
    let [likeItems, setLikeItems] = useState([]);
    const myFunction = async () => {
        await axios.post("/user/skilLikeList", {
            'socialId': userShow.socialId,
            'platfomType': userShow.platformType,
        }).then((response) => {
            setLikeItems(response.data);
            console.log(likeItems);
        }).catch((e) => {
            console.log(e);
        })
    };
    useEffect(() => {
        myFunction();
    }, [])

    return (
        <div className={styles.main}>
            <div style={{ textAlign: 'center', marginRight: '250px', marginBottom: '100px' }}>
                <h1 >찜 목록</h1>
            </div>
            {
                likeItems.map((a, i) => {
                    if (IsJsonString(likeItems[i].recruitJob) == true) likeItems[i].recruitJob = JSON.parse(likeItems[i].recruitJob);
                    if (IsJsonString(likeItems[i].recruitSkill) == true) likeItems[i].recruitSkill = JSON.parse(likeItems[i].recruitSkill);
                    return (
                        <div className={styles.jobPosting}>
                            <div className={styles.boxSize}>
                                {
                                    (likeItems[i].recruitJob).map((a, i) => {
                                        return (
                                            <div style={{ display: 'inline-block' }}>
                                                <div style={{ fontSize: '1.1rem', color: '#3D4FF1', fontWeight: 'bold', marginLeft: '20px', marginTop: '15px', marginRight: '15px' }}>{a}</div>
                                            </div>
                                        );
                                    })
                                }
                                <div className={styles.likeJobList} onClick={() => {

                                    window.open(likeItems[i].recruitLink)
                                }}>
                                </div>
                                <div onClick={() => { window.open(likeItems[i].recruitLink) }} style={{ fontSize: '1.3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '10px', marginLeft: '10px', marginRight: '10px', minHeight: '62.4px', maxHeight: '62.4px', overflow: 'hidden' }}>{likeItems[i].recruitName}</div>
                                <div onClick={() => { window.open(likeItems[i].recruitLink) }} style={{ fontSize: '0.9rem', color: '#000080', fontWeight: 'bold', textAlign: 'center', marginTop: '10px' }}>{likeItems[i].companyName}</div>
                                <div onClick={() => { window.open(likeItems[i].recruitLink) }} style={{ fontSize: '0.8rem', color: 'red', textAlign: 'center', marginTop: '15px' }}>마감일 : {likeItems[i].recruitDate}</div>
                                <div onClick={() => { window.open(likeItems[i].recruitLink) }} style={{ fontSize: '0.7rem', fontWeight: 'bold', textAlign: 'center', margin: '15px' }}>{likeItems[i].recruitAddress}</div>
                                <div onClick={() => { window.open(likeItems[i].recruitLink) }} style={{ marginLeft: '5rem', marginRight: '5rem', maxHeight: '120px', overflow: 'hidden' }}>
                                    {
                                        likeItems[i].recruitSkill.map((a, i) => {
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

export default MyLikePage;