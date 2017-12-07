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

for (let i = 0; i <= 100; i++) {
	console.log(i);
	if (i % 5 === 0 && i % 3 === 0) {
		console.log("fizzbuzz");
	}
	else if (i % 3 === 0) {
		console.log("fizz");
	}
	else if (i % 5 === 0) {
		console.log("buzz");
	}
}