//Easy Going
// for (let i = 0; i <= 20; i++) {
// 	console.log(i);
// }

//Get even
// for (let i = 0; i <= 200; i++) {
// 	if ((i % 2) == 0) {
// 		console.log(i);
// 	}
// }

//Excited Kitten
// for (let i = 0; i <= 20; i++) {
// 	console.log("love me, pet me! HSSSS");
// 	if ((i % 2) == 0) {
// 		let catSays = Math.floor(Math.random()*3)+1;
// 		console.log(catSays);
// 		if (catSays === 1) {
// 			console.log("...human... why are you taking pictures of me");
// 		} else if (catSays === 2) {
// 			console.log("...the catnip made me do it");
// 		} else {
// 			console.log("...why does the red dot always get away...");	
// 		}
// 	}
// }

//Fizz Buzz

// for (let i = 0; i <= 100; i++) {
// 	console.log(i);
// 	if (i % 5 === 0 && i % 3 === 0) {
// 		console.log("fizzbuzz");
// 	}
// 	else if (i % 3 === 0) {
// 		console.log("fizz");
// 	}
// 	else if (i % 5 === 0) {
// 		console.log("buzz");
// 	}
// }

//Getting to Know You

// thom.shift();
// thom.unshift("gameboy");

// karolyn[1] = karolyn[1] + 1;

// matt[2] = "gotham city";

// kristyn.pop();
// kristyn.push("brooklyn");

//Yell at the Ninja Turtles

// let turtles = ["donatello", "raphael", "leonardo", "michaelangelo"];

// for (let i = 0; i < turtles.length; i++) {
// 	let bigTurt = turtles[i].toUpperCase();
// 	console.log(bigTurt);
// }

//Return of the Closets

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

// let kristynsShoe = kristynsCloset.shift();

// thomsCloset[2].push(kristynsShoe);

// let thomsOutfitOne = [thomsCloset[0][2], thomsCloset[1][0], thomsCloset[2][0]];
// let thomsOutfitTwo = [thomsCloset[0][1], thomsCloset[1][1], thomsCloset[2][2]];
// let kristynOutfit = [kristynsCloset[1], kristynsCloset[3], kristynsCloset[5]];

// console.log("Thom is wearing a "+thomsOutfitOne[0]+", "+thomsOutfitOne[1]+", and "+thomsOutfitOne[2]+".");
// console.log("Thom is wearing a "+thomsOutfitTwo[0]+", "+thomsOutfitTwo[1]+", and "+thomsOutfitTwo[2]+".");
// console.log("Kristyn is wearing a "+kristynOutfit[0]+", "+kristynOutfit[1]+", and "+kristynOutfit[2]+".");

//Dirty Laundry

for (let i = 0; i < kristynsCloset.length; i++) {
	console.log("WHIIRRR: now washing "+kristynsCloset[i]);
}

for (let i = 0; i < thomsCloset.length; i++) {
	console.log(thomsCloset[i]);
}











