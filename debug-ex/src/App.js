import React,{useState} from "react";
import './App.css';

function App() {

  const [employee,setEmployee] = useState([
      {"id":111,"name":"eone","esal":10000},
      {"id":222,"name":"etwo","esal":20000}
  ]);


  const myFun = ()=>{
      const emp = [...employee];
      emp.splice(5,1);
      setEmployee(emp);
  }





  return (

    <div className="App">
        {JSON.stringify(employee)}
        <br></br>
        <button onClick={myFun}>Delete</button>
    </div>
  );
}

export default App;
