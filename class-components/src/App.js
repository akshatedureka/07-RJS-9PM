import React, { Component } from "react";
class App extends Component{
    constructor(){
        super();
        this.state = {
            strData : "String Data",
            numData : 1000,
            boolData : true,
            arrData : [10,20,30,40,50],
            objData : [{"p_id":111,"p_name":"p_one","p_cost":10000},
                       {"p_id":222,"p_name":"p_two","p_cost":20000},
                       {"p_id":333,"p_name":"p_three","p_cost":30000},
                       {"p_id":444,"p_name":"p_four","p_cost":40000},
                       {"p_id":555,"p_name":"p_five","p_cost":50000}] 
        }
    }
    render() {
      return (
         <React.Fragment>
            <h1>Welcome to class level components</h1>
            {this.state.strData}
            <br></br>
            {this.state.numData}
            <br></br>
            {JSON.stringify(this.state.boolData)}
            <br></br>
            {JSON.stringify(this.state.arrData)}
            <br></br>
            {JSON.stringify(this.state.objData)}
         </React.Fragment>
      );
    }
}
export default App;