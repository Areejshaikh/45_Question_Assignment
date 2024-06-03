// 16. More Guests:
var guestArray = ["Sana", "Bisma", "Ali", "Dua"];
var bigningGuest = "Mirha";
var midArray = "Ahmed";
var endGuest = "Hina";
// Add guest beginning of array.
guestArray[guestArray.unshift(bigningGuest)];
// Add guest middle of array.
guestArray.splice(3, 0, midArray);
// Add guest end of array.
guestArray.push(endGuest);
for (var i = 0; i < guestArray.length; i++) {
    var element = guestArray[i];
    console.log("Dear We invited you on dinner tomorrow! ".concat(element));
}
