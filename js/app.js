// 1. Easy Going

// for (let i = 1; i <= 20; i++) {
// 	console.log(i);
// }

// 2. Get Even

// for (let a = 0; a <= 200; a +=2) {
// 	console.log(a);
// }

// 3. Excited Kitten

// let cat1 = "...human...why you taking pictures of me?..."
// let cat2 = "...the catnip made me do it..."
// let cat3 = "...why does the red dot always get away..."

// for (let b = 0; b <= 20; b++) {
// 	if ((b % 2)== 0) {
// 		let random1 = (Math.floor(Math.random() * 10 + 1))
// 		if (random1 < 3) {
// 			console.log(cat1)
// 		}
// 		else if (random1 >= 3 && <= 6){
// 			console.log(cat2)
// 		}
// 		else if (random1 >6){
// 			console.log(cat3)
// 		} 
// 	}
// 	else {
// 		console.log("Love me, pet me! HSSSSSS!")
// 	}
// }

// 4. Fizz Buzz

// for (let c = 1; c <= 100; c++){
// 	if ((c % 3) == 0){
// 		console.log("Fizz")
// 	}
// 	else if((c % 5) == 0){
// 		console.log("Buzz")
// 	}
// 	else if(((c % 5) == 0) && ((c % 3) == 0)) {
// 		console.log("FizzBuzz")
// 	}
// }

// 5. Getting to Know You 

// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]

// thom.splice(0,1,"Gameboy");

// karolin.splice(1,1,17);

// matt.splice(2,1,"Gotham City");

// kristyn.splice(2,1,"Brooklyn");

// 6. Yell at the Ninja Turtles

// let turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let d = 0; d <= (turtles.length -1); d++){
// 	console.log(turtles[d].toUpperCase())
// }

// 7. Return of the Closets

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

let kristynsShoe = kristynsCloset.splice(0,1);

thomsCloset[2].splice(3,0,kristynsShoe[0]);

// console.log(kristynsCloset);
// console.log(thomsCloset);

// console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " + thomsCloset[1][0] + ", and " + thomsCloset[2][1] + "!")

// console.log("Thom is looking fierce in a " + thomsCloset[0][1] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][2] + "!")

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][2] + ", and " + thomsCloset[2][3] + "!")

// 8. Dirty Laundry

for (let e = 0; e <= (kristynsCloset.length -1); e++){
	console.log(kristynsCloset[e])
}

console.log(thomsCloset[0][0]);
console.log(thomsCloset[0][1]);
console.log(thomsCloset[0][2]);
console.log(thomsCloset[0][3]);
console.log(thomsCloset[1][0]);
console.log(thomsCloset[1][1]);
console.log(thomsCloset[1][2]);
console.log(thomsCloset[2][0]);
console.log(thomsCloset[2][1]);
console.log(thomsCloset[2][2]);
console.log(thomsCloset[2][3]);
