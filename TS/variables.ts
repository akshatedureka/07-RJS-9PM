//string
//collection of "characters" called as "string"
//""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator also called as template literal
//``(backtick) operator introduced in ES6
//``(backtick) operator used to define the multiline strings (paragraphs)
var sub_one:string = "ReactJS";
var sub_two:string = "NodeJS";
var sub_three:string = "MongoDB";
var mern_stack:string = `${sub_one}....${sub_two}....${sub_three}`;
console.log(mern_stack);


var table_name:string = "employees";
var sal:number = 50000;
var sql_query:string = `select * from ${table_name} where esal>${sal}`;
console.log( sql_query );


var u_name:string = "ashokit";
var u_pwd:string = "ashokit123";
var login_query:string = `select * from ${table_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log(login_query);


//number
//decimal
//double
//hexadecimal
//octal
//binary
//hexadecimal number prefix with "0x"
//octal number prefix with "0o"
//binary number prefix with "0b"
var decimal_num:number = 100;
var double_num:number = 100.12345;
var hexadecimal_num:number = 0x123ABC;
var octal_num:number = 0o123;
var binary_num:number = 0b1010;
console.log( decimal_num, double_num, hexadecimal_num, octal_num, binary_num );
//100 100.12345 1194684 83 10

//boolean
//true
//false
var flag:boolean = true;
var flag1:boolean = false;
console.log( flag );
console.log( flag1 );
0?console.log("Hello"):console.log("Bye");

var x;
console.log(x);             //undefined


x = null;
console.log(x);             //null












































