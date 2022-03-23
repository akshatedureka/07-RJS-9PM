import React,{useState} from "react";
import Second from "./Second";
function First(){
    const [str,setStr] = useState("AshokIT");
    const [num,setNum] = useState(1000);
    const [flag,setFlag] = useState(true);
    const [obj,setObj] = useState({"sub_one":"ReactJS",
                                    "sub_two":"NodeJS",
                                    "sub_three":"MongoDB"});
    const [products,setProducts] = useState([{"p_id":"p101","p_name":"shirt1","p_cost":"$100.00","p_image":"https://redux-bucket.s3.amazonaws.com/shirt1.jpg"},
                                             {"p_id":"p102","p_name":"shirt2","p_cost":"$200.00","p_image":"https://redux-bucket.s3.amazonaws.com/shirt2.jpg"},
                                             {"p_id":"p103","p_name":"shirt3","p_cost":"$300.00","p_image":"https://redux-bucket.s3.amazonaws.com/shirt3.jpg"},
                                             {"p_id":"p104","p_name":"pant1","p_cost":"$400.00","p_image":"https://redux-bucket.s3.amazonaws.com/pant1.jpg"},
                                             {"p_id":"p105","p_name":"pant2","p_cost":"$500.00","p_image":"https://redux-bucket.s3.amazonaws.com/pant2.jpg"},
                                             {"p_id":"p106","p_name":"pant3","p_cost":"$600.00","p_image":"https://redux-bucket.s3.amazonaws.com/pant3.jpg"}]);
    return(
        <React.Fragment>
            <Second str={str}
                    num={num}
                    flag={flag}
                    obj={obj}
                    products={products}></Second>
        </React.Fragment>
    )
}
export default First;
