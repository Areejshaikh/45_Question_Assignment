// 29. Favorite Fruit: 


console.log("*".repeat(50));

let favorite_fruits : string[] = ["Mongo" ,"Banana" ,"Orange"];

if (favorite_fruits.includes("Mongo"))  {
  console.log("I Really like Mongo")
}else if (favorite_fruits.includes("Kiwi")){
    console.log("I Really like Kiwi")
  }else {
    console.log(" Fruits not available");
  }

  let fav_fruit :string = "Mongo";
  if (fav_fruit.includes(fav_fruit)) {
    console.log(favorite_fruits);
  } else {
    console.log("Fruits are not Available")
  } 
  