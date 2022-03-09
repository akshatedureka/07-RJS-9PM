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
var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.v1 = arg1;
        this.v2 = arg2;
        this.v3 = arg3;
    }
    return class_one;
}());
;
var obj1 = new class_one("hello_1", "hello_2", "hello_3");
console.log(obj1.v1, obj1.v2, obj1.v3);
var obj2 = new class_one("welcome_1", "welcome_2", "welcome_3");
console.log(obj2.v1, obj2.v2, obj2.v3);
