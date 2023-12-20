var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Example: Generic Type Object
/*
const addUID = <T>(obj: T) => {
   let uid = Math.floor(Math.random() * 100);
   return {...obj, uid};
 }
*/
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doc1 = addUID({ name: "adam", age: 40 });
//let doc2 = addUID('Jack');
console.log({ doc1: doc1 });
// -----------------------------------------------
// Example: Generic Type Array
var reverse = function (arr) {
    return arr.reverse();
};
var reversedNumber = reverse([1, 2, 3, 4, 5]);
var reversedString = reverse(["a", "b", "c", "d", "e"]);
console.log({ reversedNumber: reversedNumber });
console.log({ reversedString: reversedString });
// -----------------------------------------------
// Example: Generic Type number | string
var sum = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b);
    }
    else if (typeof a === "string" && typeof b === "string") {
        return (a + b);
    }
    else {
        throw new Error("Invalid argument types");
    }
};
var result1 = sum(1, 2);
var result2 = sum("Hello, ", "world");
// -----------------------------------------------
// Example: Generic Type And Name not sent, generic type
var getFirst = function (arr) {
    return arr[0];
};
var a = getFirst([1, 2, 3]); //  a: number เพราะ [1,2,3] เป็น number[] ทำให้ T = number
var b = getFirst(["One", "Two", "Three", "Four", "Five"]); //  b: string เพราะ argument เป็น string[] ทำให้ T = string
// -----------------------------------------------
// Example: Generic Multiple Types
var map = function (arr, func) {
    return arr.map(func);
};
var input = ["4", "5", "6"];
map(input, function (s) { return parseInt(s); }); // [4, 5, 6]
var doc3 = {
    uid: 1,
    resourceName: "person",
    data: "adam",
};
var doc4 = {
    uid: 1,
    resourceName: "person",
    data: ["cola", "pepsi"],
};
// -----------------------------------------------
// Example: Generic Types In Class
var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    Box.prototype.getValue = function () {
        return this.content;
    };
    return Box;
}());
var numberBox = new Box(42);
var stringBox = new Box("Hello generics!");
console.log({ numberBox: numberBox });
console.log({ stringBox: stringBox });
// -----------------------------------------------
// Example: Generic Types In Class
var Box = /** @class */ (function () {
    function Box(value) {
        this.content = value;
    }
    Box.prototype.getValue = function () {
        return this.content;
    };
    return Box;
}());
var numberBox = new Box(42);
var stringBox = new Box("Hello generics!");
console.log({ numberBox: numberBox });
console.log({ stringBox: stringBox });
// -----------------------------------------------
// Example: Generic Multiple Types In Class
var Box2 = /** @class */ (function () {
    function Box2(content, content2, content3) {
        this.content = content;
        this.content2 = content2;
        this.content3 = content3;
    }
    Box2.prototype.getValue = function () {
        console.log(this.content);
        console.log(this.content2);
        console.log(this.content3);
    };
    return Box2;
}());
var testBox2 = new Box2(42, "Hello", true);
