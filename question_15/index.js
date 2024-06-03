// 15. Changing Guest List:
var guestArr = ["Sana", "Bisma", "Ali", "Dua"];
var exitGuest = "Sana";
var newGuest = "Hina";
guestArr[guestArr.indexOf(exitGuest)] = newGuest;
console.log(newGuest);
for (var i = 0; i < guestArr.length; i++) {
    console.log("Respected!we invited you on dinner tomorrow!".concat(guestArr[i], "\nThank You"));
}
