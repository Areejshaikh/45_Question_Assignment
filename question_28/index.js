// 28. Stages of Life: 
var UserAge = 76;
if (UserAge < 2) {
    console.log("The Person is a baby!");
}
else if (UserAge >= 2 && UserAge < 4) {
    console.log("The Person is a toddler!");
}
else if (UserAge >= 4 && UserAge < 13) {
    console.log("The print a message that the person is a kid!");
}
else if (UserAge >= 13 && UserAge < 20) {
    console.log("The print a message that the person is a teenager!");
}
else if (UserAge >= 20 && UserAge < 65) {
    console.log("The print a message that the person is a adult!");
}
else if (UserAge > 65) {
    console.log("The person is an elder!");
}
else {
    console.log("Invalid Age Data");
}
