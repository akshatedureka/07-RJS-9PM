import React from "react";
import Comp2 from "./Comp2";
function Comp1(){
    return(
        <React.Fragment>
            <Comp2 key1={"Hello_1"}
                   key2={"Hello_2"}
                   key3={"Hello_3"}>
                Welcome to AshokIT
            </Comp2>
        </React.Fragment>
    )
}
export default Comp1;