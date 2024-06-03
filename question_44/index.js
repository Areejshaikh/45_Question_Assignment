// 44. Sandwiches:
console.log("***************Sandwiches****************");
function sandwiche() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "i Want sandwiches of ".concat(items, " !");
}
var collection1 = sandwiche("Cheeze", "Lettuce", "Double Cheeze");
var collection2 = sandwiche("Turkey", "Swiss");
var collection3 = sandwiche();
console.log(collection1);
console.log(collection2);
console.log(collection3);
