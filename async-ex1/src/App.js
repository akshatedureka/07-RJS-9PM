//import useEffect
//useEffect is called as life cycle hook
//useEffect hook used to make the async calls
import React,{useEffect,useState} from "react";

//import axios
import axios from "axios";

function App(){

    const [arr,setArr] = useState([]);


    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
          const {data} = posRes;
          const {records} = data;
          setArr(records);
        },(errRes)=>{
            console.log(errRes);
        });
    },[]);
  
  
    return(
      <React.Fragment>
          <p style={{color:"red"}}>{JSON.stringify(arr)}</p>
      </React.Fragment>
    )
}

export default App;

