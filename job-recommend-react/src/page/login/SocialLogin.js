import { GoogleOAuthProvider, googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import KakaoLogin from "react-kakao-login";
import styles from "./SocialLogin.module.css"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, clearLanguage, setUser } from "../../store/store";

function SocialLogin(props) {
    const clientId = '667126112550-delatng25tbmu1liv0f4kpqok78to0td.apps.googleusercontent.com'
    return (
        <div className={styles.background}>
            <div onClick={() => { if (props.loginModalView == true) props.setLoginModalView(false); else props.setLoginModalView(true) }}>
                <div className={styles.modalBackground}></div>
            </div>
            <div className={styles.modalWrapper}>
                <div className={styles.modalHeader}>소셜 로그인</div>
                <div className={styles.modal}>
                    <GoogleOAuthProvider clientId={clientId}>
                        <LoginPage loginCheck={props.loginCheck} setLoginCheck={props.setLoginCheck} setLoginModalView={props.setLoginModalView} loginModalView={props.loginModalView}></LoginPage>
                    </GoogleOAuthProvider>
                    <div className={styles.Login} style={{ backgroundColor: '#ffeb00' }}><SocialKakao loginCheck={props.loginCheck} setLoginCheck={props.setLoginCheck} setLoginModalView={props.setLoginModalView} loginModalView={props.loginModalView}></SocialKakao></div>
                </div>
            </div>
            <div>
            </div>
        </div>)
}
function LoginPage(props) {
    let dispatch = useDispatch();
    let userShow = useSelector(state => state.LoginUser);
    let all = {};
    let skillList = [];
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            let idToken = tokenResponse.access_token // 인가코드 백엔드로 전달

            const userProfileResponse = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
                headers: { Authorization: `Bearer ${idToken}` }
            });
            console.log(userProfileResponse.data.sub);  // User's email address

            await axios.post("/user/save", {
                'socialId': userProfileResponse.data.sub,
                'platfomType': 'google',
            }).then((response) => {
                // skill_list = response.data;
                console.log(response.data);
                all = response.data;
                dispatch(setUser({
                    socialId: userProfileResponse.data.sub,
                    platformType: 'google',
                    userLikeAddress: JSON.parse(all.userLikeAddress),
                    userLikeSkill: JSON.parse(all.userLikeSkill),
                    userLikeJob: JSON.parse(all.userLikeJob),
                }));
                props.setLoginCheck(true);
                props.setLoginModalView(false);
            }).catch((e) => {
                console.log(e);
            })
            console.log(userShow);
            localStorage.setItem("user", JSON.stringify(userShow));
            skillList = JSON.parse(all.userLikeSkill);
            for (let i = 0; i < skillList.length; i++) {
                dispatch(addSkill(skillList[i]));
            }
        },
    });
    return (
        <div className={styles.Login}>
            <div style={{ textAlign: 'center', marginTop: '35px', fontSize: '20px', fontWeight: 'bold' }} onClick={() => login()}><FcGoogle></FcGoogle> 구글 로그인</div>
        </div>
    );
}



const SocialKakao = (props) => {

    const kakaoClientId = 'b7f6e8738ec96fa09b0c87754fc81d13'
    let dispatch = useDispatch();
    let userShow = useSelector(state => state.LoginUser);
    let skill_list = [];
    const kakaoOnSuccess = async (data) => {
        let idToken = data.response.access_token // 인가코드 백엔드로 전달
        console.log(data.profile.id);
        await axios.post("/user/save", {
            'socialId': data.profile.id,
            'platfomType': 'kakao',
        }).then((response) => {
            console.log(response.data);
            skill_list = response.data;
            dispatch(setUser({
                socialId: data.profile.id,
                platformType: 'kakao',
            }));
            localStorage.setItem("user", JSON.stringify(userShow));
            props.setLoginCheck(true);
            props.setLoginModalView(false);
        }).catch((e) => {
            console.log(e);
        })
        console.log(userShow);
        console.log(skill_list);
        for (let i = 0; i < skill_list.length; i++) {
            dispatch(addSkill(skill_list[i]));
        }
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return (
        <>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFail={kakaoOnFailure}
            ><div className={styles.kakaoLogin}><RiKakaoTalkFill />카카오 로그인</div></KakaoLogin>
        </>
    )
}

export default SocialLogin;