function findMin(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...
// function sortedArray (arry) {
//   sortedArray = [];
//   i = 0;
//     while (i < arry.length) {
//       sortedArray.push(findMinValue(arry));
//       console.log(sortedArray)
//       arry.slice(findMinValue(arry));
//       console.log(arry)
//       i++
//       }
//       return sortedArray;
//     }
function removeElement(ar, min) {
  let index = ar.indexOf(min);
  return ar.splice(index, 1)
}

function sortA(ar) {
  let newA = [];
  for(let i = 0; ar.length != 0; i++) {
    newA.push(findMin(ar));
    removeElement(ar, findMin(ar))
  }
  return newA
}

function sortWhile(ar) {
  let newA = [];
  
  while(ar.length != 0) {
    newA.push(findMin(ar));
    removeElement(ar, findMin(ar));
  }
  return newA;
}
function sortArayMin(arr) {
  let sorted = [];
  while (arr.length !== 0) {
  let index = arr.indexOf(findMin(arr))
    sorted.push(findMin(arr));
    arr.splice(index,1);
    }
    return sorted; 
}

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */
// function sortWithRefactor (ar) {
//   let sorted = [];
//   sorted.push(findMin(ar));
//   removeElement(ar, findMin(ar));
//   console.log(sorted)
//   if (ar.length ===0) {
//     return sorted
//   } 
//   return sortWithRefactor(ar)
  
// }

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


//console.log(nums3);
//console.log(sortA(nums3));
//console.log(sortWhile(nums3));

function sortArrWRecursion(arr, sortArray = []){
  if (arr.length === 0){
  return sortArray;
}
else {
  let min = findMin(arr);
    sortArray.push(min);
    arr.splice(arr.indexOf(min) , 1);
    return sortArrWRecursion(arr, sortArray);
}
}