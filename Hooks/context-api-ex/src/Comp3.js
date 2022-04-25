import React,{useContext} from "react";
import { globalSpace1 } from "./context/global1";
import { globalSpace2 } from "./context/global2";



function Comp3(){
    const name = useContext(globalSpace1);
    const {key1,key2} = useContext(globalSpace2);
    return(
        <React.Fragment>
            {name}
            <br></br>
            {key1}....{key2}
        </React.Fragment>
    )
}
export default Comp3;