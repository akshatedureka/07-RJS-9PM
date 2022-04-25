import React,{lazy,Suspense} from "react";
import './App.css';

export const Heavy = lazy(()=>import("./Heavy"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className={"fa fa-spinner fa-spin"}></div>}>
          <Heavy></Heavy>
      </Suspense>
    </div>
  );
}

export default App;
