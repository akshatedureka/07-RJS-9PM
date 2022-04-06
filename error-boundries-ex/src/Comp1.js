import React from "react";
function Comp1(props){
    const {heroName} = props;
    if(heroName === "xyz"){
        return new Error("Not a Hero");
    }
    
    return(
        <React.Fragment>
            <h1>{heroName}</h1>
        </React.Fragment>
    )
}
export default Comp1;