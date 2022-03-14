//modifiers
//typescript supports following modifiers
//1) public
//2) private
//3) protected
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//public
//public modifier applicable to "variables", "functions" and "constructor"
//public members we can access by using class "objects"
//public members by default available to "child" classes
//recomended modifier to "functions" is "public"
/*
    class class_one{
        public var_one:string = "Hello_1";
        public constructor(){

        }
        public fun_one():string{
            return "Hello_2";
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.var_one, obj.fun_one() );
    //Hello_1 Hello_2
*/
/*
    class class_one{
        public var_one:string = "Hello_1";
        public fun_one():string{
            return "Hello_2";
        }
    }
    class class_two extends class_one{

    }
    let obj:class_two = new class_two();
    console.log(
        obj.var_one,
        obj.fun_one()
    );
    //Hello_1 Hello_2
*/
//private
//private modifier applicable to "variables","functions" and "constructor"
//private members we can't access by using class "objects"
//private members won't accessable to "child" classes
//we can't create object to private constructor class
//recomended modifier for variables is "private"
/*
    class class_one{
        private constructor(){}
    }
    new class_one();
    //Constructor of class 'class_one' is private and only accessible within the class declaration.
*/
/*
    class class_one{
        private var_one:string = 'Hello';
        private fun_one():string{
            return "welcome";
        }
    };
    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
    obj.fun_one();
    //Property 'fun_one' is private and only accessible within class 'class_one'.
*/
/*
    class class_one{
        private var_one:string = "Hello_1";
    }
    class class_two extends class_one{}

    let obj:class_two = new class_two();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/
//protected
//1) protected modifier applicable to "variables","functions" and "constructor"
//2) we can't create object to protected "constructor" class
//3) we can't access protected members by class "objects"
//4) protected members by default accessable to child classes
/*
    class class_one{
        protected constructor(){}
    }
    new class_one();
    //Constructor of class 'class_one' is protected and only accessible within the class declaration.
*/
/*
    class class_one{
        protected var_one:string = "Hello_1";
        protected fun_one():string{
            return "Hello_2";
        }
    }
    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
    obj.fun_one();
    //Property 'fun_one' is protected and only accessible within class 'class_one' and its subclasses.

*/
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
    }
    return class_one;
}());
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = _this.var_one;
        return _this;
    }
    return class_two;
}(class_one));
var obj = new class_two();
console.log(obj.var_two);
