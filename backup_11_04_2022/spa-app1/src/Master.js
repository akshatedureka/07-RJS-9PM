import React from "react";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import Childone from "./Childone";
import Childtwo from "./Childtwo";

//import BrowserRouter
//BrowserRouter used to encapsulate the Single Page Applications

//import Routes
//Routes, used to encapsulate the Routings


//import Route
//Route used to implement the Route in Single Page Applications
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Master(){
    return(
        <BrowserRouter>
            <Link to="/" style={{marginRight:100}}><b>Page_One</b></Link>
            <Link to="/page_two" style={{marginRight:100}}><b>Page_Two</b></Link>
            <Link to="/page_three"><b>Page_Three</b></Link>

            <br></br><br></br>
            <Routes>
                <Route path="/" element={<Pageone />} />
                <Route path="page_two" element={<Pagetwo />}>
                    <Route path="child1" element={<Childone />}/>
                    <Route path="child2" element={<Childtwo />}/>
                </Route>



                <Route path="/page_three" element={<Pagethree />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Master;


