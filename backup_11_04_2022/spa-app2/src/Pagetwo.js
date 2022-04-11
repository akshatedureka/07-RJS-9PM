import React from "react";
import { useParams } from "react-router-dom";
function Pagetwo(){
    const {param1,param2,param3} = useParams();
    return(
        <React.Fragment>
            <h1>Pagetwo !!! {param1}....{param2}....{param3}</h1>
        </React.Fragment>
    )
}
export default Pagetwo;