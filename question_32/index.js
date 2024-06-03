// 32. Checking Usernames: 
var current_user = ["Humzah", "Ali", "Mishal", "Maria", "Noor"];
var new_user = ["Anya", "Esha", "kainat", "Tania", "Hashir"];
new_user.forEach(function (new_user) {
    // we will use some method
    current_user.some(function (current_user) { return current_user.
        toLowerCase() === new_user.toLowerCase(); });
    if (current_user.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_user, " is available."));
    }
});
