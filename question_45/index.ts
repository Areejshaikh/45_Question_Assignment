
// 45. Cars: 

console.log("**********Cars**********");

function carsDetails(manufacturer:string,modelName: string, ...additionalInfo:any) {

  const car = {manufacturer, modelName, ...Object.fromEntries(additionalInfo)};
  return car;
  
  };
  
  
  
  const myCarDetails = carsDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
  
  
  
  console.log(myCarDetails);



  console.log ("********************The End********************");