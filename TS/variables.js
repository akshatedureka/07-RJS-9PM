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
var var1 = "Hello";
var1 = 1000;
console.log(var1);
//1000
var var2 = "global data type";
console.log(var2);
//global data type
var num_arr1 = [100, 200, 300, 400, 500];
var num_arr2 = [600, 700, 800, 900, 1000];
num_arr1.forEach(function (element, index) {
    console.log(element, num_arr2[index]);
});
var str_arr1 = ["Hello_1", "Hello_2", "Hello_3", "Hello_4", "Hello_5"];
var str_arr2 = ["Welcome_1", "Welcome_2", "Welcome_3", "Welcome_4", "Welcome_5"];
str_arr1.forEach(function (element, index) {
    console.log(element, str_arr2[index]);
});
var bool_arr1 = [true, false, true, false, true];
var bool_arr2 = [false, true, false, true, false];
bool_arr1.forEach(function (element, index) {
    console.log(element, bool_arr2[index]);
});
//JSON
//JSON Stands for "Java Script Object Notation"
//JSON also called as JavaScript Objects
//JSON, used to transfer the data over the "Network"
//JSON is "light" weight
//JSON default datatype is "any"
//Objects  --- {}
//Arrays   --- []
//data     --- key & value pairs
//key & value separated by using ":"
var obj = {
    "sub_one": "ReactJS",
    "sub_two": "NodeJS",
    "sub_three": "MongoDB"
};
console.log(obj.sub_one, obj.sub_two, obj.sub_three);
//ReactJS NodeJS MongoDB
var json_array = [
    { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
    { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
    { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
    { "p_id": 555, "p_name": "p_five", "p_cost": 50000 }
];
json_array.forEach(function (element, index) {
    console.log(element.p_id, element.p_name, element.p_cost, index);
});
