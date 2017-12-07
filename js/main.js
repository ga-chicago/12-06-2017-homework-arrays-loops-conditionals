//for loop 1-20
for(let i = 1; i <= 20; i++){
 	console.log(i + " easy going answered")
};
// even numbers through 200
for(let i = 1; i <= 200; i++){
if ((i % 2)==0) console.log(+ (i) + " get even answered")
};
// random cat thoughts for even numbers through twenty
for(let i = 1; i <= 20; i++){
	let randNum = Math.random()* (2) + 1;
	randNum = Math.round(randNum);
	if ((i % 2)===0){
		if (randNum === 1) console.log(+ (i) + " ...human...why you taking pictures of me?...");
		else if  (randNum === 2) console.log(+ (i) + " ...the catnip made me do it...");
		else  if (randNum === 3) console.log(+ (i) + " ...why does the red dot always get away...");
		}
	}
// divisable by 3 or 5 or 3 and 5
for(let i = 1; i <= 100; i++){
	if ((i % 3)=== 0 && i % 5 === 0) console.log("FizzBuzz");
	else if (i % 3 === 0 ) console.log("Fizz");
	else if (i % 5 ===0 ) console.log("Buzz");
}
//spliceing arrays
const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

thom.splice(0,1,"Gameboy");
karolin.splice(1,1,"17");
matt.splice(2,1,"Gotham City");
karolin.splice(2,1,"Brooklyn");

console.log( thom, karolin, kristyn, matt)
//array moving and splicing 
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

KristynsShoe = kristynsCloset[0];
kristynsCloset.shift(0,1);

thomsCloset[0].push(KristynsShoe);

thomsOutFit1 = "Thom you'll be wearing a " + thomsCloset[0][1] + ", " + thomsCloset[1][0] + " and " + thomsCloset[2][0];
thomsOutFit2 = "Thom you'll be wearing a " + thomsCloset[0][3] + ", " + thomsCloset[1][2] + " and " + thomsCloset[2][2];
thomsOutFit3 = "Thom you'll be wearing a " + thomsCloset[0][2] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1];
console.log(thomsOutFit1);
console.log(thomsOutFit2);
console.log(thomsOutFit3);

kristynsOutFit1 = "Kristyn you'll be wearing " + kristynsCloset[0] + ", " + kristynsCloset[4] + " and " + kristynsCloset[5];
kristynsOutFit2 = "Kristyn you'll be wearing a " + kristynsCloset[2] + ", " + kristynsCloset[5] + " and " + kristynsCloset[4];
kristynsOutFit3 = "Kristyn you'll be wearing " + kristynsCloset[3] + ", " + kristynsCloset[6] + " and " + kristynsCloset[0];
console.log(kristynsOutFit1);
console.log(kristynsOutFit2);
console.log(kristynsOutFit3);
//loop through array
for (let i = 0; i < kristynsCloset.length; i++) {
    console.log("now washing: " +kristynsCloset[i]);
}
//Multiples
let multiplesOf3And5 = 0;
for(let i = 1; i <= 1000; i++){
	if ((i % 3)=== 0 || i % 5 === 0) multiplesOf3And5 = multiplesOf3And5 + i;
}

console.log(multiplesOf3And5);




