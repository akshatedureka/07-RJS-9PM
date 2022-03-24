import React from "react";
function Comp2(props){
    return(
        <React.Fragment>
            <h1>{props.key1}</h1>
            <h1>{props.key2}</h1>
            <h1>{props.key3}</h1>
            <h1>{props.children}</h1>
        </React.Fragment>
    )
}
export default Comp2;