// 30. Hello Admin: 

let user_name :string[] = ["Eric","Admin","Rose","joni","john"];
for (let i = 0; i < user_name.length; i++)
  if (user_name[i] == "Admin"){
  console.log(`Would you like to ${user_name[i]} see status report!`);
}else {
 console.log(`Hello ${user_name[i]} Thank you for loging Again!`)
}

  