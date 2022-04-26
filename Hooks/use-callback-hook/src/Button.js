import React from "react";
function Button({handleClick,children}){
    console.log("----Button----");
    return(
        <React.Fragment>
            <button onClick={handleClick}>{children}</button>
        </React.Fragment>
    )
}
export default React.memo(Button);