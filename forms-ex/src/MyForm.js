import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormController from "./components/FormController";

function MyForm(){

    const initialValues = {
        "fname" : "",
        "lname" : "",
        "email" : "",
        "country":""
    };

    const dropdownOptions = [
        {"key":"select value","value":""},
        {"key":"india","value":"india"},
        {"key":"usa","value":"usa"},
        {"key":"canada","value":"canada"},
        {"key":"japan","value":"japan"}
    ];

    const validationSchema = Yup.object({
        "fname" : Yup.string()
                      .required("Required !")
                      .min(3,"Minimum 3 characters are Required !")
                      .max(6,"Maximum 6 characters are Allowed !"),
        "lname" : Yup.string()
                     .required("Required !")
                     .min(3,"Minimum 3 characters are required !")
                     .max(6,"Maximum 6 characters are Allowed !"),
        "email" : Yup.string()
                      .required("Required !")
                      .email("please enter valid email"),
        "country" : Yup.string().required("Required !")
    })

    const onSubmit = (values)=>{
        console.log(values);
    }


    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                (formik)=>{
                    return(
                        <Form>
                            <FormController control="input"
                                            type="text"
                                            name="fname"
                                            label="First Name"></FormController>

                            <FormController control="input"
                                            type="text"
                                            name="lname"
                                            label="Last Name"></FormController>

                            <FormController control="input"
                                            type="email"
                                            name="email"
                                            label="Email"></FormController>

                            <FormController control="select"
                                            name="country"
                                            label="Country"
                                            options={dropdownOptions}></FormController>

                            <button type="submit" disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default MyForm;