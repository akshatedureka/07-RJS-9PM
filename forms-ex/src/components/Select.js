import React from "react";
import {ErrorMessage, Field} from "formik";
import TextEror from "./TextError";
function Select(props){
    const {label,name,options,...rest} = props;
    return(
        <React.Fragment>
            <div className="form-control">
                <label htmlFor={name}>{label}</label>
                <Field as="select" name={name} id={name} {...rest}>
                    {options.map((obj)=>{
                        return <option key={obj.key}>{obj.key}</option>
                    })}
                </Field>
                <ErrorMessage name={name} component={TextEror}></ErrorMessage>
            </div>
        </React.Fragment>
    )
}
export default Select;