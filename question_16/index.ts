// 16. More Guests:
let guestArray : string[] = ["Sana", "Bisma", "Ali","Dua"];
let bigningGuest : string = "Mirha";
let midArray : string = "Ahmed"
let endGuest : string = "Hina";

// Add guest beginning of array.
guestArray[ guestArray.unshift(bigningGuest)];

// Add guest middle of array.
guestArray.splice(3,0,midArray);

// Add guest end of array.
guestArray.push(endGuest)


for (let i = 0; i < guestArray.length; i++) {
  const element = guestArray[i];
  console.log(`Dear We invited you on dinner tomorrow! ${element}`);
}
