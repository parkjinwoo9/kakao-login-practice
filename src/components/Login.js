import { REDIRECT_URI,REST_API_KEY } from "./KakaoLoginData";

function Login (){
    const handleLogin = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    }
    return(
        <div>
            <button onClick={handleLogin}>카카오로 로그인하기</button>
        </div>
    )
}

export default Login;