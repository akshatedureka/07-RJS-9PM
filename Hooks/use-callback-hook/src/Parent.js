import React,{useCallback, useState} from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function Parent(){
    const [age,setAge] = useState(30);
    const [sal,setSal] = useState(50000);

    const incAge = useCallback(()=>{
        setAge(prevState=>prevState+1);
    },[age]);

    const incSal = useCallback(()=>{
        setSal(prevState=>prevState+10000);
    },[sal]);


    return(
        <React.Fragment>
            <Title></Title>
            <hr></hr>
            <Count text={"Age"} val={age}></Count>
            <Button handleClick={incAge}>Inc Age</Button>
            <hr></hr>
            <Count text={"Sal"} val={sal}></Count>
            <Button handleClick={incSal}>Inc Sal</Button>
        </React.Fragment>
    )


}
export default Parent;