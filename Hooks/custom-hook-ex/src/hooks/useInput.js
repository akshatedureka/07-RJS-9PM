import {useState} from "react";

function useInput(data){
    const [value,setValue] = useState(data);

    const reset = ()=>{
        setValue(value);
    }

    const obj = {
        value,
        onChange : e=>{
            setValue(e.target.value);
        }
    }

    return [value,reset,obj];

}

export default useInput;