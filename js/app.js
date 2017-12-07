// Easy Going
// for (i = 1; i <= 20; i++) {
// 	console.log(i);
// }

// Get Even
// for (i = 0; i <= 200; i++) {
// 	if (i % 2 === 0) {
// 	console.log(i);
// 	}
// }

// Excited Kitten
// var i = 1
// while (i <= 20) {
// 	console.log("Love me, pet me! HSSSSSS!");
// 	i++;
// }
const catThoughts = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (i = 1; i <=20; i++) {
	if(i % 2 === 0) {
		console.log(catThoughts[Math.floor(Math.random()*3)]);
	} else {
		console.log("Love me, pet me! HSSSSSS!");
	}
}
