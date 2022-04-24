import React,{useEffect, useState} from "react";
function UseStateHook1(){
    const [str,setStr] = useState("Hello");

    useEffect(()=>{
        setTimeout(()=>{
            setStr("Welcome");
        },5000);
    },[]);


    return(
        <React.Fragment>
            {str}
        </React.Fragment>
    )
}
export default UseStateHook1;