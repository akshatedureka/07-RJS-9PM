/*
  import logo from './logo.svg';
  import './App.css';
  import useCalc from "./hooks/useCalc";

  function App() {
    
    const [count,increment,decrement,reset] = useCalc(0,10);
    
    return (
      <div className="App">
        <h3>Count....{count}</h3>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Decr</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }

  export default App;

*/


/*
  import React,{useState,useEffect} from "react";
  import useCounter from "./hooks/useCounter";
  function App(){
    const [count,setCount] = useState(0);

    useCounter(count);


    return(
      <React.Fragment>
          <button onClick={()=>setCount(count+1)}>Count - {count}</button>
      </React.Fragment>
    )


  }
  export default App;
*/


import React from "react";
import useInput from "./hooks/useInput";

function App(){

    const [uname,unameReset,unameObj] = useInput("");
    const [upwd,upwdReset,upwdObj] = useInput("");

    const my_fun = (event)=>{
      event.preventDefault();
      console.log(uname,upwd);
      unameReset();
      upwdReset();
    }

    return(
        <React.Fragment>
          <form onSubmit={my_fun}>
              <input type="text" name="uname" {...unameObj} />
              <input type="password" name="upwd" {...upwdObj} />
              <input type="submit"></input>
          </form>
        </React.Fragment>
    )
}

export default App;




























