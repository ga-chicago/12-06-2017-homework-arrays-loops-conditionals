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

////"Commit 4 - Fizz Buzz answered"//////////////
// for(i = 1;i <= 100; i++){
//     if(i % 3 === 0){
//         if(i % 5 === 0){
//             console.log("FizzBuzz");
//         }
//         else{
//             console.log("Fizz");
//         }
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

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
//// for (i=0; i <= ninjaTurtles.length - 1; i++){
//        console.log(ninjaTurtles[i)
//       }


// "Commit 7 - Kristyn and Thom have their outfits ready for class - array practice" ////////////
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];
//
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ],[
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ],[
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];
//
// var kristynsShoe = kristynsCloset.shift();
// thomsCloset.push(kristynsShoe);   // .push() is a method of the array. So to place stored var into array use arrayname.push(storedVariable)
// console.log("Kristyn will be wearing " + kristynsCloset[0] + " and " + kristynsCloset[3]);
// console.log("Tomorrow Kristyn will be wearing " + kristynsCloset[1] + " and " + kristynsCloset[4]);
// console.log("The day after Kristyn will be wearing " + kristynsCloset[4] + " and " + kristynsCloset[5]);
// console.log("Today Thom is wearing " + thomsCloset[0][1] + " and " + thomsCloset[2][1]);
// console.log("Tomorrow Thom will be wearing " + thomsCloset[2][2] + " and " + thomsCloset[1][1]);
// console.log("The day after Tomorrow Thom is wearing " + thomsCloset[0][1] + " and Kristyn's " + kristynsCloset[4]);
//
// //"Commit 8 - I loops through their closets".///////
// for(var i in kristynsCloset){
//     console.log("WHIRR: Now washing " + kristynsCloset[i])
// }
// // not sure what the question is asking // using bracket notation?
// console.log(thomsCloset);
// /// maybe asking for this?
// console.log(thomsCloset[0]);
// console.log(thomsCloset[1]);
// console.log(thomsCloset[2]);

//"Commit 9 - Project Euler Problem 1 answered" ///////
// for(i=1; i <= 100; i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
//     else if(i % 5 === 0){
//         console.log(i);
//     }
// }

//***********TRIANGLES**********************
// 1
const argument = 7;
var x = "#";
for(i=1; i <= argument; i++){
    console.log(x);
    x = x + x[0];
}

//2
// var argument = 7;
// var x = "#".padStart(argument, " ");
// for(i=1; i <= argument; i++){
//     console.log(x);
//     x = x.padStart(x.length - 1);
//     x = x.substring(1, x.length + 1);
//     x = x + "#";
// }

//better way to do 2
var argument = 7;
var x = "#".padStart(argument, " ");
for(i=1; i <= argument; i++){
    console.log(x);
    x = x.substr(1);
    x = x + "#";
}

// 3
const argument = 7;
var x = "#######";
for(i=1; i <= argument; i++){
    console.log(x);
    x = x.substr(1);   // || x = x.substr(0, x.length - 1);
}

// 4 // add padding as the the # --
// const argument = 7;
// var x = "#######";
// for(i=1; i <= argument; i++){
//     console.log(x);
//     x = x.padStart(x.length + 1);
//     x = x.substring(0, x.length -1);
// }
// better way to do 4 /////////
var argument = 7;
var x = "".padStart(argument, "#");
for(i=1; i <= argument; i++){
    console.log(x);
    x = x.padStart(x.length + 1);
    x = x.substring(0, x.length -1);
}



//*************FIND THE MEDIAN******************
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
let ordered = nums.sort;
(function compare (x, z){
    return x-z
});
console.log(ordered[Math.floor(ordered.length / 2)]);

//To compare numbers instead of strings, the compare function can simply subtract z from x. The following function will sort the array ascending




