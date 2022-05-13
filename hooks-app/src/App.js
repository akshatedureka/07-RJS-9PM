import React, { Component } from "react";
import Child from "./Child";
class App extends Component{
    state = {
      name : "Hello_2"
    }
    //constructor will execute at "booting time"
    //constructor will execute "only" once
    //in general, we will define state in constructor
    constructor(){
       console.log("parent constructor");
       super();
       this.state = {
          name : "Hello_1"
       } 
    }

    //this life cycle hook will execute after constructor
    //before rendering, we can change the "state" here
    //this life cycle hook, will execute only "once"
    //we can "configure" global parameters here, window width, window height,....
    componentWillMount(){
        console.log("parent componentWillMount");
        if(window.innerWidth<500){
            this.setState({
              innerWidth : window.innerWidth
            })
        }
    }

    my_fun = ()=>{
      this.setState({
        name : "Welcome_1"
      })
    }




    //this hook will execute after componentWillMount
    //this hook is mandatory hook
    //in general, we will place "presentation" logic here
    //Note : never change state in render()
     
    render(){
      console.log("parent render hook");
       return(
        <React.Fragment>
            {this.state.name}
            <br></br>
            Width : {this.state.innerWidth}
            <br></br>
            <Child key1={this.state.name}></Child>
            <br></br>
            <button onClick={this.my_fun}>Change</button>
        </React.Fragment>
      )
    }


    //componentDidMount will execute after "render" hook
    //componentDidMount will execute "only" once
    //componentDidMount is used to place the api calls (side effect data)
    //we can change state here   
    //initially child component componentDidMount() will execute later App Component ComponentDidMount() will execute 
    componentDidMount(){
        console.log("parent componentDidMount");
    }

    componentWillReceiveProps(){
       console.log("parent componentWillReceiveProps");
    }

    shouldComponentUpdate(){
        console.log("parent shouldComponentUpdate");
        return true;
    }




   
}
export default App;