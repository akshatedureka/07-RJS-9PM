/*
    //for loop
    for(let i=0;i<5;i++){
        
    }
    console.log(i);             //var:5    //let:ReferenceError: i is not defined
    //var keyword "breaks" the scope rule
    //let keyword "obeys" the scope rule
*/



/*
    //global variable
    let data = 100;

    {
        //local variable
        let data = 200;    
    }

    console.log(data);          //let:100    //var:200

    //var keyword raises the global polluting issue
    //let keyword overcomes the global polluting issue
*/



/*
    console.log( data );
    let data = 100;                 //var:undefined
                                    //let:ReferenceError: Cannot access 'data' before initialization

    //variable hoisting raised because of var keyword
    //we can overcome variable hoisting with the help of let keyword
*/


/*
    let data = 100;
    let data = 200;
    console.log(data);              //var:200   //let:SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate varibles
    //let keyword won't allows the duplicate variables
*/






/*
            var                                 let
    ***************************************************************************************************

    var keyword introduced in ES1           let keyword introduced in ES6

    var keyword used to declare the         let keyword also used to declare the 
    variables                               variables

    var keyword breaks the scope            let keyword obeys the scope rule
    rule

    global polluting issue raised           we can overcome global polluting issue
    because of var keyword                  by using let keyword

    variable hoisting raised because        we can overcome variable hoisting by using let keyword
    of var keyword

    duplicate variables allowed by var      let keyword won't allows the duplicate variables
    keyword

    ****************************************************************************************************
*/



//const
//const is the "keyword"
//const keyword introduced in "ES6"
//const "keyword" used to "declare" the "variables"
//"reinitilization" not possible
const data = 100;
//data = 200;                     //TypeError: Assignment to constant variable.


const arr = [10,20,30,40,50];
//arr = [];                       //TypeError: Assignment to constant variable.
//arr = [100,200,300,400,500];    //TypeError: Assignment to constant variable.


arr[0] = 100;
arr[1] = 200;
arr.push(600);
console.log(arr);               //[ 100, 200, 30, 40, 50, 600 ]


const obj = {
                "sub_one":"Angular14",
                "sub_two":"NodeJS",
                "sub_three":"MongoDB"
            };
//obj = {};                       //TypeError: Assignment to constant variable.

//obj = {"sub_one":"ReactJS","sub_two":"Go","sub_three":"CassandraDB"};
                                //TypeError: Assignment to constant variable.


obj.sub_one = "ReactJS";
obj.sub_two = "Go";
obj.sub_three = "CassandraDB";
console.log(obj);
//{ sub_one: 'ReactJS', sub_two: 'Go', sub_three: 'CassandraDB' }
























































































