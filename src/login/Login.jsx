import './login.css'

function Login(){
    return(
        <>
           <div className="box">
                <div className="heading"> 
                    <h1>Login</h1>
                </div>
                <div className="input-fields">
                    <input type="text" placeholder="Email" className="input" />
                    <input type="password" placeholder="Password" className="input"/>
                </div>
                <div className="button">
                    <button className="btn">Login</button>
                </div>
                <div className="forgot-pass">Forgot password ?</div>
                <p className='acc'>Don't have an account ? <span>Signup</span></p>
           </div>
        </>
    )
}

export default Login