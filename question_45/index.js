// 45. Cars: 
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
console.log("**********Cars**********");
function carsDetails(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, Object.fromEntries(additionalInfo));
    return car;
}
;
var myCarDetails = carsDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
console.log(myCarDetails);
console.log("********************The End********************");
