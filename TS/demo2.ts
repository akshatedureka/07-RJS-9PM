/*
    import { var_one } from "./demo1";
    console.log( var_one );
*/


/*
    import var_one from "./demo1";
    console.log( var_one );
*/

/*
    import { var_one,var_two } from "./demo1";
    console.log(var_one, var_two);
*/



/*
    import * as my_var from "./demo1";
    //destructuring
    const {var_one,var_two} = my_var;
    console.log( var_one, var_two );
*/



/*
    import my_fun from "./demo1";
    let obj:any = my_fun();
    const {sub_one,sub_two,sub_three} = obj;
    console.log( sub_one, sub_two, sub_three );
*/


/*
    import class_one from "./demo1";
    let obj:class_one = new class_one("hello_1","hello_2","hello_3");
    console.log( obj.param1, obj.param2, obj.param3 );
*/




import interface1 from "./demo1";
//1) JSON
//2) CLASSES

//JSON IMPLEMENTATION
let obj:interface1 = {
    var_one : "Hello_1",
    var_two : "Hello_2",
    var_three : "Hello_3",
    fun_one : ():any=>{
        return "Hello_4"
    },
    fun_two : ():any=>{
        return "Hello_5"
    },
    fun_three : ():any=>{
        return "Hello_6"
    }
};
export default obj;



//CLASSES IMPLEMENTATION
export class class_one implements interface1{
    var_one: string = "Hello_1";
    var_two: string = "Hello_2";
    var_three: string = "Hello_3";
    fun_one():any {
        return "Hello_4";        
    }
    fun_two():any {
        return "Hello_5"        
    }
    fun_three():any {
        return "Hello_6"        
    }
}






























