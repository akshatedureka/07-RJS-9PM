import React from "react";

function Display(props){
    return(
        <React.Fragment>
            {JSON.stringify(props.products)}
        </React.Fragment>
    )
}
export default Display;