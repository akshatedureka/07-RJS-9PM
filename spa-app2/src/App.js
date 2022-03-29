import React,{useEffect, useState} from "react";
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";

function App() {
  const [pid,setPid] = useState(333);
  const [pname,setPname] = useState("p_three");
  const [pcost,setPcost] = useState(30000);

  useEffect(()=>{
    
  },[]);


  return (
    <div className="App">
        <BrowserRouter>
            <Link to="/page_one/111/p_one/10000" style={{marginRight:100}}>Pageone</Link>
            <Link to="/page_two/222/p_two/20000" style={{marginRight:100}}>Pagetwo</Link>
            <Link to={`/page_three/${pid}/${pname}/${pcost}`}>Pagethree</Link>
            <br></br>
            <Routes>
                <Route path="/page_one/:var1/:var2/:var3" element={<Pageone />}></Route>
                <Route path="/page_two/:param1/:param2/:param3" element={<Pagetwo />}></Route>
                <Route path="/page_three/:x/:y/:z" element={<Pagethree />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
