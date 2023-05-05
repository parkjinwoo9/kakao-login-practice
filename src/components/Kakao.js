import { useEffect } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { REDIRECT_URI,REST_API_KEY } from './KakaoLoginData';

function Kakao (){
    useEffect(()=>{
        console.log(window.location)
        const search = window.location.search;
        const queryObj = queryString.parse(search);
        console.log(queryObj);
        const code = queryObj.code;
        getKakaoToken(code);
    },[])
    
    const getKakaoToken = async(KAKAO_CODE) => {
        console.log('getKakaoToken')
        console.log(KAKAO_CODE);
        console.log(REDIRECT_URI);
        console.log(REST_API_KEY);
        axios({
            method:'post',
            url:`/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
            header:{'Content-type':'application/x-www-form-urlencoded;charset=utf-8'}
        }).then(
            response=>{
                console.log('getKakaoToken then')
                console.log(response)
                console.log(response.data.access_token)
                getUserInfo()
            }
        ) 
    }
    const getUserInfo = () => {
        console.log('getUserInfo')
        const token = sessionStorage.getItem('token')
        axios({
            url:'/v2/user/me',
            method:'get',
            header:{'Authorization': `Bearer ${token}`}
        }).then(
            data=>{
                console.log('getKakaoToken')
                console.log(data)
            }
        )
    }
    return(
        <div className = 'kakao'>
            <h1>카카오인증받는페이지</h1>
        </div>
    )
}

export default Kakao