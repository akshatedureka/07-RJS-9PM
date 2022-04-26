import React from "react";
function Title(){
    console.log("---title---");
    return(
        <React.Fragment>
            <p>Title</p>
        </React.Fragment>
    )
}
export default React.memo(Title);