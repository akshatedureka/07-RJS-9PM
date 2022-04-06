import React from "react";
class ErrorBoundry extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        console.log(error);
        return{
            hasError:true
        }
    }



    render(){

        if(this.state.hasError){
            return <h1>Something Went Wrong !</h1>
        }else{
            return this.props.children;
        }

        
    }
}
export default ErrorBoundry;