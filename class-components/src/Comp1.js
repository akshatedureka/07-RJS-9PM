import React, { Component } from "react";
import Comp2 from "./Comp2";
class Comp1 extends Component{
    constructor(){
        super();
        this.state = {
            num : 0
        }        
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                num : 0
            })
        },1000);     
    }
    render(){
        return(
            <Comp2 key1={this.state.num}></Comp2>
        )
    }
}
export default Comp1;