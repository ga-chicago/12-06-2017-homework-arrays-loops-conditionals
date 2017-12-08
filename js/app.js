	// Easy Going

// for(let i = 1; i <= 20; i++){
// 	console.log(i);
// };


	// Get Even

// for(let i = 0; i <= 200; i += 2){
// 	console.log(i);
// };


	// Excited Kitten

// for(let i = 1; i <= 20; i++){
// 	console.log("Love me, pet me! HSSSSSS!")
// };

// for(let i = 1; i <=20; i++){
// 	let rand = 10*Math.random();
// 	if (i % 2 === 0) {
// 		console.log("Love me, pet me! HSSSSSS!");
// 	} else if(rand <= 3){
// 		console.log("...human...why you taking pictures of me?...");
// 	} else if(rand >= 6){
// 		console.log("...the catnip made me do it...");
// 	} else {
// 		console.log("...why does the red dot always get away...");
// 		};
// 	};


	// Fizz Buzz

// for(let i = 1; i <= 100; i++){;
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log("FizzBuzz");
// 	} else if(i % 5 === 0){
// 		console.log("Buzz");
// 	} else if(i % 3 === 0){
// 		console.log("Fizz");
// 	} else{
// 		console.log(i);
// 	};
// };


	// Getting to know you

// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

// thom.shift();
// thom.unshift("Gameboy");
// karolin[1] = 17;
// matt[2] = "Gotham City";
// kristyn.pop();
// kristyn.push("Brooklyn");


	// Yell at ninja turtles

// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for(let i = 0; i < ninjaTurtles.length; i++){
// 	console.log(ninjaTurtles[i].toUpperCase());
// };


	// Return of the closets

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


	// Alien Shoe

// let kristynsShoe = kristynsCloset.shift();
// thomsCloset[2].push(kristynsShoe);


	// Dress us up

// console.log("Kristen is rocking that " + kristynsCloset[2] + " today!");
// console.log("Kristen is rocking that " + kristynsCloset[3] + " today!");
// console.log("Kristen is rocking that " + kristynsCloset[4] + " today!");
// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and a " + thomsCloset[2][1]);
// console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " + thomsCloset[1][0] + ", and a " + thomsCloset[2][3]);
// console.log("Thom is looking fierce in a " + thomsCloset[0][3] + ", " + thomsCloset[1][2] + ", and a " + thomsCloset[2][0]);


	// Dirty Laundry

// for(let i = 0; i<kristynsCloset.length; i++){
// 	console.log("WHIRR: Now washing " + kristynsCloset[i]);
// };


	// Inventory - This may not be the format I was supposed to print the arrays in

// console.log(thomsCloset.length);
// console.log(thomsCloset[0].length);

// for(let a = 0; a < thomsCloset.length; a++){
//   for(let b = 0; b < thomsCloset[a].length; b++){
//     console.log(thomsCloset[a][b]);
//   };
// };


	// Multiples of 3 and 5

// let sum = 0;
// for(let i = 0; i < 1000; i++){
// 	if (i % 3 ===0 || i % 5 === 0) {
// 		sum = sum + i
// 	};
// }

// console.log(sum);



  // Triangles


  // 1)
// var argument = 7;

// const triangle = (hash) => {
//   for(i = 1; i <= argument; i++){
//     console.log(hash.repeat(i));
//   };
// }


// 2)
// var argument = 7;

// const rightIsoTriangle = (space, hash) => {
//   for(i = 1; i <= argument; i++){
//     console.log(space.repeat(argument-i) + hash.repeat(i));
//   };
// };



// 3)
// var argument = 7;

// const triangle = (hash) => {
//   for(i = argument; i >= 1; i--){
//     console.log(hash.repeat(i));
//   };
// };


// 4)
// var argument = 9;

// const rightIsoTriangle = (space, hash) => {
//   for(i = argument; i >= 1; i--){
//     console.log(space.repeat(argument-i) + hash.repeat(i));
//   };
// };


  // Find the median

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// console.log(nums[Math.floor(nums.sort().length/2)])




