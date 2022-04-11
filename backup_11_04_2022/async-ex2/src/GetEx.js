import React, { useEffect, useState } from "react";
import axios from "axios";
function GetEx(){
    const [res,setRes] = useState({});
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then((posRes)=>{
            const {data} = posRes;
            setRes(data);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);


    return(
        <React.Fragment>
            <h1>{JSON.stringify(res)}</h1>
        </React.Fragment>
    )
}
export default GetEx;