//array
//collection of "indexed" elements called as "array"
//[]
//index starts from "0"
//we can access array elements with "indexes"

/*
    let arr = [10,20,30,40,50];
    console.log( arr[0], arr[2], arr[4] );                      //10                //30        //50
    console.log( arr[5], arr[-1] );                             //undefined         //undefined
*/


/*
    let arr = [10,20,30,40,50];
    console.log( arr.length );                                      //5

    arr.length = 3;
    console.log( arr[0],arr[2],arr[3],arr[5],arr[100],arr[-100]);   //10 30 undefined undefined undefined undefined
*/


/*
    let arr = [];
    console.log( arr.length );                                          //0

    arr[0] = 10;
    console.log(arr.length);                                            //1


    arr[100] = 1000;
    console.log( arr.length );                                          //101
*/



//push()
//pop()
//unshift()
//shift()
let arr = [20,30,40];
console.log( arr.length );                  //3
console.log( arr );                         //[ 20, 30, 40 ]
arr.push(50);
console.log( arr );                         //[ 20, 30, 40, 50 ]
arr.unshift(10);
console.log( arr );                         //[ 10, 20, 30, 40, 50 ]
arr.pop();
console.log( arr );                        //[ 10, 20, 30, 40 ] 
arr.shift();
console.log(arr);                           //[ 20, 30, 40 ]




















