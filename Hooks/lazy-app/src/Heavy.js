import React,{useEffect,useState} from "react";
import axios from "axios";
function Heavy(){
    const [rec,setRec] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.w3schools.com/angular/customers.php`).then((posRes)=>{
            const {data} = posRes;
            const {records} = data;
            setRec(records);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);

    return(
        <React.Fragment>
            
            <table>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {rec.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
                        </tr>
                    )
                })}
            </table>
        </React.Fragment>
    )

}
export default Heavy;