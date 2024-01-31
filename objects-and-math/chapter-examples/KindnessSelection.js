function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 console.log('\n')
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

// console.log('\n')
for (i = 0; i <3; i++) {
// console.log(randomSelection(happiness));
}
// console.log('\n')
let arrayOfWords = {
  happiness: happiness,
  words: words
};
// HOW TO SORT THRU OBJECTS THOUGH?
function pickKeyFromObject (obj) {
  return Object.keys(obj)[Math.floor(Math.random()*Object.keys(obj).length)];
 
}
  // function chooseArray (obj) {
  //   let chosen = [];
  //   for(item in obj) {
      
  //   }
    
  // }

let arrWords = [happiness, words];
//console.log(arrWords)


function tookForever (arr, times) {
  let chosenArr = randomSelection(arr);
  for (let i=0; i < times; i++)
  console.log(randomSelection(chosenArr));
}

function choose1FromArrs (arr1, arr2,) {
  let pushed = [];
  pushed.push(randomSelection(arr1));
  pushed.push(randomSelection(arr2));
  console.log(pushed);
}
choose1FromArrs(happiness, words, 1);

 //  console.log(Math.trunc(-3.87))
//  let num = Math.floor(Math.random()*10);

//  console.log(num);
 
//  for (i=0; i < 5; i++){
//   let num = Math.random()*10;
//   console.log(`floor = ${Math.floor(num)}, ceil = ${Math.ceil(num)}, round = ${Math.round(num)}`);
// }