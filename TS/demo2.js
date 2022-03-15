"use strict";
/*
    import { var_one } from "./demo1";
    console.log( var_one );
*/
exports.__esModule = true;
exports.class_one = void 0;
//1) JSON
//2) CLASSES
//JSON IMPLEMENTATION
var obj = {
    var_one: "Hello_1",
    var_two: "Hello_2",
    var_three: "Hello_3",
    fun_one: function () {
        return "Hello_4";
    },
    fun_two: function () {
        return "Hello_5";
    },
    fun_three: function () {
        return "Hello_6";
    }
};
exports["default"] = obj;
//CLASSES IMPLEMENTATION
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
        this.var_two = "Hello_2";
        this.var_three = "Hello_3";
    }
    class_one.prototype.fun_one = function () {
        return "Hello_4";
    };
    class_one.prototype.fun_two = function () {
        return "Hello_5";
    };
    class_one.prototype.fun_three = function () {
        return "Hello_6";
    };
    return class_one;
}());
exports.class_one = class_one;
