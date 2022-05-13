import React, { Component } from "react";
class Child extends Component{
    constructor(props){
        console.log("child class constructor");
        super(props);
    }
    componentWillMount(){
        console.log("child componentWillMount");
    }
    render(){
        console.log("child render hook");
        return(
            <React.Fragment>
                {this.props.key1}
            </React.Fragment>
        )
    }
    componentDidMount(){
        console.log("child componentdidmount");
    }

    componentWillReceiveProps(){
        console.log("child componentWillReceiveProps");
     }

     shouldComponentUpdate(){
        console.log("child shouldComponentUpdate");
        return true;
    }


    componentWillUnmount(){
        
    }





}
export default Child;