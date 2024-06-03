// 31. No Users: 
console.log("*".repeat(50));
var checkUser = ["Eric", "Admin", "Rose", "joni", "john"];
//  checkUser = []
// console.log(` Empty Array ${empty}`);
if (checkUser.length > 0) {
    for (var i = 0; i < checkUser.length; i++) {
        if (checkUser[i] == "Admin") {
            console.log("\n Would You like yo see ".concat(checkUser[i], " status report!\n"));
        }
        else {
            console.log("Hello ".concat(checkUser[i], " Thank you for loging Again!"));
        }
    }
}
else {
    console.log("we need to find sone user");
}
