//function
//particular "business logic" called as function
//functions are used to reuse the business logic
//named function
//The function with particular name called as "named" function
/*
    Syntax

    1) function definition

    2) function calling

    function definition
    ********************
    function functionname(param1:datatype, param2:datatype,...... paramn:datatype):returntype{
        //business logic
    }

    function calling
    ****************
    functionname(arg1,arg2,.....arg n);

*/
/*
    function fun_one(param1:string,param2:string,param3:string):void{
        console.log( param1, param2, param3 );
    }
    fun_one("ReactJS","NodeJS","MongoDB");                  //ReactJS NodeJS MongoDB
*/
/*
    function fun_one(param1:any,param2:any,param3:any):any{
        console.log( param1.key1, param2.key1, param3.key1 );
    }
    fun_one( {"key1":"Hello_1"}, {"key1":"Hello_2"}, {"key1":"Hello_3"} );

    //Hello_1 Hello_2 Hello_3
*/
/*
    function fun_one(...param1:any):void{
        console.log( param1 );
    }
    fun_one(10,20);                                         //[ 10, 20 ]
    fun_one("Hello_1","Hello_2","Hello_3");                 //[ 'Hello_1', 'Hello_2', 'Hello_3' ]
    fun_one();                                              //[]
    fun_one(undefined,undefined);                           //[ undefined, undefined ]
    fun_one(undefined,null,undefined);                      //[ undefined, null, undefined ]
*/
/*
    function fun_one(...param1:any,...param2:any){}
    //every function accepting only one rest parameter
*/
/*
    function fun_one(...param2:any,param1:any):any{

    }
    //rest parameter occurance should be the last in parameters
*/
/*
    function fun_one(param1:any,...param2:any):any{
        console.log( param1, param2 );
    };
    //fun_one();                  //Expected at least 1 arguments, but got 0.
    fun_one("Hello_1");           //Hello_1 []
    fun_one("Hello_1","Hello_2"); //Hello_1 [ 'Hello_2' ]
    fun_one(undefined,undefined); //undefined [ undefined ]
    fun_one(null,null);           //null [ null ]
*/
/*
    //default parameters in functions
    //ES6
    function fun_one(param1:any="Hello_1",param2:any="Hello_2",param3:any="Hello_3"):any{
        console.log( param1, param2, param3 );
    }
    fun_one();                                          //Hello_1 Hello_2 Hello_3
    fun_one("Welcome_1","Welcome_2","Welcome_3");       //Welcome_1 Welcome_2 Welcome_3
    fun_one(undefined,undefined,undefined);             //Hello_1 Hello_2 Hello_3
    fun_one(null,null,null);                            //null null null
*/
function fun_one(param1, param2) {
    if (param2 === void 0) { param2 = "Hello_2"; }
    var param3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        param3[_i - 2] = arguments[_i];
    }
    console.log(param1, param2, param3);
}
;
//fun_one();                                    //Expected at least 1 arguments, but got 0.
fun_one("Hello_1"); //Hello_1 Hello_2 []
fun_one("Hello_1", undefined, "Hello_3"); //Hello_1 Hello_2 [ 'Hello_3' ]
fun_one(undefined, undefined, undefined); //undefined Hello_2 [ undefined ]
fun_one(null, null, null); //
