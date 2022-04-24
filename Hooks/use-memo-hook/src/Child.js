import React from "react";

const memoEx = React.memo(function Child(props){
    console.log("Hello");
    return(
        
        <h1>{props.key1}</h1>
    )
});
export default memoEx;