import { GoogleLogin, GoogleOAuthProvider, googleLogout, useGoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

function SocialLogin() {
    const clientId = '667126112550-delatng25tbmu1liv0f4kpqok78to0td.apps.googleusercontent.com'

    return (<div>
        <div>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin onSuccess={(credentialResponse) => {
                    console.log(jwtDecode(credentialResponse.credential));
                }} onError={() => {
                    console.log('Login Failed');
                }}>
                </GoogleLogin>
                <LoginPage></LoginPage>
            </GoogleOAuthProvider>
        </div>
        <button onClick={() => googleLogout}>로그아웃</button>
    </div>)
}
function LoginPage() {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
        },
    });

    return (
        <div>
            <button onClick={() => login()}>Login with google✌</button>
        </div>
    );
}
export default SocialLogin;