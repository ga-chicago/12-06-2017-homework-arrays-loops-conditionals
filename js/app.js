//"Commit 1 -Easy Going answered"////
// for(i = 1; i <= 20; i++){
//     console.log(i);
// }

//"Commit 2 - Get Even answered"////
// for(i = 0; i <= 200; i++){
//     if(i % 2 === 0)
//     console.log(i)
// }

// "Commit 3 - Excited Kittens answered"////
// var cat = "Love me, pet me! HSSSSSS!";
// var randomCatQuote = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",
//     "...why does the red dot always get away..."];
// for(i=1; i <= 20; i++){
//     if(i % 2 === 0){
//         var random = Math.floor(Math.random() * 3);
//         console.log(randomCatQuote[random]);
//     }
//     else{
//         console.log(cat);
//     }
//
// }
// for(; i % 2 === 0; i++){
//     //console.log(Math.random(randomCatQuote) * (randomCatQuote.length));
//     // console.log(randomCatQuote[0]);
// }
////"Commit 4 - Fizz Buzz answered"//////////////
for(i=1; i <= 100; i++){
    console.log(i);
    if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else if(i % 3 && 5 === 0){
        console.log("FizzBuzz");
    }
}

// "Commit 5 - Getting to Know You answered"////////////////
// const thom = ["Thom", 1000, "Christchurch"];
// const karolin = ["Karolin", 16, "New York"];
// const kristyn = ["Kristyn", 5, "Pittsburgh"];
// const matt = ["Matt H", 186, "Philadelphia"];
//
// thom.splice(0,1, "Gameboy");
// karolin.splice(1,1, 17);
// matt.splice(2,1, "Gotham City");
// kristyn.splice(2,1, "Brooklyn");

//"Commit 6 - Yell at the Ninja Turtles answered"//////////
// var ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// for(var i in ninjaTurtles){
//     console.log(ninjaTurtles[i]);
// }


// "Commit 7 - Kristyn and Thom have their outfits ready for class - array practice" ////////////
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

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

var kristynsShoe = kristynsCloset[0];


// "Commit 9 - Project Euler Problem 1 answered" ///////
// for(i=1; i <= 100; i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
//     else if(i % 5 === 0){
//         console.log(i);
//     }
// }

for(i=1; i <=10; i++){
    if(i % 2 === 0){
        console.log("The numbber is even");
    }
    else{
        console.log("the number is odd");
    }
}










