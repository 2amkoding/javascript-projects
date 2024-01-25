function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

function updatedReverse (str) {
   return str.split('').reverse().join('')
}
