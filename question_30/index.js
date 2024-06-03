// 30. Hello Admin: 
var user_name = ["Eric", "Admin", "Rose", "joni", "john"];
for (var i = 0; i < user_name.length; i++)
    if (user_name[i] == "Admin") {
        console.log("Would you like to ".concat(user_name[i], " see status report!"));
    }
    else {
        console.log("Hello ".concat(user_name[i], " Thank you for loging Again!"));
    }
