
function Home (){
    const moveLogin = () => {
        window.location.href = '/login'
    }

    return(
        <div>
            <h1>홈</h1>
            <button onClick={moveLogin}>로그인</button>
        </div>
    )
}

export default Home;