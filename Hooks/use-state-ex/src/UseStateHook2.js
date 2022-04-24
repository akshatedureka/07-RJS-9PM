import React,{useState} from "react";
function UseStateHook2(){
    const [num,setNum] = useState(0);

    const myFun1 = ()=>{
        setNum( prevState => prevState+1 );
    };

    const myFun2 = ()=>{
        setNum( prevState => prevState-1 );
    }


    return(
        <React.Fragment>
            {num}
            <br></br><br></br>
            <button onClick={myFun1}> + </button>
            <button onClick={myFun2}> - </button>
        </React.Fragment>
    )
}
export default UseStateHook2;