import React,{useRef, useState} from "react";
import axios from "axios";
function PostEx(){
    const inputRef = useRef("");
    const [res,setRes] = useState("");
    const myFun = ()=>{
        axios.post(`http://test-routes.herokuapp.com/test/uppercase`,{"message":inputRef.current.value}).then((posRes)=>{
            const {data} = posRes;
            const {message} = data;
            setRes(message);
        },(errRes)=>{
            console.log(errRes);
        })
    };
    return(
        <React.Fragment>
            <input type="text" ref={inputRef}></input>
            <button onClick={myFun}>Send</button>
            <h1>{res}</h1>
        </React.Fragment>
    )
}
export default PostEx;