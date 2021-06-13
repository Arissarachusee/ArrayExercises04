let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

console.log(holdCabinet1);
console.log(holdCabinet2);

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
//Answer :  concat dose not alter original array//


let newCabinet = [];

newCabinet = holdCabinet1.concat(holdCabinet2);
console.log(newCabinet);

console.log();

//b) Print a slice of two elements from each array. Does slice alter the original arrays?

//Answer :  Slice dose not alter original array//


console.log(holdCabinet1.slice(1));
console.log(holdCabinet2.slice(2));

console.log();

//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
//Answer :  reverse dose not alter original array//

holdCabinet1.reverse();
console.log(holdCabinet1);

holdCabinet1.sort();
console.log(holdCabinet1);
//sort will arrange by number (front digits) then alphabet from A-Z and capital will up frist//

