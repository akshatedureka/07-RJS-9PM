/*
    function fun_one(param1){
        console.log( param1() );
    }

    function fun_two(){
        return "Hello";
    }

    fun_one( fun_two );                     //Hello
*/

/*
    function fun_one(param1,param2,param3){
        console.log( param1(), param2(), param3() );
    }
    fun_one( function fun_two(){
        return "Hello_1";
    }, function fun_three(){
        return "Hello_2";
    }, function fun_four(){
        return "Hello_3";
    } );
    //Hello_1 Hello_2 Hello_3
*/




function fun_one(param1,param2,param3){
    console.log( param1(), param2(), param3() );
};
fun_one( ()=>{ return "Hello_1" }, 
         ()=>{ return "Hello_2" }, 
         ()=>{ return "Hello_3" } );
//Hello_1 Hello_2 Hello_3












