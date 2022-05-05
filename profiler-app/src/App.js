import React,{Profiler} from "react";
import './App.css';
import Child from "./Child";

function App() {

  const my_fun = (id,phase,startTime,endTime,x,y,z)=>{
      console.log(id,phase,startTime,endTime);
  }


  return (
    <div className="App">
      <Profiler id="child" onRender={my_fun}>
        <Child key1={"welcome to profiler concept"}></Child>
      </Profiler>
    </div>
  );
}

export default App;
