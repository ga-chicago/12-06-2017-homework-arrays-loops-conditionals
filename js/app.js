/*
Somers Matthews

## Easy Going
1. Write a for loop that will log the numbers 1 through 20.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 -Easy Going answered"
<hr>
*/

for(var i=1; i<=20; i++)
{
  console.log(i);
}
/*
## Get Even
1. Write a for loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Get Even answered"
<hr>
*/

for(var i=0; i<=200; i++)
{
  console.log(i);
}
/*
## Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

>Hint: You will need to use Math.random()
*/
var randomNum = 0;
for(var i=0; i<=20; i++)
{
  console.log("Love me, pet me! HSSSSSS!");

  if((i%2)===0)
  {
    randomNum = 3 * Math.random();
    console.log(randomNum);

    if(0 <= randomNum && randomNum < 1)
    {
    console.log("...human...why you taking pictures of me?...");
  } else if(1 <= randomNum && randomNum < 2)
    {
      console.log("...the catnip made me do it...");
    } else if(2 <= randomNum && randomNum < 3)
    {
      console.log("...why does the red dot always get away...");
    } else {
      console.log("SOMETHING IS WRONG WITH YOUR CAT TALKING LOOP")
    }
  }
}
/*
## Fizz Buzz

>NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

1. Write a javascript application that logs all numbers from 1 - 100.

2. If a number is divisible by 3 log "Fizz" instead of the number.

3. If a number is divisible by 5 log "Buzz" instead of the number.

4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/

for(var i=1;i<=100;i++)
{
  if((i%3)===0 && (i%5)===0)
  {
  console.log("FizzBuzz");
  }
  else if((i%3)===0)
  {
  console.log("Fizz");
  }
  else if((i%5)===0)
  {
  console.log("Buzz");
  }
  else
  {
  console.log(i);
  }
}

/*
## Getting to Know You
Use the following arrays to answer the questions below (name, age, hometown):
```
const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]
```
1. Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the `thom` array and replace it with "Gameboy".

2. Karolin just had her birthday; change Karolin's array to reflect her being a year older.

3. Change Matt H's hometown from Philadelphia to "Gotham City".

4. Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
*/
const thom = ["Thom", 1000, "Christchurch"];
const karolin = ["Karolin", 16, "New York"];
const kristyn = ["Kristyn", 5, "Pittsburgh"];
const matt = ["Matt H", 186, "Philadelphia"];

thom.shift();
thom.unshift("Gameboy");

karolin[1] = karolin[1]+1

matt[2] = "Brooklyn";

kristyn.pop();
kristyn.push("Brooklyn");

/*
## Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a `for loop` to call `toUpperCase()` on each of them and print out the result.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Yell at the Ninja Turtles answered"
<hr>
*/

var turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(var i=0;i<turtles.length;i++)
{

  console.log(turtles[i].toUpperCase());

}
/*
## Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
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
```

### Alien Attire
1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

### Dress Us Up
1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Kristyn and Thom have their outfits ready for class - array practice"
<hr>
*/

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
//console.log("first value kristyn =" + kristynsCloset[0])
var kristynsShoe = kristynsCloset[0];
kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);
//console.log("varible for kristiansShoe" + thomsCloset[2][3])

for(var i=0;i<3;i++)
{
  console.log("Kristyn is wearing " + kristynsCloset[i] + "." + "Tom is wearing " + thomsCloset[0][i] + ", "  + thomsCloset[1][i] + ", and " + thomsCloset[2][i] + ".");
}
/*
## Dirty Laundry
Continue looking at the closet arrays:
1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
*/

for(var i=0;i<Object.keys(kristynsCloset).length;i++)
{
  console.log("WHIRR: Now washing " + kristynsCloset[i] + ".");
}
/*
### Inventory
2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - I loops through their closets".
<hr>
*/
for(var i=0;i<Object.keys(thomsCloset).length;i++)
{
  for(var j=0;j<Object.keys(thomsCloset[i]).length;j++)
  {
    console.log(thomsCloset[i][j]);
  }
}
/*
## Multiples of 3 and 5

_Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

:clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:

<hr>
&#x1F534; The commit message should read: <br>
"Commit 9 - Project Euler Problem 1 answered"
<hr>
*/
var multiplesOfThree = [];
var multiplesOfFive = [];
var multiplesOfFifteen = [];
var sum = 0;
for(var i=1;(i*3)<1000;i++)
{
  multiplesOfThree[i] = i*3;
  sum = sum + multiplesOfThree[i];

}
for(var j=1;(j*5)<1000;j++)
{
  multiplesOfFive[j] = j*5;
  sum = sum + multiplesOfFive[j];
}
for(var k=1;(k*15)<1000;k++)
{
  multiplesOfFifteen[k] = k*15;
  sum = sum - multiplesOfFifteen[k];
}
//console.log(multiplesOfThree);
//console.log(multiplesOfFive);
//console.log(multiplesOfFifteen)
console.log("sum = " + sum);
/*
## Triangles

0. declare a variable `argument` and set it equal to 7.

1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.

>Ex: argument is 7
```
#
##
###
####
#####
######
#######
```

const argument = 7;
array = []
for(var i=1; i<=argument; i++)
{
  array.push("#")

console.log(array.join('')+ "\n")
}
/*
2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.

>Ex: argument is 7
```
      #
     ##
    ###
   ####
  #####
 ######
#######
```


array2 = []
array2.length = 7
for(var i=1; i<=argument; i++)
{
  array2.push("#")

for(var j=7;j>i;j--)
{
  array2.push(" ")
}
console.log(array2.reverse().join('') + "\n")
}
*/
