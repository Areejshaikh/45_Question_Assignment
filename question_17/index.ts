// 17. Shrinking Guest List:
let shrinkingGuest : string[] = ["Mirha","Sana", "Bisma","Ahmed", "Ali","Dua","Hina"];
let unInvitedGuest1 = shrinkingGuest.pop()
console.log(`Sorry ${unInvitedGuest1} You are not invited for Dinner!\n`);

let unInvitedGuest2 = shrinkingGuest.pop()
console.log(`Sorry ${unInvitedGuest2} You are not invited for Dinner!\n`);

let unInvitedGuest3 = shrinkingGuest.pop()
console.log(`Sorry ${unInvitedGuest3} You are not invited for Dinner!\n`);

let unInvitedGuest4 = shrinkingGuest.pop()
console.log(`Sorry ${unInvitedGuest4} You are not invited for Dinner!\n`);

let unInvitedGuest5 = shrinkingGuest.pop()
console.log(`Sorry ${unInvitedGuest5} You are not invited for Dinner!\n`);


for (let i = 0; i < shrinkingGuest.length; i++) {
  const element = shrinkingGuest[i];
  console.log(`${shrinkingGuest} You are still invited For Dinner Party! To night ${element} \n`);

}