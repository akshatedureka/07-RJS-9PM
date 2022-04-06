import React from "react";
import Comp1 from "./Comp1";
import ErrorBoundry from "./ErrorBoundry";
class App extends React.Component{
    render(){
       return(
         <React.Fragment>
            <ErrorBoundry> <Comp1 heroName="ReactJS"></Comp1> </ErrorBoundry>
            
            <ErrorBoundry>
               <Comp1 heroName="Angular14"></Comp1>
            </ErrorBoundry>
            
            <ErrorBoundry>
               <Comp1 heroName="xyz"></Comp1>
            </ErrorBoundry>
         </React.Fragment>
       )
    }
};
export default App;
