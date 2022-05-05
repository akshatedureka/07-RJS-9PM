import React, { Component, PureComponent } from "react";
class Comp2 extends PureComponent{

    //PureComponent stops the re rendering of components without changes detected in props
    constructor(props){
        super(props);
    }
    render(){
        console.log("Hello");
        return(
            <h1>{this.props.key1}</h1>
        )
    }
}
export default Comp2;