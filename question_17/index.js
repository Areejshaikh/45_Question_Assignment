// 17. Shrinking Guest List:
var shrinkingGuest = ["Mirha", "Sana", "Bisma", "Ahmed", "Ali", "Dua", "Hina"];
var unInvitedGuest1 = shrinkingGuest.pop();
console.log("Sorry ".concat(unInvitedGuest1, " You are not invited for Dinner!\n"));
var unInvitedGuest2 = shrinkingGuest.pop();
console.log("Sorry ".concat(unInvitedGuest2, " You are not invited for Dinner!\n"));
var unInvitedGuest3 = shrinkingGuest.pop();
console.log("Sorry ".concat(unInvitedGuest3, " You are not invited for Dinner!\n"));
var unInvitedGuest4 = shrinkingGuest.pop();
console.log("Sorry ".concat(unInvitedGuest4, " You are not invited for Dinner!\n"));
var unInvitedGuest5 = shrinkingGuest.pop();
console.log("Sorry ".concat(unInvitedGuest5, " You are not invited for Dinner!\n"));
for (var i = 0; i < shrinkingGuest.length; i++) {
    var element = shrinkingGuest[i];
    console.log("".concat(shrinkingGuest, " You are still invited For Dinner Party! To night ").concat(element, " \n"));
}
