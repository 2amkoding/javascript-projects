// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
// function divide(num, denom) {
//     if(denom === 0) {
//         throw Error('You cannot divide by 0!');
//     }
//     return num / denom
// }
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
let divide = function (num, denom) {
    if(denom === 0) {
        throw Error('You cannot divide by 0!');
    }
    return num / denom
}

console.log('5 / 6 returns: '+ divide(5,6));
console.log('5 / 0 returns:'+ divide(5,0));