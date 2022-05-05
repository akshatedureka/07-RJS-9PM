import React from "react";
import Input from "./Input";
import Select from "./Select";
function FormController(props){
    const {control,...rest} = props;
    switch(control){
        case "input":
            return <Input {...rest}></Input>
        case "select":
            return <Select {...rest}></Select>
    }
}

export default FormController;