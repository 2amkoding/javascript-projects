/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
console.log("\nPrints 1-20:")
    for(i =0; i<21; i++){
  console.log(i);
}

console.log("\nprints odd values 1-29:")
for(i=1; i<30; i+=2){
  console.log(i);
}

console.log("\nprints even values 12 to -14 in descending order:");


for(i =12; i>= -14; i-=2){
  
  console.log(i);
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let string = `LaunchCode`;
let array = [1, 5, 'LC101', 'blue', 42];
console.log("\n each element of array in new line:")
for(i=0; i< array.length; i++){
  console.log(array[i]);
}
console.log('\n each charactor of reversed string in new line:')
let reverseString = '';
for(i= 0; i<string.length; i++){
  reverseString = `${string[i]}\n${reverseString}`;
}

for (i = string.length -1; i>=0; i--) {
console.log(string[i]);
}
console.log("\n")
console.log(reverseString);

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let array2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let array2Odd = [];
  let array2Even = [];
  

  
 for (i=0; i<array2.length; i++){
    if(array2[i]%2 === 0) {
  console.log(`${array2[i]} is even`)
    } else {
      console.log(`${array2[i]} is odd`)
    }
 }
 
  console.log("\n")
 for (i=0; i<array2.length; i++){
  if(array2[i]%2 === 0) {
    array2Even.push(array2[i])
  } else {
    array2Odd.push(array2[i])
  }
} 

//  for(i = 0; i<array2.length; i++){
//     if (array2[i] %2 === 0){
//       array2Even.push(array2[i])
//     }
//     if (!(array2[i] %2 === 0)) {
//       array2Odd.push(array2[i])
//     }
//   }
  console.log(array2Even);
  console.log(array2Odd);