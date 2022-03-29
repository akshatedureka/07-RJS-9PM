import React from "react";
import { useParams } from "react-router-dom";
function Pageone(){
    const {var1,var2,var3} = useParams();
    return(
        <React.Fragment>
            <h1>Pageone !!! {var1}....{var2}....{var3}</h1>
        </React.Fragment>
    )
}
export default Pageone;