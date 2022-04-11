import React from "react";
import { useParams } from "react-router-dom";
function Pagethree(){
    const {x,y,z} = useParams();
    return(
        <React.Fragment>
            <h1>Pagethree !!!{x}....{y}....{z}</h1>
        </React.Fragment>
    )
}
export default Pagethree;