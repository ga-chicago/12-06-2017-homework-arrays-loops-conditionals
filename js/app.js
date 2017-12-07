// Easy Going
// for (let i = 1; i <= 20; i++) {
// 	console.log(i);
// };

// Get Even
// for (let i = 0; i <= 200; i+=2) {
// 	console.log(i);
// };

// Excited Kitten
// let catQuotes = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
// let randomQuote;
// for (let i = 0; i < 20; i++) {
// 	console.log("Love me, pet me! HSSSSSS!");
// 	if (i % 2 === 0) {
// 		randomQuote = Math.floor((Math.random() * catQuotes.length-1) + 1);
// 		console.log(catQuotes[randomQuote]);
// 	}
// };

// Fizz Buzz
// for (let i = 1; i <= 100; i++) {
// 	if (!(i % 5) && !(i % 3)) {
// 		console.log("Fizzbuzz");
// 	} else if (!(i % 5)) {
// 		console.log("Buzz");
// 	} else if (!(i % 3)) {
// 		console.log("Fizz");
// 	} else {
// 		console.log(i);
// 	}
// };

// Getting To Know you
// const thom = ["Thom", 1000, "Christchurch"];
// const karolin = ["Karolin", 16, "New York"];
// const kristyn = ["Kristyn", 5, "Pittsburgh"];
// const matt = ["Matt H", 186, "Philadelphia"];
// thom[0] = "Gameboy";
// karolin[1] = 17;
// matt[2] = "Gotham City";
// kristyn.splice(2,1,"Brooklyn");

// Yell at the Ninja Turtles
// let tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for (let i = 0; i < tmnt.length; i++) {
// 	console.log(tmnt[i].toUpperCase());
// };

// Return of the Closets
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// Alien Attire
// let shoe = kristynsCloset[0];
// thomsCloset.push(shoe);
// Dress Us Up
// let kristynOutfit = "Kristyn will wear " + kristynsCloset[0] + " and " + kristynsCloset[2] + ".";
// let thomOutfit = "Thom will wear " + thomsCloset[0][2] + " and " + thomsCloset[2][0] + ".";
// let thomOutfit2 = "Thom will wear " + thomsCloset[1][0] + " and " + thomsCloset[2][0] + ".";
// console.log(kristynOutfit);
// console.log(thomOutfit);
// console.log(thomOutfit2);

// Dirty Laundry
// for (var i = 0; i < kristynsCloset.length; i++) {
// 	console.log("WHIRR: Now washing " + kristynsCloset[i]);
// };

// Inventory
// for (var i = 0; i < thomsCloset.length; i++) {
// 	console.log(thomsCloset[i]);
// };

// Multiples of 3 and 5
// let bucket = 0;
// for (var i = 0; i < 1000; i++) {
// 	if (!(i % 3) || !(i % 5)) {
// 		bucket += i;
// 	};
// };
// console.log(bucket);
































