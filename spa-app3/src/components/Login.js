import React,{useRef} from "react";
import {useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const user_email = useRef("");
    const user_password = useRef("");
    const login = ()=>{
        if(user_email.current.value === "hr@ashokit.in" && user_password.current.value === "ashokit123"){
            navigate("/dashboard?uname=ashokit&upwd=ashokit123");
        }else{
            navigate("/error");
        }
    }
    return(
        <React.Fragment>
            <div>
                <label>Email</label>
                <input ref={user_email} type="email"></input>
            </div>
            <br></br><br></br>
            <div>
                <label>Password</label>
                <input ref={user_password} type="password"></input>
            </div>
            <br></br><br></br>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </React.Fragment>
    )
}
export default Login;