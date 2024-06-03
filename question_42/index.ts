
// 42. Great Magicians:

let magicianName = ["Ayaz", "Fayaz", "Tariq", "Madad"];

function showMagicians(greet:string
) {
  
  for (const item of magicianName) {
    console.log(greet, item)
  }
}
showMagicians("Hello, How are you Mr: ");
showMagicians("Hello");
