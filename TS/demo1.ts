/*
    export let var_one:string = "Hello_1";
*/




/*
    let var_one:string = "Hello_1";
    export default var_one;
*/

/*
    export let var_one:string = "Hello_1";
    export let var_two:string = "Hello_2";
*/


/*
    let var_one:string = "Hello_1";
    let var_two:string = "Hello_2";
    export {var_one,var_two};
*/


/*
    function my_fun():any{
        return{
            "sub_one" : "ReactJS",
            "sub_two" : "NodeJS",
            "sub_three" : "MongoDB"
        };
    }
    export default my_fun;
*/

/*
    class class_one{
        constructor(public param1:any,
                    public param2:any,
                    public param3:any){}
    }
    export default class_one;
*/


interface interface1{
    var_one:string;
    var_two:string;
    var_three:string;

    fun_one():any;
    fun_two():any;
    fun_three():any;
}
export default interface1;









































