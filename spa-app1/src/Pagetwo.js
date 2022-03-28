import React from "react";
import { Link, Outlet } from "react-router-dom";
function Pagetwo(){
    return(
        <React.Fragment>
            <h1>Pagetwo !!!</h1>
            <Link to="/page_two/child1" style={{marginRight:50}}><b>Child1</b></Link>
            <Link to="/page_two/child2" style={{marginRight:50}}><b>Child2</b></Link>
            <br></br>
            <Outlet />
        </React.Fragment>
    )
}
export default Pagetwo;