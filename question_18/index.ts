// 18. Seeing the World:


let mypalces : string[] = ["Karachi" ,"Hyderabad","Germani","Islamabad","Uk","Quitta"];


let places = mypalces.slice();
console.log(places);


let sortArray = places.sort();
console.log(sortArray);


// reverse copy array
let reverseArray = sortArray . reverse();
console.log(reverseArray);


//  Again reverse (copy reverse) array
let againreverse = reverseArray.reverse();
console.log(againreverse);


//Orignal Array
console.log(mypalces);

