// 15. Changing Guest List:
let guestArr : string[] = ["Sana", "Bisma", "Ali","Dua"];
let exitGuest : string = "Sana";

let newGuest : string = "Hina";
guestArr [guestArr.indexOf(exitGuest)] = newGuest;

console.log(newGuest);
for (let i = 0; i < guestArr.length; i++) {
console.log(`Respected!we invited you on dinner tomorrow!${guestArr[i]}\nThank You`);
}
