// 18. Seeing the World:
var mypalces = ["Karachi", "Hyderabad", "Germani", "Islamabad", "Uk", "Quitta"];
var places = mypalces.slice();
console.log(places);
var sortArray = places.sort();
console.log(sortArray);
// reverse copy array
var reverseArray = sortArray.reverse();
console.log(reverseArray);
//  Again reverse (copy reverse) array
var againreverse = reverseArray.reverse();
console.log(againreverse);
//Orignal Array
console.log(mypalces);
