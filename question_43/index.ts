// 43. Unchanged Magicians: 
console.log("****************Unchanged Magicians*****************");


let changeMagician = ["Ayaz", "Fayaz", "Tariq", "Madad"];

let copyMagician = [...changeMagician];

function show_magic(greet:string) {
let withGreetings= ""  
for (let  item of changeMagician) {
  withGreetings += `${greet} ${item}\n`;
  }
  return withGreetings;
  
};
let myGreetings = show_magic("Hello")
let makeArray = myGreetings.split("\n");
console.log(makeArray);
console.log(changeMagician);
