// 31. No Users: 

console.log("*".repeat(50));
let checkUser :string[] = ["Eric","Admin","Rose","joni","john"];
//  checkUser = []
// console.log(` Empty Array ${empty}`);

if (checkUser.length > 0) {

  for (let i = 0; i < checkUser.length; i++) {

    if (checkUser[i] == "Admin") {

      console.log(`\n Would You like yo see ${checkUser[i]} status report!\n`)
    }else {
      console.log(`Hello ${checkUser[i]} Thank you for loging Again!`)
    }
  }
} else {
  console.log("we need to find sone user")
}
