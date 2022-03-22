import React,{useState} from "react";

function StateEx1(){
    const [str,setStr] = useState("Hello");
    const [num,setNum] = useState(100);
    const [flag,setFlag] = useState(true);
    const [obj,setObj] = useState({"sub_one":"ReactJS","sub_two":"NodeJS","sub_three":"MongoDB"});
    const [arr,setArr] = useState(["hello_1","hello_2","hello_3","hello_4","hello_5"]);
    const [products,setProducts] = useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
                                             {"p_id":222,"p_name":"p_two","p_cost":20000},
                                             {"p_id":333,"p_name":"p_three","p_cost":30000},
                                             {"p_id":444,"p_name":"p_four","p_cost":40000},
                                             {"p_id":555,"p_name":"p_five","p_cost":50000}])
    return(
        <React.Fragment>
            <h5>String Data....{str}</h5>
            <h5>Number Data....{num}</h5>
            <h5>Boolean Data....{JSON.stringify(flag)}</h5>
            <h5>JSON Object...{JSON.stringify(obj)}</h5>
            {
                arr.map((element,index)=>(
                    <h5 key={index}>{element}</h5>
                ))  
            }
            <hr></hr>
            <table>
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                </tr>
                {
                    products.map((element,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                        </tr>
                    ))
                }
            </table>
        </React.Fragment>
    )
}

export default StateEx1;