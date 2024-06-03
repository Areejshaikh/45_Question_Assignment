
// 44. Sandwiches:

console.log("***************Sandwiches****************")

function sandwiche(...items:string[]) {
  return `i Want sandwiches of ${items} !`
}

let collection1 = sandwiche("Cheeze","Lettuce","Double Cheeze");
let collection2 = sandwiche("Turkey" ,"Swiss");
let collection3 = sandwiche();
console.log(collection1);
console.log(collection2);
console.log(collection3);







