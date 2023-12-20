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
