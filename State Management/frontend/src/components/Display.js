import React from "react";
import Rating from "./Rating";
function Display(props){
    return(
        <div className="row center">
            {props.products.map((prod)=>(
                <div className="card" key={prod._id}>
                    <img src={prod.image} alt={prod.image} className="medium"></img>
                    <div className="card-body">
                        <h2>{prod.name}</h2>
                        <Rating rating={prod.rating}></Rating>
                        <div className="price">
                            Price {prod.cost}
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}
export default Display;