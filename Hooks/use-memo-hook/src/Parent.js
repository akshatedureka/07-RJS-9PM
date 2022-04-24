import React,{useEffect, useState} from "react";
import Child from "./Child";
function Parent(){
    const [num,setNum] = useState(1);

    useEffect(()=>{
        setInterval(()=>{
            setNum(1)
        },1000);
    },[]);


    return(
        <Child key1={num}></Child>
    )
}
export default Parent;