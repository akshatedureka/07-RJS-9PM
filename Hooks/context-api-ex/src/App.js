import React from "react";
import './App.css';
import Comp1 from "./Comp1";

import { globalSpace1 } from "./context/global1";
import { globalSpace2 } from "./context/global2";


function App() {


  return (
    <div className="App">
        <globalSpace1.Provider value="HooksExample">
            <globalSpace2.Provider value={{key1:"Hello_1",key2:"Hello_2"}}>
                <Comp1></Comp1>
            </globalSpace2.Provider>
        </globalSpace1.Provider>
    </div>
  );
}

export default App;
