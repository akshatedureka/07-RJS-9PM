import React from "react";
function MessageBox(props){
    return(
        <React.Fragment>
            <div className="error">
                {props.children}
            </div>
        </React.Fragment>
    )
}
export default MessageBox;