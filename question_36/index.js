// 36. T-Shirt: 
function make_shirts(size, message) {
    return size + message;
}
var shirtOutput = make_shirts("medium", " And This is my favorite Shirt");
console.log(shirtOutput);
var makeShirts = function (size, message) {
    return size + message;
};
var output = makeShirts("medium ", " And This is my favorite Shirt");
console.log(output);
