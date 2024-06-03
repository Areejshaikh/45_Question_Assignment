var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 43. Unchanged Magicians: 
console.log("****************Unchanged Magicians*****************");
var changeMagician = ["Ayaz", "Fayaz", "Tariq", "Madad"];
var copyMagician = __spreadArray([], changeMagician, true);
function show_magic(greet) {
    var withGreetings = "";
    for (var _i = 0, changeMagician_1 = changeMagician; _i < changeMagician_1.length; _i++) {
        var item = changeMagician_1[_i];
        withGreetings += "".concat(greet, " ").concat(item, "\n");
    }
    return withGreetings;
}
;
var myGreetings = show_magic("Hello");
var makeArray = myGreetings.split("\n");
console.log(makeArray);
console.log(changeMagician);
