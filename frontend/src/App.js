import React,{useState,useRef} from "react";
import './App.css';
import axios from "axios";
function App() {

  const [result,setResult] = useState("");

  const uname = useRef("");
  const upwd = useRef("");

  const login = ()=>{
    axios.post(`http://localhost:8080/login`,{"uname":uname.current.value,"upwd":upwd.current.value}).then((posRes)=>{
      const {data} = posRes;
      const {login} = data;  
      setResult(login);
    },(errRes)=>{
      console.log(errRes);
    })
  }



  return (
    <div className="App">
        <input type="text" name="uname" ref={uname}></input>

        <br></br><br></br>

        <input type="password" name="upwd" ref={upwd}></input>

        <br></br><br></br>

        <button onClick={login}>Login</button>

        <h1>{result}</h1>
    </div>
  );
}

export default App;
