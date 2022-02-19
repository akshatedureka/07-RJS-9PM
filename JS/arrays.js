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



/*
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
*/


/*
    //delete
    //deletes the element at particular index
    //delete property never releses the memory of deleted element
    let arr = [10,20,30,40,50];
    console.log( arr.length );                      //5
    delete arr[0];
    console.log( arr.length );                     //5
    console.log(arr);                               //[ <1 empty item>, 20, 30, 40, 50 ]
    delete arr[4];
    console.log( arr.length );                      //5
    console.log( arr );                             //[ <1 empty item>, 20, 30, 40, <1 empty item> ]                  
*/



/*
    //splice()
    //it is used to add/remove the element at any index
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.splice(4,3);
    console.log( arr1 );                //[10,20,30,70,80,90,100]


    arr1.splice(6,1);
    console.log( arr1 );                //[ 10, 20, 30, 40, 80, 90 ]


    arr1.splice(0,1);
    console.log( arr1 );                //[ 20, 30, 40, 80, 90 ]


    arr1.splice(1,1);
    console.log( arr1 );                //[ 20, 40, 80, 90 ]


    arr1.splice(2,0,50,60,70);;
    console.log(arr1);                  //[20, 40, 50, 60,  70, 80, 90]


    arr1.splice(1,1,30,40);
    console.log( arr1 );                //[ 20, 30, 40, 50, 60, 70, 80, 90 ] 


    arr1.splice(0,0,10);
    console.log( arr1 );                //[ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]


    arr1.splice(9,0,100);
    console.log( arr1 );                //[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
*/

//findIndex()
let arr = [10,20,30,40,50,60,70,80,90,100];

console.log(
    arr.findIndex((element,index)=>{
        return element == 50;
    })
);          //4


console.log(
    arr.findIndex((element,index)=>{
        return element == 80;
    })
);      //7


console.log(
    arr.findIndex((element,index)=>{
        return element == 1000;
    })
);          //-1

arr.splice(arr.findIndex((element,index)=>{
    return element == 50;
}),1);
console.log( arr );


arr.splice( arr.findIndex((element,index)=>{
    return element == 90;
}), 1);
console.log( arr );























































































































