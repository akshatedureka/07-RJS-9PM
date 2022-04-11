import React,{useRef,useState} from "react";
import './App.css';
import axios from "axios";

function App() {

  const email = useRef("");
  const password = useRef("");


  const [result,setResult] = useState("");

  const login = ()=>{
      axios.post("http://localhost:8080/login",
                 {"email":email.current.value,"password":password.current.value},
                 {headers:{"token":"reactjs"}}).then((posRes)=>{
                    const {data} = posRes;
                    const { login } = data;
                    setResult(login);
                 },(errRes)=>{
                   console.log(errRes);
                 })
  }



  return (
    <div className="App">
        <input type="text" ref={email}></input>

        <br></br>
        <br></br>
        
        <input type="password" ref={password}></input>

        <br></br>
        <br></br>
        <button onClick={login}>Login</button>

        <br></br>
        <br></br>
        <h1>{result}</h1>
    </div>
  );
}

export default App;
