//variables are used to store the data
//Ex. string, number, boolean, arrays, objects,......
//we will declare the variables by using var / let / const keywords
//let & const  keywords introduced in ES6 Versions
//variables declaration should contain a-z, A-Z, 0-9, $ and _
//variables should not start with digits
//Syntax
/*
    var/let/const variablename = value;
*/

//string
//collection of "characters" called as "string"
//""(double quotes) , ''(single quoutes) , ``(backtick)
//``(backtick) also called as "template literal"
//``(backtick) operator introduced in "ES6"
//``(backtick) operator used to define the paragraphs (multi line strings)
var wish = "welcome to javascript";
console.log( wish );

var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = `${sub_one}<==>${sub_two}<==>${sub_three}`;
console.log(mern_stack);   //ReactJS<==>NodeJS<==>MongoDB


var table_name = "Employees";
var sal = 50000;
var sql_query1 = `select * from ${table_name} where e_sal>${sal}`;
console.log(sql_query1);
//select * from Employees where e_sal>50000


var uname = "ashokit";
var upwd = "ashokit123";
var sql_query2 = `select * from ${table_name} where uname='${uname}' and upwd='${upwd}'`;
console.log(sql_query2);
//select * from Employees where uname='ashokit' and upwd='ashokit123'



//number
//decimal
//double
//hexadecimal
//octal
//binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal_num = 100;
var double_num = 100.12345;
var hexadecimal_num = 0x123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log( decimal_num, double_num, hexadecimal_num, octal_num, binary_num );
//100 100.12345 1194684 83 10


//boolean
//true / false
var flag = true;
var flag1 = false;
console.log( flag, flag1 );
//true false



var x;
console.log(x);                 //undefined


x = null;
console.log(x);                 //null



































































