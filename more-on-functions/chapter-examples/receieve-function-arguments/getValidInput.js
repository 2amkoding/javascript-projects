const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let startsWithA = function(str) {
  return (str[0].toLowerCase() === 'a')
  
}

getValidInput("Enter a word that starts with 'a' ", startsWithA)
// TODO 2: write a validator 
// that ensures input is a vowel


let hasVowels = function(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i])) {
      counter++
    }
  }
  if (counter > 0){
    return true
  }
}

// Be sure to test your code!
getValidInput('Enter word that includes a vowel: ', hasVowels)