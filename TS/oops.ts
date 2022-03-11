//classes
//collection of "variables" and "functions" called as "class"
//we will create "classes" by using "class" keyword
//we will create object to the classes with "new" keyword
//we will define constructors with "constructor" keyword
//we will refer current class members with "this" keyword
//TypeScript supports following modifiers
//1) public
//2) private
//3) protected
//private modifier recomended to "variables"
//public modifier recomended to "functions"

/*
    class class_one{
        var_one:string = "ReactJS";
        var_two:string = "NodeJS";
        var_three:string = "MongoDB";
    }

    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );
    //ReactJS NodeJS MongoDB
*/


/*
    class class_one{
        v1:string;
        v2:string;
        v3:string;
        constructor(){
            this.v1 = "Hello_1";
            this.v2 = "Hello_2";
            this.v3 = "Hello_3";
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.v1, obj.v2, obj.v3 );
    //Hello_1 Hello_2 Hello_3
*/


/*
    class class_one{
        sub_one:string;
        sub_two:string;
        sub_three:string;

        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        }

        getSubOne():string{
            return this.sub_one;
        }

        getSubTwo():string{
            return this.sub_two;
        }

        getSubThree():string{
            return this.sub_three;
        }

    }

    let obj:class_one = new class_one();
    console.log( obj.getSubOne(), obj.getSubTwo(), obj.getSubThree() );
    //ReactJS NodeJS MongoDB
*/


/*
    class class_one{
        private vip1:any;
        private vip2:any;
        private vip3:any;
        constructor(){
            this.vip1 = "Narendra Modi";
            this.vip2 = "Putin";
            this.vip3 = "Jalneskey";
        }

        public indiaSecuirity():any{
            return this.vip1;
        }

        public russianSecurity():any{
            return this.vip2;
        }

        public secuirityukarian():any{
            return this.vip3;
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.indiaSecuirity(), obj.russianSecurity(), obj.secuirityukarian() );
    //Narendra Modi Putin Jalneskey
*/

/*
    class class_one{
        v1:any;
        v2:any;
        v3:any;
        constructor(arg1:any,arg2:any,arg3:any){
            this.v1 = arg1;
            this.v2 = arg2;
            this.v3 = arg3;
        }
    };

    let obj1:class_one = new class_one("hello_1","hello_2","hello_3");
    console.log( obj1.v1, obj1.v2, obj1.v3 );
    //hello_1 hello_2 hello_3

    let obj2:class_one = new class_one("welcome_1","welcome_2","welcome_3");
    console.log( obj2.v1, obj2.v2, obj2.v3 );
    //welcome_1 welcome_2 welcome_3
*/

//inheritance
//getting the data from parent class to child class called as inheritance
//"extends" is the keyword used to define the "inheritance"
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hirarichal inheritance
//5) hybrid inheritance

/*
    //single level inheritance
    class Parent{
        var_one:string = "Hello_1";
    }

    class Child extends Parent{
        var_two:string = "Hello_2";
    }

    let obj1:Parent = new Parent();
    console.log( obj1.var_one );                    //Hello_1


    let obj2:Child = new Child();
    console.log( obj2.var_one, obj2.var_two );      //Hello_1 Hello_2


    let obj3:Parent = new Child();
    console.log( obj3.var_one );                    //Hello_1


    //let obj4:Child = new Parent();                //Property 'var_two' is missing in type 'Parent' but required in type 'Child'.
*/


/*
    //multi level inheritance
    class Parent{
        fun_one():any{
            return {"sub_one":"ReactJS"};
        }
    };

    class Child extends Parent{
        fun_two():any{
            return {"sub_two":"NodeJS"}
        }
    };

    class Subchild extends Child{
        fun_three():any{
            return {"sub_three":"MongoDB"}
        }
    }

    let p1:Parent = new Parent();
    console.log( p1.fun_one().sub_one );                                                        //ReactJS

    let c1:Child = new Child();
    console.log( c1.fun_one().sub_one, c1.fun_two().sub_two );                                  //ReactJS NodeJS


    let sc:Subchild = new Subchild();
    console.log( sc.fun_one().sub_one, sc.fun_two().sub_two, sc.fun_three().sub_three );        //ReactJS NodeJS MongoDB
*/


/*
    //multiple inheritance
    class Parent1{}

    class Parent2{}

    class Child extends Parent1,Parent2{}

    //Typescript won't supports multiple inheritance
*/


/*
    //Hirarichal Inheritance
    class Parent{
        var_one:string = "Hello_1";
    };


    class Child1 extends Parent{
        var_two:string = "Hello_2";
    };

    class Child2 extends Parent{
        var_two:string = "Hello_3";
    };

    class Child3 extends Parent{
        var_two:string = "Hello_4";
    };


    let c1:Child1 = new Child1();
    console.log( c1.var_one, c1.var_two );                  //Hello_1 Hello_2


    let c2:Child2 = new Child2();
    console.log( c2.var_one, c2.var_two );                  //Hello_1 Hello_3


    let c3:Child3 = new Child3();
    console.log( c3.var_one, c3.var_two );                  //Hello_1 Hello_4
*/



/*
    class Class_1{

    }

    class Class_2 extends Class_1{

    }

    class Class_3 extends Class_1{

    }

    class Class_4 extends Class_2,Class_3{

    }
*/

//hybrid inheritance not supported by typescript


//polymorphism
//behaves like many called as polymorphism
//1) function overloading
//2) function overriding


/*
    //function overloading
    class class_one{
        fun_one(param1:number,param2:number):void;

        fun_one(param1:string,param2:string):void;

        fun_one(param1:any,param2:any):void{
            return param1+param2;
        }
    }
    let obj1:class_one = new class_one();
    console.log( obj1.fun_one(10,10) );                 //20
    console.log( obj1.fun_one("Hello_1","Hello_2"));    //Hello_1Hello_2
*/

//function overriding
//*******************
//overriding the parent class functionality with child class functionality called as function overriding
class Parent{
    dbFun():string{
        return "data from oracle db soon";
    }
}
class Child extends Parent{
    dbFun(): string {
        return "mongodb data soon";
    }
}

let obj:Child = new Child();
console.log( obj.dbFun() );                     //mongodb data soon



























































































































































































































