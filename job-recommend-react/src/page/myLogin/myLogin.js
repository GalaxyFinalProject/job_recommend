import { useEffect, useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import styles from './myLogin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, clearLanguage, removeSkill, setUser } from '../../store/store';
import axios from 'axios';

function MyLoginPage() {
    let dispatch = useDispatch();
    let userShow = useSelector(state => state.LoginUser);
    let skillList = useSelector(state => state.userSkill);
    let [useSkillshow, setUseSkillshow] = useState(false);
    let [useCountyShow, setUseCountyShow] = useState(false);
    let [useCityShow, setUseCityShow] = useState(false);
    let [useJobShow, setUseJobShow] = useState(false);

    let [JobList, setJobList] = useState([]);
    let [useCity, setUseCity] = useState();
    let [useCityCountry, setuseCityCountry] = useState([]);
    let UserInfo = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        console.log(userShow.userLikeAddress);
        console.log(userShow.userLikeJob);
        for (let i = 0; i < (userShow.userLikeAddress).length; i++) {
            useCityCountry.push(userShow.userLikeAddress[i]);
        }
        setuseCityCountry(useCityCountry);
        for (let i = 0; i < (userShow.userLikeJob).length; i++) {
            JobList.push(userShow.userLikeJob[i]);
        }
        let copy = [...JobList];
        setJobList(copy);
    }, []);
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1 >My Page</h1>
            </div>
            <div className={styles.checkskillbox}>
                <h4 style={{ marginTop: '10px', marginRight: '30px' }}>관심 기술 태그</h4>
                <div className={styles.dropdown} onClick={() => {
                    if (useSkillshow == false) setUseSkillshow(true)
                    else setUseSkillshow(false)
                }}>
                    <div style={{ display: 'inline-flex', flexWrap: 'wrap', width: '93%', height: '100%' }}>
                        {skillList.includes('TypeScript') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('TypeScript')); }}>TypeScript</div> : null}
                        {skillList.includes('React') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('React')); }}>React</div> : null}
                        {skillList.includes('JavaScript') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('JavaScript')); }}>JavaScript</div> : null}
                        {skillList.includes('svelte') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('svelte')); }}>svelte</div> : null}
                        {skillList.includes('Next.js') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Next.js')); }}>Next.js</div> : null}
                        {skillList.includes('HTML') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('HTML')); }}>HTML</div> : null}
                        {skillList.includes('Vue.js') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Vue.js')); }}>Vue.js</div> : null}
                        {skillList.includes('CSS') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('CSS')); }}>CSS</div> : null}
                        {skillList.includes('jQuery') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('jQuery')); }}>jQuery</div> : null}
                        {skillList.includes('Angular') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Angular')); }}>Angular</div> : null}
                        {skillList.includes('Node.js') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Node.js')); }}>Node.js</div> : null}
                        {skillList.includes('Java') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Java')); }}>Java</div> : null}
                        {skillList.includes('Spring') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Spring')); }}>Spring</div> : null}
                        {skillList.includes('Nest.Js') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Nest.Js')); }}>Nest.Js</div> : null}
                        {skillList.includes('Go') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Go')); }}>Go</div> : null}
                        {skillList.includes('Kotlin') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Kotlin')); }}>Kotlin</div> : null}
                        {skillList.includes('ExpressJS') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('ExpressJS')); }}>ExpressJS</div> : null}
                        {skillList.includes('MySQL') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('MySQL')); }}>MySQL</div> : null}
                        {skillList.includes('MongoDB') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('MongoDB')); }}>MongoDB</div> : null}
                        {skillList.includes('Python') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Python')); }}>Python</div> : null}
                        {skillList.includes('Django') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Django')); }}>Django</div> : null}
                        {skillList.includes('PHP') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('PHP')); }}>PHP</div> : null}
                        {skillList.includes('GraphQL') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('GraphQL')); }}>GraphQL</div> : null}
                        {skillList.includes('Firebase') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Firebase')); }}>Firebase</div> : null}
                        {skillList.includes('AWS') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('AWS')); }}>AWS</div> : null}
                        {skillList.includes('Linux') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Linux')); }}>Linux</div> : null}
                        {skillList.includes('Kubernetes') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Kubernetes')); }}>Kubernetes</div> : null}
                        {skillList.includes('Docker') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Docker')); }}>Docker</div> : null}
                        {skillList.includes('GCP') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('GCP')); }}>GCP</div> : null}
                        {skillList.includes('Azure') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Azure')); }}>Azure</div> : null}
                        {skillList.includes('Terraform') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Terraform')); }}>Terraform</div> : null}
                        {skillList.includes('Flutter') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Flutter')); }}>Flutter</div> : null}
                        {skillList.includes('Swift') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Swift')); }}>Swift</div> : null}
                        {skillList.includes('React Native') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('React Native')); }}>React Native</div> : null}
                        {skillList.includes('Unity') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Unity')); }}>Unity</div> : null}
                        {skillList.includes('Tensorflow') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Tensorflow')); }}>Tensorflow</div> : null}
                        {skillList.includes('PyTorch') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('PyTorch')); }}>PyTorch</div> : null}
                        {skillList.includes('C / C++') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('C / C++')); }}>C / C++</div> : null}
                        {skillList.includes('OpenCV') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('OpenCV')); }}>OpenCV</div> : null}
                        {skillList.includes('R') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('R')); }}>R</div> : null}
                        {skillList.includes('Hadoop') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Hadoop')); }}>Hadoop</div> : null}
                        {skillList.includes('Spark') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Spark')); }}>Spark</div> : null}
                        {skillList.includes('Kafka') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('Kafka')); }}>Kafka</div> : null}
                        {skillList.includes('ElasticSearch') ? <div className={styles.likeSkillList} onClick={() => { dispatch(removeSkill('ElasticSearch')); }}>ElasticSearch</div> : null}
                    </div>
                    <div className={styles.icon}>
                        <IoIosSearch style={{ width: '35px', height: '35px', marginRight: '10px', marginTop: '10px' }}></IoIosSearch>
                    </div>
                    <div className={styles.dropdownContent} style={useSkillshow == true ? { backgroundColor: '#ddd', display: 'block' } : null}>
                        <a onClick={() => {
                            if (skillList.includes('TypeScript') == false) dispatch(addSkill('TypeScript'));
                            else dispatch(removeSkill('TypeScript'));
                        }}>TypeScript</a>
                        <a onClick={() => {
                            if (skillList.includes('React') == false) dispatch(addSkill('React'));
                            else dispatch(removeSkill('React'));
                        }}>React</a>
                        <a onClick={() => {
                            if (skillList.includes('JavaScript') == false) dispatch(addSkill('JavaScript'));
                            else dispatch(removeSkill('JavaScript'));
                        }}>JavaScript</a>
                        <a onClick={() => {
                            if (skillList.includes('svelte') == false) dispatch(addSkill('svelte'));
                            else dispatch(removeSkill('svelte'));
                        }}>svelte</a>
                        <a onClick={() => {
                            if (skillList.includes('Next.js') == false) dispatch(addSkill('Next.js'));
                            else dispatch(removeSkill('Next.js'));
                        }}>Next.js</a>
                        <a onClick={() => {
                            if (skillList.includes('HTML') == false) dispatch(addSkill('HTML'));
                            else dispatch(removeSkill('HTML'));
                        }}>HTML</a>
                        <a onClick={() => {
                            if (skillList.includes('Vue.js') == false) dispatch(addSkill('Vue.js'));
                            else dispatch(removeSkill('Vue.js'));
                        }}>Vue.js</a>
                        <a onClick={() => {
                            if (skillList.includes('CSS') == false) dispatch(addSkill('CSS'));
                            else dispatch(removeSkill('CSS'));
                        }}>CSS</a>
                        <a onClick={() => {
                            if (skillList.includes('jQuery') == false) dispatch(addSkill('jQuery'));
                            else dispatch(removeSkill('jQuery'));
                        }}>jQuery</a>
                        <a onClick={() => {
                            if (skillList.includes('Angular') == false) dispatch(addSkill('Angular'));
                            else dispatch(removeSkill('Angular'));
                        }}>Angular</a>
                        <a onClick={() => {
                            if (skillList.includes('Node.js') == false) dispatch(addSkill('Node.js'));
                            else dispatch(removeSkill('Node.js'));
                        }}>Node.js</a>
                        <a onClick={() => {
                            if (skillList.includes('Java') == false) dispatch(addSkill('Java'));
                            else dispatch(removeSkill('Java'));
                        }}>Java</a>
                        <a onClick={() => {
                            if (skillList.includes('Spring') == false) dispatch(addSkill('Spring'));
                            else dispatch(removeSkill('Spring'));
                        }}>Spring</a>
                        <a onClick={() => {
                            if (skillList.includes('Nest.Js') == false) dispatch(addSkill('Nest.Js'));
                            else dispatch(removeSkill('Nest.Js'));
                        }}>Nest.Js</a>
                        <a onClick={() => {
                            if (skillList.includes('Go') == false) dispatch(addSkill('Go'));
                            else dispatch(removeSkill('Go'));
                        }}>Go</a>
                        <a onClick={() => {
                            if (skillList.includes('Kotlin') == false) dispatch(addSkill('Kotlin'));
                            else dispatch(removeSkill('Kotlin'));
                        }}>Kotlin</a>
                        <a onClick={() => {
                            if (skillList.includes('ExpressJS') == false) dispatch(addSkill('ExpressJS'));
                            else dispatch(removeSkill('ExpressJS'));
                        }}>ExpressJS</a>
                        <a onClick={() => {
                            if (skillList.includes('MySQL') == false) dispatch(addSkill('MySQL'));
                            else dispatch(removeSkill('MySQL'));
                        }}>MySQL</a>
                        <a onClick={() => {
                            if (skillList.includes('MongoDB') == false) dispatch(addSkill('MongoDB'));
                            else dispatch(removeSkill('MongoDB'));
                        }}>MongoDB</a>
                        <a onClick={() => {
                            if (skillList.includes('Python') == false) dispatch(addSkill('Python'));
                            else dispatch(removeSkill('Python'));
                        }}>Python</a>
                        <a onClick={() => {
                            if (skillList.includes('Django') == false) dispatch(addSkill('Django'));
                            else dispatch(removeSkill('Django'));
                        }}>Django</a>
                        <a onClick={() => {
                            if (skillList.includes('PHP') == false) dispatch(addSkill('PHP'));
                            else dispatch(removeSkill('PHP'));
                        }}>PHP</a>
                        <a onClick={() => {
                            if (skillList.includes('GraphQL') == false) dispatch(addSkill('GraphQL'));
                            else dispatch(removeSkill('GraphQL'));
                        }}>GraphQL</a>
                        <a onClick={() => {
                            if (skillList.includes('Firebase') == false) dispatch(addSkill('Firebase'));
                            else dispatch(removeSkill('Firebase'));
                        }}>Firebase</a>
                        <a onClick={() => {
                            if (skillList.includes('AWS') == false) dispatch(addSkill('AWS'));
                            else dispatch(removeSkill('AWS'));
                        }}>AWS</a>
                        <a onClick={() => {
                            if (skillList.includes('Linux') == false) dispatch(addSkill('Linux'));
                            else dispatch(removeSkill('Linux'));
                        }}>Linux</a>
                        <a onClick={() => {
                            if (skillList.includes('Kubernetes') == false) dispatch(addSkill('Kubernetes'));
                            else dispatch(removeSkill('Kubernetes'));
                        }}>Kubernetes</a>
                        <a onClick={() => {
                            if (skillList.includes('Docker') == false) dispatch(addSkill('Docker'));
                            else dispatch(removeSkill('Docker'));
                        }}>Docker</a>
                        <a onClick={() => {
                            if (skillList.includes('GCP') == false) dispatch(addSkill('GCP'));
                            else dispatch(removeSkill('GCP'));
                        }}>GCP</a>
                        <a onClick={() => {
                            if (skillList.includes('Azure') == false) dispatch(addSkill('Azure'));
                            else dispatch(removeSkill('Azure'));
                        }}>Azure</a>
                        <a onClick={() => {
                            if (skillList.includes('Terraform') == false) dispatch(addSkill('Terraform'));
                            else dispatch(removeSkill('Terraform'));
                        }}>Terraform</a>
                        <a onClick={() => {
                            if (skillList.includes('Flutter') == false) dispatch(addSkill('Flutter'));
                            else dispatch(removeSkill('Flutter'));
                        }}>Flutter</a>
                        <a onClick={() => {
                            if (skillList.includes('Swift') == false) dispatch(addSkill('Swift'));
                            else dispatch(removeSkill('Swift'));
                        }}>Swift</a>
                        <a onClick={() => {
                            if (skillList.includes('React Native') == false) dispatch(addSkill('React Native'));
                            else dispatch(removeSkill('React Native'));
                        }}>React Native</a>
                        <a onClick={() => {
                            if (skillList.includes('Unity') == false) dispatch(addSkill('Unity'));
                            else dispatch(removeSkill('Unity'));
                        }}>Unity</a>
                        <a onClick={() => {
                            if (skillList.includes('Tensorflow') == false) dispatch(addSkill('Tensorflow'));
                            else dispatch(removeSkill('Tensorflow'));
                        }}>Tensorflow</a>
                        <a onClick={() => {
                            if (skillList.includes('PyTorch') == false) dispatch(addSkill('PyTorch'));
                            else dispatch(removeSkill('PyTorch'));
                        }}>PyTorch</a>
                        <a onClick={() => {
                            if (skillList.includes('C / C++') == false) dispatch(addSkill('C / C++'));
                            else dispatch(removeSkill('C / C++'));
                        }}>C / C++</a>
                        <a onClick={() => {
                            if (skillList.includes('OpenCV') == false) dispatch(addSkill('OpenCV'));
                            else dispatch(removeSkill('OpenCV'));
                        }}>OpenCV</a>
                        <a onClick={() => {
                            if (skillList.includes('R') == false) dispatch(addSkill('R'));
                            else dispatch(removeSkill('R'));
                        }}>R</a>
                        <a onClick={() => {
                            if (skillList.includes('Hadoop') == false) dispatch(addSkill('Hadoop'));
                            else dispatch(removeSkill('Hadoop'));
                        }}>Hadoop</a>
                        <a onClick={() => {
                            if (skillList.includes('Spark') == false) dispatch(addSkill('Spark'));
                            else dispatch(removeSkill('Spark'));
                        }}>Spark</a>
                        <a onClick={() => {
                            if (skillList.includes('Kafka') == false) dispatch(addSkill('Kafka'));
                            else dispatch(removeSkill('Kafka'));
                        }}>Kafka</a>
                        <a onClick={() => {
                            if (skillList.includes('ElasticSearch') == false) dispatch(addSkill('ElasticSearch'));
                            else dispatch(removeSkill('ElasticSearch'));
                        }}>ElasticSearch</a>

                    </div>
                </div>
            </div>

            <div className={styles.checkskillbox}>
                <h4 style={{ marginTop: '10px', marginRight: '30px' }}>시/도</h4>
                <div className={styles.dropdown} onClick={() => {
                    if (useCountyShow == false) setUseCountyShow(true)
                    else setUseCountyShow(false)
                }}>
                    <div style={{ display: 'inline-flex', flexWrap: 'wrap', width: '93%', height: '100%' }}>
                        {useCityCountry.includes('서울 종로구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 종로구'), 1); }}>서울 종로구</div> : null}
                        {useCityCountry.includes('서울 중구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 중구'), 1); }}>서울 중구</div> : null}
                        {useCityCountry.includes('서울 용산구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 용산구'), 1); }}>서울 용산구</div> : null}
                        {useCityCountry.includes('서울 성동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 성동구'), 1); }}>서울 성동구</div> : null}
                        {useCityCountry.includes('서울 광진구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 광진구'), 1); }}>서울 광진구</div> : null}
                        {useCityCountry.includes('서울 동대문구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 동대문구'), 1); }}>서울 동대문구</div> : null}
                        {useCityCountry.includes('서울 중랑구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 중랑구'), 1); }}>서울 중랑구</div> : null}
                        {useCityCountry.includes('서울 성북구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 성북구'), 1); }}>서울 성북구</div> : null}
                        {useCityCountry.includes('서울 강북구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강북구'), 1); }}>서울 강북구</div> : null}
                        {useCityCountry.includes('서울 도봉구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 도봉구'), 1); }}>서울 도봉구</div> : null}
                        {useCityCountry.includes('서울 노원구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 노원구'), 1); }}>서울 노원구</div> : null}
                        {useCityCountry.includes('서울 은평구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 은평구'), 1); }}>서울 은평구</div> : null}
                        {useCityCountry.includes('서울 서대문구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 서대문구'), 1); }}>서울 서대문구</div> : null}
                        {useCityCountry.includes('서울 마포구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 마포구'), 1); }}>서울 마포구</div> : null}
                        {useCityCountry.includes('서울 양천구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 양천구'), 1); }}>서울 양천구</div> : null}
                        {useCityCountry.includes('서울 강서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강서구'), 1); }}>서울 강서구</div> : null}
                        {useCityCountry.includes('서울 구로구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 구로구'), 1); }}>서울 구로구</div> : null}
                        {useCityCountry.includes('서울 금천구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 금천구'), 1); }}>서울 금천구</div> : null}
                        {useCityCountry.includes('서울 영등포구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 영등포구'), 1); }}>서울 영등포구</div> : null}
                        {useCityCountry.includes('서울 동작구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 동작구'), 1); }}>서울 동작구</div> : null}
                        {useCityCountry.includes('서울 관악구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 관악구'), 1); }}>서울 관악구</div> : null}
                        {useCityCountry.includes('서울 서초구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 서초구'), 1); }}>서울 서초구</div> : null}
                        {useCityCountry.includes('서울 강남구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강남구'), 1); }}>서울 강남구</div> : null}
                        {useCityCountry.includes('서울 송파구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 송파구'), 1); }}>서울 송파구</div> : null}
                        {useCityCountry.includes('서울 강동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강동구'), 1); }}>서울 강동구</div> : null}


                        {useCityCountry.includes('부산 중구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 중구'), 1); }}>부산 중구</div> : null}
                        {useCityCountry.includes('부산 서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 서구'), 1); }}>부산 서구</div> : null}
                        {useCityCountry.includes('부산 동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 동구'), 1); }}>부산 동구</div> : null}
                        {useCityCountry.includes('부산 영도구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 영도구'), 1); }}>부산 영도구</div> : null}
                        {useCityCountry.includes('부산 부산진구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 부산진구'), 1); }}>부산 부산진구</div> : null}
                        {useCityCountry.includes('부산 동래구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 동래구'), 1); }}>부산 동래구</div> : null}
                        {useCityCountry.includes('부산 남구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 남구'), 1); }}>부산 남구</div> : null}
                        {useCityCountry.includes('부산 북구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 북구'), 1); }}>부산 북구</div> : null}
                        {useCityCountry.includes('부산 강서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 강서구'), 1); }}>부산 강서구</div> : null}
                        {useCityCountry.includes('부산 해운대구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 해운대구'), 1); }}>부산 해운대구</div> : null}
                        {useCityCountry.includes('부산 사하구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 사하구'), 1); }}>부산 사하구</div> : null}
                        {useCityCountry.includes('부산 금정구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 금정구'), 1); }}>부산 금정구</div> : null}
                        {useCityCountry.includes('부산 연제구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 연제구'), 1); }}>부산 연제구</div> : null}
                        {useCityCountry.includes('부산 수영구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 수영구'), 1); }}>부산 수영구</div> : null}
                        {useCityCountry.includes('부산 사상구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 사상구'), 1); }}>부산 사상구</div> : null}

                        {useCityCountry.includes('대구 중구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 중구'), 1); }}>대구 중구</div> : null}
                        {useCityCountry.includes('대구 동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 동구'), 1); }}>대구 동구</div> : null}
                        {useCityCountry.includes('대구 서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 서구'), 1); }}>대구 서구</div> : null}
                        {useCityCountry.includes('대구 남구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 남구'), 1); }}>대구 남구</div> : null}
                        {useCityCountry.includes('대구 북구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 북구'), 1); }}>대구 북구</div> : null}
                        {useCityCountry.includes('대구 수성구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 수성구'), 1); }}>대구 수성구</div> : null}
                        {useCityCountry.includes('대구 달서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 달서구'), 1); }}>대구 달서구</div> : null}


                        {useCityCountry.includes('인천 동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 동구'), 1); }}>인천 동구</div> : null}
                        {useCityCountry.includes('인천 미추홀구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 미추홀구'), 1); }}>인천 미추홀구</div> : null}
                        {useCityCountry.includes('인천 연수구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 연수구'), 1); }}>인천 연수구</div> : null}
                        {useCityCountry.includes('인천 남동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 남동구'), 1); }}>인천 남동구</div> : null}
                        {useCityCountry.includes('인천 부평구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 부평구'), 1); }}>인천 부평구</div> : null}
                        {useCityCountry.includes('인천 계양구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 계양구'), 1); }}>인천 계양구</div> : null}
                        {useCityCountry.includes('인천 서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 서구'), 1); }}>인천 서구</div> : null}



                        {useCityCountry.includes('광주 동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 동구'), 1); }}>광주 동구</div> : null}
                        {useCityCountry.includes('광주 서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 서구'), 1); }}>광주 서구</div> : null}
                        {useCityCountry.includes('광주 남구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 남구'), 1); }}>광주 남구</div> : null}
                        {useCityCountry.includes('광주 북구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 북구'), 1); }}>광주 북구</div> : null}
                        {useCityCountry.includes('광주 광진구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 광진구'), 1); }}>광주 광진구</div> : null}



                        {useCityCountry.includes('대전 동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 동구'), 1); }}>대전 동구</div> : null}
                        {useCityCountry.includes('대전 중구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 중구'), 1); }}>대전 중구</div> : null}
                        {useCityCountry.includes('대전 서구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 서구'), 1); }}>대전 서구</div> : null}
                        {useCityCountry.includes('대전 유성구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 유성구'), 1); }}>대전 유성구</div> : null}
                        {useCityCountry.includes('대전 대덕구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 대덕구'), 1); }}>대전 대덕구</div> : null}


                        {useCityCountry.includes('울산 중구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 중구'), 1); }}>울산 중구</div> : null}
                        {useCityCountry.includes('울산 남구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 남구'), 1); }}>울산 남구</div> : null}
                        {useCityCountry.includes('울산 동구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 동구'), 1); }}>울산 동구</div> : null}
                        {useCityCountry.includes('울산 북구') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 북구'), 1); }}>울산 북구</div> : null}


                        {useCityCountry.includes('경기 수원시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 수원시'), 1); }}>경기 수원시</div> : null}
                        {useCityCountry.includes('경기 성남시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 성남시'), 1); }}>경기 성남시</div> : null}
                        {useCityCountry.includes('경기 의정부시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 의정부시'), 1); }}>경기 의정부시</div> : null}
                        {useCityCountry.includes('경기 안양시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 안양시'), 1); }}>경기 안양시</div> : null}
                        {useCityCountry.includes('경기 부천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 부천시'), 1); }}>경기 부천시</div> : null}
                        {useCityCountry.includes('경기 광명시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 광명시'), 1); }}>경기 광명시</div> : null}
                        {useCityCountry.includes('경기 동두천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 동두천시'), 1); }}>경기 동두천시</div> : null}
                        {useCityCountry.includes('경기 평택시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 평택시'), 1); }}>경기 평택시</div> : null}
                        {useCityCountry.includes('경기 안산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 안산시'), 1); }}>경기 안산시</div> : null}
                        {useCityCountry.includes('경기 고양시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 고양시'), 1); }}>경기 고양시</div> : null}
                        {useCityCountry.includes('경기 과천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 과천시'), 1); }}>경기 과천시</div> : null}
                        {useCityCountry.includes('경기 구리시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 구리시'), 1); }}>경기 구리시</div> : null}
                        {useCityCountry.includes('경기 남양주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 남양주시'), 1); }}>경기 남양주시</div> : null}
                        {useCityCountry.includes('경기 오산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 오산시'), 1); }}>경기 오산시</div> : null}
                        {useCityCountry.includes('경기 시흥시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 시흥시'), 1); }}>경기 시흥시</div> : null}
                        {useCityCountry.includes('경기 군포시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 군포시'), 1); }}>경기 군포시</div> : null}
                        {useCityCountry.includes('경기 의왕시') ? <div className={styles.likeSkillList} onC lick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 의왕시'), 1); }}>경기 의왕시</div> : null}
                        {useCityCountry.includes('경기 하남시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 하남시'), 1); }}>경기 하남시</div> : null}
                        {useCityCountry.includes('경기 이천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 이천시'), 1); }}>경기 이천시</div> : null}
                        {useCityCountry.includes('경기 안성시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 안성시'), 1); }}>경기 안성시</div> : null}
                        {useCityCountry.includes('경기 김포시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 김포시'), 1); }}>경기 김포시</div> : null}
                        {useCityCountry.includes('경기 화성시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 화성시'), 1); }}>경기 화성시</div> : null}
                        {useCityCountry.includes('경기 광주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 광주시'), 1); }}>경기 광주시</div> : null}
                        {useCityCountry.includes('경기 양주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 양주시'), 1); }}>경기 양주시</div> : null}
                        {useCityCountry.includes('경기 포천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 포천시'), 1); }}>경기 포천시</div> : null}
                        {useCityCountry.includes('경기 여주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 여주시'), 1); }}>경기 여주시</div> : null}



                        {useCityCountry.includes('강원 춘천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 춘천시'), 1); }}>강원 춘천시</div> : null}
                        {useCityCountry.includes('강원 원주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 원주시'), 1); }}>강원 원주시</div> : null}
                        {useCityCountry.includes('강원 강릉시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 강릉시'), 1); }}>강원 강릉시</div> : null}
                        {useCityCountry.includes('강원 동해시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 동해시'), 1); }}>강원 동해시</div> : null}
                        {useCityCountry.includes('강원 태백시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 태백시'), 1); }}>강원 태백시</div> : null}
                        {useCityCountry.includes('강원 속초시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 속초시'), 1); }}>강원 속초시</div> : null}
                        {useCityCountry.includes('강원 삼척시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 삼척시'), 1); }}>강원 삼척시</div> : null}


                        {useCityCountry.includes('충북 청주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충북 청주시'), 1); }}>충북 청주시</div> : null}
                        {useCityCountry.includes('충북 충주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충북 충주시'), 1); }}>충북 충주시</div> : null}
                        {useCityCountry.includes('충북 제천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충북 제천시'), 1); }}>충북 제천시</div> : null}



                        {useCityCountry.includes('충남 천안시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 천안시'), 1); }}>충남 천안시</div> : null}
                        {useCityCountry.includes('충남 공주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 공주시'), 1); }}>충남 공주시</div> : null}
                        {useCityCountry.includes('충남 보령시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 보령시'), 1); }}>충남 보령시</div> : null}
                        {useCityCountry.includes('충남 아산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 아산시'), 1); }}>충남 아산시</div> : null}
                        {useCityCountry.includes('충남 서산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 서산시'), 1); }}>충남 서산시</div> : null}
                        {useCityCountry.includes('충남 논산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 논산시'), 1); }}>충남 논산시</div> : null}
                        {useCityCountry.includes('충남 계룡시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 계룡시'), 1); }}>충남 계룡시</div> : null}
                        {useCityCountry.includes('충남 당진시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 당진시'), 1); }}>충남 당진시</div> : null}


                        {useCityCountry.includes('전북 전주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 전주시'), 1); }}>전북 전주시</div> : null}
                        {useCityCountry.includes('전북 군산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 군산시'), 1); }}>전북 군산시</div> : null}
                        {useCityCountry.includes('전북 익산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 익산시'), 1); }}>전북 익산시</div> : null}
                        {useCityCountry.includes('전북 정읍시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 정읍시'), 1); }}>전북 정읍시</div> : null}
                        {useCityCountry.includes('전북 남원시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 남원시'), 1); }}>전북 남원시</div> : null}
                        {useCityCountry.includes('전북 김제시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 김제시'), 1); }}>전북 김제시</div> : null}

                        {useCityCountry.includes('전남 목포시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 목포시'), 1); }}>전남 목포시</div> : null}
                        {useCityCountry.includes('전남 여수시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 여수시'), 1); }}>전남 여수시</div> : null}
                        {useCityCountry.includes('전남 순천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 순천시'), 1); }}>전남 순천시</div> : null}
                        {useCityCountry.includes('전남 나주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 나주시'), 1); }}>전남 나주시</div> : null}
                        {useCityCountry.includes('전남 광양시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 광양시'), 1); }}>전남 광양시</div> : null}


                        {useCityCountry.includes('경북 포항시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 포항시'), 1); }}>경북 포항시</div> : null}
                        {useCityCountry.includes('경북 경주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 경주시'), 1); }}>경북 경주시</div> : null}
                        {useCityCountry.includes('경북 김천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 김천시'), 1); }}>경북 김천시</div> : null}
                        {useCityCountry.includes('경북 안동시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 안동시'), 1); }}>경북 안동시</div> : null}
                        {useCityCountry.includes('경북 구미시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 구미시'), 1); }}>경북 구미시</div> : null}
                        {useCityCountry.includes('경북 영주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 영주시'), 1); }}>경북 영주시</div> : null}
                        {useCityCountry.includes('경북 영천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 영천시'), 1); }}>경북 영천시</div> : null}
                        {useCityCountry.includes('경북 상주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 상주시'), 1); }}>경북 상주시</div> : null}
                        {useCityCountry.includes('경북 문경시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 문경시'), 1); }}>경북 문경시</div> : null}
                        {useCityCountry.includes('경북 경산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 경산시'), 1); }}>경북 경산시</div> : null}


                        {useCityCountry.includes('경남 창원시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 창원시'), 1); }}>경남 창원시</div> : null}
                        {useCityCountry.includes('경남 진주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 진주시'), 1); }}>경남 진주시</div> : null}
                        {useCityCountry.includes('경남 통영시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 통영시'), 1); }}>경남 통영시</div> : null}
                        {useCityCountry.includes('경남 사천시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 사천시'), 1); }}>경남 사천시</div> : null}
                        {useCityCountry.includes('경남 김해시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 김해시'), 1); }}>경남 김해시</div> : null}
                        {useCityCountry.includes('경남 밀양시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 밀양시'), 1); }}>경남 밀양시</div> : null}
                        {useCityCountry.includes('경남 거제시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 거제시'), 1); }}>경남 거제시</div> : null}
                        {useCityCountry.includes('경남 양산시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 양산시'), 1); }}>경남 양산시</div> : null}


                        {useCityCountry.includes('제주 제주시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '제주 제주시'), 1); }}>제주 제주시</div> : null}
                        {useCityCountry.includes('제주 서귀포시') ? <div className={styles.likeSkillList} onClick={() => { useCityCountry.splice(useCityCountry.findIndex((item) => item === '제주 서귀포시'), 1); }}>제주 서귀포시</div> : null}
                    </div>
                    <div className={styles.icon}>
                        <IoIosSearch style={{ width: '35px', height: '35px', marginRight: '10px', marginTop: '10px' }}></IoIosSearch>
                    </div>
                    <div className={styles.dropdownContent} style={useCountyShow == true ? { backgroundColor: '#ddd', display: 'block' } : null}>
                        <a onClick={() => { setUseCity('서울'); }}>서울</a>
                        <a onClick={() => { setUseCity('부산'); }}>부산</a>
                        <a onClick={() => { setUseCity('대구'); }}>대구</a>
                        <a onClick={() => { setUseCity('인천'); }}>인천</a>
                        <a onClick={() => { setUseCity('광주'); }}>광주</a>
                        <a onClick={() => { setUseCity('대전'); }}>대전</a>
                        <a onClick={() => { setUseCity('울산'); }}>울산</a>
                        <a onClick={() => { setUseCity('경기'); }}>경기</a>
                        <a onClick={() => { setUseCity('강원'); }}>강원</a>
                        <a onClick={() => { setUseCity('충북'); }}>충북</a>
                        <a onClick={() => { setUseCity('충남'); }}>충남</a>
                        <a onClick={() => { setUseCity('전북'); }}>전북</a>
                        <a onClick={() => { setUseCity('전남'); }}>전남</a>
                        <a onClick={() => { setUseCity('경북'); }}>경북</a>
                        <a onClick={() => { setUseCity('경남'); }}>경남</a>
                        <a onClick={() => { setUseCity('제주'); }}>제주</a>

                    </div>
                </div>
            </div>

            <div className={styles.checkskillbox}>
                <h4 style={{ marginTop: '10px', marginRight: '30px' }}>구</h4>
                <div className={styles.dropdown} onClick={() => {
                    if (useCityShow == false) setUseCityShow(true)
                    else setUseCityShow(false)
                }}>
                    <div style={{ display: 'inline-flex', flexWrap: 'wrap', width: '93%', height: '100%' }}></div>
                    <div className={styles.icon}>
                        <IoIosSearch style={{ width: '35px', height: '35px', marginRight: '10px', marginTop: '10px' }}></IoIosSearch>
                    </div>
                    <div className={styles.dropdownContent} style={useCityShow == true ? { backgroundColor: '#ddd', display: 'block' } : null}>
                        {
                            useCity == '서울' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 종로구') == false) {
                                            useCityCountry.push('서울 종로구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 종로구'), 1);
                                    }}>종로구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 중구') == false) {
                                            useCityCountry.push('서울 중구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 중구'), 1);
                                    }}>중구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 용산구') == false) {
                                            useCityCountry.push('서울 용산구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 용산구'), 1);
                                    }}>용산구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 성동구') == false) {
                                            useCityCountry.push('서울 성동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 성동구'), 1);
                                    }}>성동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 광진구') == false) {
                                            useCityCountry.push('서울 광진구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 광진구'), 1);
                                    }}>광진구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 동대문구') == false) {
                                            useCityCountry.push('서울 동대문구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 동대문구'), 1);
                                    }}>동대문구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 중랑구') == false) {
                                            useCityCountry.push('서울 중랑구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 중랑구'), 1);
                                    }}>중랑구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 성북구') == false) {
                                            useCityCountry.push('서울 성북구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 성북구'), 1);
                                    }}>성북구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 강북구') == false) {
                                            useCityCountry.push('서울 강북구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강북구'), 1);
                                    }}>강북구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 도봉구') == false) {
                                            useCityCountry.push('서울 도봉구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 도봉구'), 1);
                                    }}>도봉구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 노원구') == false) {
                                            useCityCountry.push('서울 노원구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 노원구'), 1);
                                    }}>노원구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 은평구') == false) {
                                            useCityCountry.push('서울 은평구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 은평구'), 1);
                                    }}>은평구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 서대문구') == false) {
                                            useCityCountry.push('서울 서대문구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 서대문구'), 1);
                                    }}>서대문구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 마포구') == false) {
                                            useCityCountry.push('서울 마포구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 마포구'), 1);
                                    }}>마포구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 양천구') == false) {
                                            useCityCountry.push('서울 양천구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 양천구'), 1);
                                    }}>양천구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 강서구') == false) {
                                            useCityCountry.push('서울 강서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강서구'), 1);
                                    }}>강서구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 구로구') == false) {
                                            useCityCountry.push('서울 구로구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 구로구'), 1);
                                    }}>구로구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 금천구') == false) {
                                            useCityCountry.push('서울 금천구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 금천구'), 1);
                                    }}>금천구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 영등포구') == false) {
                                            useCityCountry.push('서울 영등포구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 영등포구'), 1);
                                    }}>영등포구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 동작구') == false) {
                                            useCityCountry.push('서울 동작구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 동작구'), 1);
                                    }}>동작구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 관악구') == false) {
                                            useCityCountry.push('서울 관악구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 관악구'), 1);
                                    }}>관악구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 서초구') == false) {
                                            useCityCountry.push('서울 서초구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 서초구'), 1);
                                    }}>서초구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 강남구') == false) {
                                            useCityCountry.push('서울 강남구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강남구'), 1);
                                    }}>강남구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 송파구') == false) {
                                            useCityCountry.push('서울 송파구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 송파구'), 1);
                                    }}>송파구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('서울 강동구') == false) {
                                            useCityCountry.push('서울 강동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '서울 강동구'), 1);
                                    }}>강동구</a>

                                </>
                                : null
                        }
                        {
                            useCity == '부산' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 중구') == false) {
                                            useCityCountry.push('부산 중구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 중구'), 1);
                                    }}>중구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 서구') == false) {
                                            useCityCountry.push('부산 서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 서구'), 1);
                                    }}>서구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 동구') == false) {
                                            useCityCountry.push('부산 동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 동구'), 1);
                                    }}>동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 영도구') == false) {
                                            useCityCountry.push('부산 영도구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 영도구'), 1);
                                    }}>영도구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 부산진구') == false) {
                                            useCityCountry.push('부산 부산진구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 부산진구'), 1);
                                    }}>부산진구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 동래구') == false) {
                                            useCityCountry.push('부산 동래구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 동래구'), 1);
                                    }}>동래구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 남구') == false) {
                                            useCityCountry.push('부산 남구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 남구'), 1);
                                    }}>남구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 북구') == false) {
                                            useCityCountry.push('부산 북구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 북구'), 1);
                                    }}>북구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 강서구') == false) {
                                            useCityCountry.push('부산 강서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 강서구'), 1);
                                    }}>강서구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 해운대구') == false) {
                                            useCityCountry.push('부산 해운대구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 해운대구'), 1);
                                    }}>해운대구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 사하구') == false) {
                                            useCityCountry.push('부산 사하구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 사하구'), 1);
                                    }}>사하구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 금정구') == false) {
                                            useCityCountry.push('부산 금정구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 금정구'), 1);
                                    }}>금정구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 연제구') == false) {
                                            useCityCountry.push('부산 연제구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 연제구'), 1);
                                    }}>연제구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 수영구') == false) {
                                            useCityCountry.push('부산 수영구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 수영구'), 1);
                                    }}>수영구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('부산 사상구') == false) {
                                            useCityCountry.push('부산 사상구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '부산 사상구'), 1);
                                    }}>사상구</a>

                                </>
                                : null
                        }
                        {
                            useCity == '대구' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대구 중구') == false) {
                                            useCityCountry.push('대구 중구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 중구'), 1);
                                    }}>중구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대구 동구') == false) {
                                            useCityCountry.push('대구 동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 동구'), 1);
                                    }}>동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대구 서구') == false) {
                                            useCityCountry.push('대구 서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 서구'), 1);
                                    }}>서구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대구 남구') == false) {
                                            useCityCountry.push('대구 남구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 남구'), 1);
                                    }}>남구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대구 북구') == false) {
                                            useCityCountry.push('대구 북구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 북구'), 1);
                                    }}>북구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대구 수성구') == false) {
                                            useCityCountry.push('대구 수성구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 수성구'), 1);
                                    }}>수성구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대구 달서구') == false) {
                                            useCityCountry.push('대구 달서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대구 달서구'), 1);
                                    }}>달서구</a>
                                </>
                                : null
                        }
                        {
                            useCity == '인천' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 중구') == false) {
                                            useCityCountry.push('인천 중구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 중구'), 1);
                                    }}>중구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 동구') == false) {
                                            useCityCountry.push('인천 동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 동구'), 1);
                                    }}>동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 미추홀구') == false) {
                                            useCityCountry.push('인천 미추홀구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 미추홀구'), 1);
                                    }}>미추홀구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 연수구') == false) {
                                            useCityCountry.push('인천 연수구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 연수구'), 1);
                                    }}>연수구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 남동구') == false) {
                                            useCityCountry.push('인천 남동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 남동구'), 1);
                                    }}>남동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 부평구') == false) {
                                            useCityCountry.push('인천 부평구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 부평구'), 1);
                                    }}>부평구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 계양구') == false) {
                                            useCityCountry.push('인천 계양구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 계양구'), 1);
                                    }}>계양구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('인천 서구') == false) {
                                            useCityCountry.push('인천 서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '인천 서구'), 1);
                                    }}>서구</a>
                                </>
                                : null
                        }
                        {
                            useCity == '광주' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('광주 동구') == false) {
                                            useCityCountry.push('광주 동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 동구'), 1);
                                    }}>동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('광주 서구') == false) {
                                            useCityCountry.push('광주 서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 서구'), 1);
                                    }}>서구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('광주 남구') == false) {
                                            useCityCountry.push('광주 남구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 남구'), 1);
                                    }}>남구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('광주 북구') == false) {
                                            useCityCountry.push('광주 북구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 북구'), 1);
                                    }}>북구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('광주 광진구') == false) {
                                            useCityCountry.push('광주 광진구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '광주 광진구'), 1);
                                    }}>광진구</a>
                                </>
                                : null
                        }
                        {
                            useCity == '대전' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대전 동구') == false) {
                                            useCityCountry.push('대전 동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 동구'), 1);
                                    }}>동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대전 중구') == false) {
                                            useCityCountry.push('대전 중구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 중구'), 1);
                                    }}>중구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대전 서구') == false) {
                                            useCityCountry.push('대전 서구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 서구'), 1);
                                    }}>서구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대전 유성구') == false) {
                                            useCityCountry.push('대전 유성구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 유성구'), 1);
                                    }}>유성구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('대전 대덕구') == false) {
                                            useCityCountry.push('대전 대덕구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '대전 대덕구'), 1);
                                    }}>대덕구</a>
                                </>
                                : null
                        }
                        {
                            useCity == '울산' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('울산 중구') == false) {
                                            useCityCountry.push('울산 중구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 중구'), 1);
                                    }}>중구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('울산 남구') == false) {
                                            useCityCountry.push('울산 남구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 남구'), 1);
                                    }}>남구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('울산 동구') == false) {
                                            useCityCountry.push('울산 동구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 동구'), 1);
                                    }}>동구</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('울산 북구') == false) {
                                            useCityCountry.push('울산 북구');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '울산 북구'), 1);
                                    }}>북구</a>
                                </>
                                : null
                        }
                        {
                            useCity == '경기' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 수원시') == false) {
                                            useCityCountry.push('경기 수원시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 수원시'), 1);
                                    }}>수원시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 성남시') == false) {
                                            useCityCountry.push('경기 성남시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 성남시'), 1);
                                    }}>성남시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 의정부시') == false) {
                                            useCityCountry.push('경기 의정부시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 의정부시'), 1);
                                    }}>의정부시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 안양시') == false) {
                                            useCityCountry.push('경기 안양시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 안양시'), 1);
                                    }}>안양시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 부천시') == false) {
                                            useCityCountry.push('경기 부천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 부천시'), 1);
                                    }}>부천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 광명시') == false) {
                                            useCityCountry.push('경기 광명시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 광명시'), 1);
                                    }}>광명시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 동두천시') == false) {
                                            useCityCountry.push('경기 동두천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 동두천시'), 1);
                                    }}>동두천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 평택시') == false) {
                                            useCityCountry.push('경기 평택시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 평택시'), 1);
                                    }}>평택시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 안산시') == false) {
                                            useCityCountry.push('경기 안산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 안산시'), 1);
                                    }}>안산시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 고양시') == false) {
                                            useCityCountry.push('경기 고양시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 고양시'), 1);
                                    }}>고양시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 과천시') == false) {
                                            useCityCountry.push('경기 과천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 과천시'), 1);
                                    }}>과천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 구리시') == false) {
                                            useCityCountry.push('경기 구리시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 구리시'), 1);
                                    }}>구리시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 남양주시') == false) {
                                            useCityCountry.push('경기 남양주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 남양주시'), 1);
                                    }}>남양주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 오산시') == false) {
                                            useCityCountry.push('경기 오산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 오산시'), 1);
                                    }}>오산시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 시흥시') == false) {
                                            useCityCountry.push('경기 시흥시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 시흥시'), 1);
                                    }}>시흥시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 군포시') == false) {
                                            useCityCountry.push('경기 군포시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 군포시'), 1);
                                    }}>군포시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 의왕시') == false) {
                                            useCityCountry.push('경기 의왕시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 의왕시'), 1);
                                    }}>의왕시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 하남시') == false) {
                                            useCityCountry.push('경기 하남시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 하남시'), 1);
                                    }}>하남시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 용인시') == false) {
                                            useCityCountry.push('경기 용인시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 용인시'), 1);
                                    }}>용인시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 이천시') == false) {
                                            useCityCountry.push('경기 이천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 이천시'), 1);
                                    }}>이천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 안성시') == false) {
                                            useCityCountry.push('경기 안성시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 안성시'), 1);
                                    }}>안성시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 김포시') == false) {
                                            useCityCountry.push('경기 김포시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 김포시'), 1);
                                    }}>김포시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 화성시') == false) {
                                            useCityCountry.push('경기 화성시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 화성시'), 1);
                                    }}>화성시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 광주시') == false) {
                                            useCityCountry.push('경기 광주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 광주시'), 1);
                                    }}>광주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 양주시') == false) {
                                            useCityCountry.push('경기 양주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 양주시'), 1);
                                    }}>양주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 포천시') == false) {
                                            useCityCountry.push('경기 포천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 포천시'), 1);
                                    }}>포천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경기 여주시') == false) {
                                            useCityCountry.push('경기 여주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경기 여주시'), 1);
                                    }}>여주시</a>
                                </>
                                : null
                        }
                        {
                            useCity == '강원' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('강원 춘천시') == false) {
                                            useCityCountry.push('강원 춘천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 춘천시'), 1);
                                    }}>춘천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('강원 원주시') == false) {
                                            useCityCountry.push('강원 원주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 원주시'), 1);
                                    }}>원주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('강원 강릉시') == false) {
                                            useCityCountry.push('강원 강릉시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 강릉시'), 1);
                                    }}>강릉시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('강원 동해시') == false) {
                                            useCityCountry.push('강원 동해시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 동해시'), 1);
                                    }}>동해시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('강원 태백시') == false) {
                                            useCityCountry.push('강원 태백시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 태백시'), 1);
                                    }}>태백시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('강원 속초시') == false) {
                                            useCityCountry.push('강원 속초시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 속초시'), 1);
                                    }}>속초시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('강원 삼척시') == false) {
                                            useCityCountry.push('강원 삼척시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '강원 삼척시'), 1);
                                    }}>삼척시</a>
                                </>
                                : null
                        }
                        {
                            useCity == '충북' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충북 청주시') == false) {
                                            useCityCountry.push('충북 청주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충북 청주시'), 1);
                                    }}>청주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충북 충주시') == false) {
                                            useCityCountry.push('충북 충주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충북 충주시'), 1);
                                    }}>충주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충북 제천시') == false) {
                                            useCityCountry.push('충북 제천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충북 제천시'), 1);
                                    }}>제천시</a>
                                </>

                                : null
                        }
                        {
                            useCity == '충남' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 천안시') == false) {
                                            useCityCountry.push('충남 천안시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 천안시'), 1);
                                    }}>천안시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 공주시') == false) {
                                            useCityCountry.push('충남 공주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 공주시'), 1);
                                    }}>공주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 보령시') == false) {
                                            useCityCountry.push('충남 보령시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 보령시'), 1);
                                    }}>보령시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 아산시') == false) {
                                            useCityCountry.push('충남 아산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 아산시'), 1);
                                    }}>아산시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 서산시') == false) {
                                            useCityCountry.push('충남 서산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 서산시'), 1);
                                    }}>서산시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 논산시') == false) {
                                            useCityCountry.push('충남 논산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 논산시'), 1);
                                    }}>논산시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 계룡시') == false) {
                                            useCityCountry.push('충남 계룡시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 계룡시'), 1);
                                    }}>계룡시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('충남 당진시') == false) {
                                            useCityCountry.push('충남 당진시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '충남 당진시'), 1);
                                    }}>당진시</a>
                                </>
                                : null
                        }
                        {
                            useCity == '전북' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전북 전주시') == false) {
                                            useCityCountry.push('전북 전주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 전주시'), 1);
                                    }}>전주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전북 군산시') == false) {
                                            useCityCountry.push('전북 군산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 군산시'), 1);
                                    }}>군산시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전북 익산시') == false) {
                                            useCityCountry.push('전북 익산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 익산시'), 1);
                                    }}>익산시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전북 정읍시') == false) {
                                            useCityCountry.push('전북 정읍시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 정읍시'), 1);
                                    }}>정읍시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전북 남원시') == false) {
                                            useCityCountry.push('전북 남원시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 남원시'), 1);
                                    }}>남원시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전북 김제시') == false) {
                                            useCityCountry.push('전북 김제시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전북 김제시'), 1);
                                    }}>김제시</a>
                                </>
                                : null
                        }
                        {
                            useCity == '전남' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전남 목포시') == false) {
                                            useCityCountry.push('전남 목포시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 목포시'), 1);
                                    }}>목포시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전남 여수시') == false) {
                                            useCityCountry.push('전남 여수시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 여수시'), 1);
                                    }}>여수시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전남 순천시') == false) {
                                            useCityCountry.push('전남 순천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 순천시'), 1);
                                    }}>순천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전남 나주시') == false) {
                                            useCityCountry.push('전남 나주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 나주시'), 1);
                                    }}>나주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('전남 광양시') == false) {
                                            useCityCountry.push('전남 광양시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '전남 광양시'), 1);
                                    }}>광양시</a>
                                </>
                                : null
                        }
                        {
                            useCity == '경북' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 포항시') == false) {
                                            useCityCountry.push('경북 포항시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 포항시'), 1);
                                    }}>포항시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 경주시') == false) {
                                            useCityCountry.push('경북 경주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 경주시'), 1);
                                    }}>경주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 김천시') == false) {
                                            useCityCountry.push('경북 김천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 김천시'), 1);
                                    }}>김천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 중안동시구') == false) {
                                            useCityCountry.push('경북 안동시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 안동시'), 1);
                                    }}>안동시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 구미시') == false) {
                                            useCityCountry.push('경북 구미시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 구미시'), 1);
                                    }}>구미시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 영주시') == false) {
                                            useCityCountry.push('경북 영주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 영주시'), 1);
                                    }}>영주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 영천시') == false) {
                                            useCityCountry.push('경북 영천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 영천시'), 1);
                                    }}>영천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 상주시') == false) {
                                            useCityCountry.push('경북 상주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 상주시'), 1);
                                    }}>상주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 문경시') == false) {
                                            useCityCountry.push('경북 문경시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 문경시'), 1);
                                    }}>문경시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경북 경산시') == false) {
                                            useCityCountry.push('경북 경산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경북 경산시'), 1);
                                    }}>경산시</a>
                                </>
                                : null
                        }
                        {
                            useCity == '경남' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 창원시') == false) {
                                            useCityCountry.push('경남 창원시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 창원시'), 1);
                                    }}>창원시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 진주시') == false) {
                                            useCityCountry.push('경남 진주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 진주시'), 1);
                                    }}>진주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 통영시') == false) {
                                            useCityCountry.push('경남 통영시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 통영시'), 1);
                                    }}>통영시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 사천시') == false) {
                                            useCityCountry.push('경남 사천시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 사천시'), 1);
                                    }}>사천시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 김해시') == false) {
                                            useCityCountry.push('경남 김해시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 김해시'), 1);
                                    }}>김해시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 밀양시') == false) {
                                            useCityCountry.push('경남 밀양시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 밀양시'), 1);
                                    }}>밀양시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 거제시') == false) {
                                            useCityCountry.push('경남 거제시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 거제시'), 1);
                                    }}>거제시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('경남 양산시') == false) {
                                            useCityCountry.push('경남 양산시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '경남 양산시'), 1);
                                    }}>양산시</a>
                                </>
                                : null
                        }
                        {
                            useCity == '제주' ?
                                <>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('제주 제주시') == false) {
                                            useCityCountry.push('제주 제주시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '제주 제주시'), 1);
                                    }}>제주시</a>
                                    <a onClick={() => {
                                        if (useCityCountry.includes('제주 서귀포시') == false) {
                                            useCityCountry.push('제주 서귀포시');
                                            setuseCityCountry(useCityCountry);
                                        }
                                        else useCityCountry.splice(useCityCountry.findIndex((item) => item === '제주 서귀포시'), 1);
                                    }}>서귀포시</a>
                                </>
                                : null
                        }
                    </div>
                </div>
            </div>
            <div className={styles.checkskillbox}>
                <h4 style={{ marginTop: '10px', marginRight: '30px' }}>관심 직무</h4>
                <div className={styles.dropdown} onClick={() => {
                    if (useJobShow == false) setUseJobShow(true)
                    else setUseJobShow(false)
                }}>
                    <div style={{ display: 'inline-flex', flexWrap: 'wrap', width: '93%', height: '100%' }}>
                        {JobList.includes('프론트엔드') ? <div className={styles.likeSkillList} onClick={() => { JobList.splice(JobList.findIndex((item) => item === '프론트엔드'), 1); }}>프론트엔드</div> : null}
                        {JobList.includes('백엔드') ? <div className={styles.likeSkillList} onClick={() => { JobList.splice(JobList.findIndex((item) => item === '백엔드'), 1); }}>백엔드</div> : null}
                        {JobList.includes('DevOps') ? <div className={styles.likeSkillList} onClick={() => { JobList.splice(JobList.findIndex((item) => item === 'DevOps'), 1); }}>DevOps</div> : null}
                        {JobList.includes('모바일') ? <div className={styles.likeSkillList} onClick={() => { JobList.splice(JobList.findIndex((item) => item === '모바일'), 1); }}>모바일</div> : null}
                        {JobList.includes('AI/ML') ? <div className={styles.likeSkillList} onClick={() => { JobList.splice(JobList.findIndex((item) => item === 'AI/ML'), 1); }}>AI/ML</div> : null}
                        {JobList.includes('데이터 엔지니어') ? <div className={styles.likeSkillList} onClick={() => { JobList.splice(JobList.findIndex((item) => item === '데이터 엔지니어'), 1); }}>데이터 엔지니어</div> : null}


                    </div>
                    <div className={styles.icon}>
                        <IoIosSearch style={{ width: '35px', height: '35px', marginRight: '10px', marginTop: '10px' }}></IoIosSearch>
                    </div>
                    <div className={styles.dropdownContent} style={useJobShow == true ? { backgroundColor: '#ddd', display: 'block' } : null}>
                        <a onClick={() => {
                            if (JobList.includes('프론트엔드') == false) {
                                JobList.push('프론트엔드');
                                setJobList(JobList);
                            }
                            else JobList.splice(JobList.findIndex((item) => item === '프론트엔드'), 1);
                        }}>프론트엔드</a>
                        <a onClick={() => {
                            if (JobList.includes('백엔드') == false) {
                                JobList.push('백엔드');
                                setJobList(JobList);
                            }
                            else JobList.splice(JobList.findIndex((item) => item === '백엔드'), 1);
                        }}>백엔드</a>
                        <a onClick={() => {
                            if (JobList.includes('DevOps') == false) {
                                JobList.push('DevOps');
                                setJobList(JobList);
                            }
                            else JobList.splice(JobList.findIndex((item) => item === 'DevOps'), 1);
                        }}>DevOps</a>
                        <a onClick={() => {
                            if (JobList.includes('모바일') == false) {
                                JobList.push('모바일');
                                setJobList(JobList);
                            }
                            else JobList.splice(JobList.findIndex((item) => item === '모바일'), 1);
                        }}>모바일</a>
                        <a onClick={() => {
                            if (JobList.includes('AI/ML') == false) {
                                JobList.push('AI/ML');
                                setJobList(JobList);
                            }
                            else JobList.splice(JobList.findIndex((item) => item === 'AI/ML'), 1);
                        }}>AI/ML</a>
                        <a onClick={() => {
                            if (JobList.includes('데이터 엔지니어') == false) {
                                JobList.push('데이터 엔지니어');
                                setJobList(JobList);
                            }
                            else JobList.splice(JobList.findIndex((item) => item === '데이터 엔지니어'), 1);
                        }}>데이터 엔지니어</a>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <button className={styles.saveBtn} onClick={async () => {
                    console.log(skillList);
                    console.log(JobList);
                    console.log(useCityCountry);
                    await axios.post("/user/save/list", { 'socialId': UserInfo.socialId, 'platfomType': UserInfo.platformType, 'userLikeAddress': JSON.stringify(useCityCountry), 'userLikeSkill': JSON.stringify(skillList), 'userLikeJob': JSON.stringify(JobList) }).then((response) => {
                        console.log(response.data);
                        dispatch(setUser({
                            socialId: UserInfo.socialId,
                            platformType: UserInfo.platformType,
                            userLikeAddress: useCityCountry,
                            userLikeSkill: skillList,
                            userLikeJob: JobList,
                        }));
                    }).catch((e) => {
                        console.log(e);
                    })

                }}>저장</button>
                <button className={styles.saveBtn} onClick={() => {
                    setJobList([]);
                    setuseCityCountry([]);
                    dispatch(clearLanguage());
                }}>초기화</button>
            </div>
        </>
    );
}
export default MyLoginPage;