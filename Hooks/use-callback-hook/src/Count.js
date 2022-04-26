import React from "react";
function Count({text,val}){
    console.log("----Count----")
    return(
        <React.Fragment>
            <p>{text}....{val}</p>
        </React.Fragment>
    )
}
export default React.memo(Count);