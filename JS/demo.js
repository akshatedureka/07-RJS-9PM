console.log("welcome to javascript");
//welcome to javascript

console.table(["Angular14","ReactJS","VueJS","NodeJS","MongoDB"]);
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │ 'Angular14' │
│    1    │  'ReactJS'  │
│    2    │   'VueJS'   │
│    3    │  'NodeJS'   │
│    4    │  'MongoDB'  │
└─────────┴─────────────┘
*/


console.log(10+10);             //20
console.log(10+"10");           //1010
console.log(10+ +"10");         //20
console.log( 10+10+"10" );      //2010
console.log( 10-"10" );         //0
console.log( 10 * "10");        //100
console.log( 10 / "10" );       //1
console.log( 10 / "A" );        //NaN
console.log( 10*"A");           //NaN


//true --> 1
//false --> 0
console.log( true + true );         //2
console.log( true / true );         //1
console.log( 1+true );              //2
console.log( true/false );          //Infinity
console.log( 10>9>8 );              //false
console.log( 1<2<3 );               //true





// == (value)
// === (value with datatype)
console.log( 10 == "10" );      //true
console.log( 10 === "10" );     //false
console.log( 10 == "ten" );     //false
console.log( 10 === "ten" );    //false
console.log( true == "true" );  //false
console.log( true === "true" ); //false
console.log( true == "1" );     //true
console.log( true === "1" );    //false


console.log( 0.1+0.2 );
//0.30000000000000004
console.log( 0.1+0.2 == 0.3 );          //false
console.log( 0.1+0.2 === 0.3 );         //false





// & --  if both are "true" then result is "true"

// | -- if atleast one value is "true" then result is "true"

// ^ -- if both are opposite then result is "true"

console.log( 1 & 1 );               //1
console.log( 1 & 0 );               //0
console.log( 0 & 1 );               //0
console.log( 0 & 0 );               //0


console.log( 1 | 0 );               //1
console.log( 1 | 1 );               //1
console.log( 0 | 1 );               //1
console.log( 0 | 0 );               //0


console.log( 1 ^ 0 );               //1
console.log( 0 ^ 1 );               //1
console.log( 1 ^ 1 );               //0
console.log( 0 ^ 0 );               //0






//BODMAS
//B - Bracket
//O - Of
//D - Division
//M - Multiplication
//A - Addition
//S - Subtractration
console.log( 10-5/5+10 );           //19
console.log( (10-5) / (5+10) );     //0.3333333333333333




























































































