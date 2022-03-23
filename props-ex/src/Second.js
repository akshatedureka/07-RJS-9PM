import React from "react";
function Second(props){
    return(
        <React.Fragment>
            <h5>String..... {props.str}</h5>
            <h5>Number..... {props.num}</h5>
            <h5>Boolean.... {JSON.stringify(props.flag)}</h5>
            <h5>Object..... {JSON.stringify(props.obj)}</h5>
            <hr></hr>
            <table>
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                    <th>P_IMAGE</th>
                </tr>
                {props.products.map((element,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_cost}</td>
                        <td><img width="50" src={element.p_image}></img></td>
                    </tr>
                ))}
            </table>
        </React.Fragment>
    )
};
export default Second;