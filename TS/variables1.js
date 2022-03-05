//let is the keyword
//let keyword introduced in ES6
//let keyword used to declare the variables

/*
    for(let i=0;i<5;i++){
    }
    console.log(i);             //var:5   //let:ReferenceError: i is not defined
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/



/*
    //global variable
    let data = 100;
    //block
    {
        //local variable
        let data = 200;  
    }
    console.log(data);          //var:200    let:100
    //block of code effecting the global members because of var keyword
    //above effect called as "global polluting issue"
    //global polluting issue raised because of var keyword
    //we can overcome global polluting issue by using "let" keyword
*/
/*
    let data = 100;
    let data = 200;
    console.log(data);          //var:200   let:SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/


//1) declare variable
//2) initilize the variable
//3) access the variable
console.log(data);              //var:undefined
let data = 100;                 //let:ReferenceError: Cannot access 'data' before initialization
//"variable hoisting" issue raised because of var keyword
//we can overcome "variable hoisting" by using let keyword


/*
            var                             let
    var keyword introduced in           let keyword introduced in ES6
    ES1   
    
    global polluting issue raised       we can overcome global polluting issue by using
    because of var keyword              let keyword

    duplicate variables allowed         let keyword won't allows the duplicate variables
    by var keyword

    variable hoisting issue raised      we can overcome variable hoisting issue by using            
    because of var keyword              let keyword


    scope rule break by var             scope rule obey by let keyword 
    keyword

*/












































