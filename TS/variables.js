//string
//collection of "characters" called as "string"
//""(double quotes), ''(single quotes) and ``(backtick)
//``(backtick) operator also called as template literal
//``(backtick) operator introduced in ES6
//``(backtick) operator used to define the multiline strings (paragraphs)
var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = "".concat(sub_one, "....").concat(sub_two, "....").concat(sub_three);
console.log(mern_stack);
var table_name = "employees";
var sal = 50000;
var sql_query = "select * from ".concat(table_name, " where esal>").concat(sal);
console.log(sql_query);
var u_name = "ashokit";
var u_pwd = "ashokit123";
var login_query = "select * from ".concat(table_name, " where uname='").concat(u_name, "' and upwd='").concat(u_pwd, "'");
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
var decimal_num = 100;
var double_num = 100.12345;
var hexadecimal_num = 0x123ABC;
var octal_num = 83;
var binary_num = 10;
console.log(decimal_num, double_num, hexadecimal_num, octal_num, binary_num);
//100 100.12345 1194684 83 10
//boolean
//true
//false
var flag = true;
var flag1 = false;
console.log(flag);
console.log(flag1);
0 ? console.log("Hello") : console.log("Bye");
var x;
console.log(x); //undefined
x = null;
console.log(x); //null
