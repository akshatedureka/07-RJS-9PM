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

/*
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
*/


/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        })
    );
    //[ 100, 200, 300, 400, 500 ]


console.log(
    [100,200,300,400,500].map((element,index)=>{
        return element/10;
    })
);      //[ 10, 20, 30, 40, 50 ]



console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element == 1 || element == 5 ? "Hello" : "welcome"
    })
);

//[ 'Hello', 'welcome', 'welcome', 'welcome', 'Hello' ]
*/


/*
    console.log(
        [100,200,300,400,500].filter((element,index)=>{
            return element>=300;
        })
    );          
    //[ 300, 400, 500 ]



console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=200;
    })
);
//[ 100, 200 ]
*/


/*
console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement + nextElement;
    })
);
//15



console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=300;
    }).reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    },5000)
);
//5600
*/

/*
    //reverse()
    //reverse() function used to reverse the array elements
    let arr1 = [10,20,30,40,50];
    console.log( arr1.reverse() );  
    //[ 50, 40, 30, 20, 10 ]


    let arr2 = ["Angular14","ReactJS","NodeJS","VueJS","MongoDB"];
    console.log( arr2.reverse() );
    //[ 'MongoDB', 'VueJS', 'NodeJS', 'ReactJS', 'Angular14' ]


    console.log(
        "Hello".split("").reverse().join("")
    );

    //[ 'H', 'e', 'l', 'l', 'o' ]
    //[ 'o', 'l', 'l', 'e', 'H' ]
    //olleH
*/



/*
let arr1 = ["Angular14","ReactJS","NodeJS","VueJS","MongoDB"];
//["41ralugnA","SJtcaeR","SJedoN","SJeuV","BDognoM"]
console.log(
    arr1.map((element,index)=>{
        return element.split("").reverse().join("")
    })
);
console.log(
    arr1.map((element,index)=>{
        return element === "NodeJS" ? element.split("").reverse().join("") : element
    })
);
*/


/*
    //...
    //spread operator
    let arr1 = ["Angular14"];
    let arr2 = ["NodeJS"];
    let arr3 = ["MongoDB"];
    let arr4 = [...arr1,...arr2,...arr3];
    console.log(arr4);      //[ 'Angular14', 'NodeJS', 'MongoDB' ]




    let father = ["1cr"];
    let child = [...father,"1kg gold"];
    let grand_child = [...child,"1kg silver"];
    console.log( grand_child );     //[ '1cr', '1kg gold', '1kg silver' ]            
*/




let arr = [10,20,30,10,20,30];
//indexOf()
//it won't create indexes to repeated elements

// arr.forEach((element,index)=>{
//     console.log( arr.indexOf(element) );
// })

console.log(
    arr.filter((element,index)=>{
        return arr.indexOf(element) === index;
    })
);      //[ 10, 20, 30 ]


































































































































































































































































































































