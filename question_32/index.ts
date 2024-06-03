// 32. Checking Usernames: 

let current_user : string[] = ["Humzah","Ali","Mishal","Maria","Noor"];
let new_user : string[] = ["Anya" ,"Esha" ,"kainat","Tania","Hashir"];

new_user.forEach(new_user =>{

  // we will use some method
  current_user.some((current_user) => current_user.
    toLowerCase() === new_user.toLowerCase())
if (
current_user.some(
(current_user) => current_user.toLowerCase() === new_user.toLowerCase()
)

) {
console.log(`${new_user} will need to enter a new username.`);
} else {

console.log(`${new_user} is available.`);
}
});

