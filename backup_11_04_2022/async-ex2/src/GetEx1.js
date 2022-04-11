import React, { useEffect, useState } from "react";
function GetEx1(){
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        fetch(`https://www.w3schools.com/angular/customers.php`).then(res=>res.json()).then((posRes)=>{
            const {records} = posRes;
            console.log(records);
            setArr(records);
        },(errRes)=>{});
    },[]);


    return(
        <React.Fragment>
            <h1>{JSON.stringify(arr)}</h1>
        </React.Fragment>
    )
}
export default GetEx1;