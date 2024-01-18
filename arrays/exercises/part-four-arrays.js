let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
let bothCabinets = `${holdCabinet1} | ${holdCabinet2}`
//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1);
console.log(`array.concat() does not alter original arrays\n`)

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
holdCabinet1.slice(2);
holdCabinet2.slice(2);
console.log(bothCabinets);
console.log(`array.slice() does not alter original array\n`);
//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
holdCabinet1.reverse();
console.log(holdCabinet1);
console.log('array.reverse() alters orignal array\n');

holdCabinet2.sort();
console.log(`${holdCabinet2}
array.sort() alters original array`);


