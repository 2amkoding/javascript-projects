//Rectangles
function iterateString(size, str="#") {
    let repeated = 0;
    let hold = ''
    while (repeated < size) {
      hold += str;
      //console.log(hold)
      repeated++
      
    }
    return hold;
  }
  
  function makeSquare(size,str) {
    //iterateString(size, '#')
     return iterateString(size, '\n' + iterateString(size, str))
  }
//console.log(makeSquare(5))
function makeRectangle(width, height, str) {
    //iterateString(width, '#')
    return iterateString(width, `\n` + iterateString(height, str))
}
//console.log(makeRectangle(5,10))

function makeSquareV2 (size, str) {
  //makeRectangle(size) 
    return makeRectangle(size, size, str)
  }

    
 //console.log(makeSquareV2(5))
// console.log('\n')
 //console.log(makeSquare(5, "$"))

function makeDownStairs(size, str) {
    let i = 0;
    let stairs = '';
    while(i < size) {
        stairs += iterateString(i+1, str) + '\n';
        i++;
        
    }
    return stairs;
}

function makeSpacesBetweenStrings(sizeOfSpace, sizeOfString, str='#') {
    let spaces = iterateString(sizeOfSpace, ' ')
    return spaces + iterateString(sizeOfString, str) + spaces;
}


function makeIsoscelesTriangle(height, str) {
    let i = 0;
    let triangle = '';
    while (i < height) {
       triangle+= '\n'+ makeSpacesBetweenStrings(height -i -1, 2*i+1, str)
       i++
    }
    return triangle
}

function reverseString (str) {
    let reversed = '';
    let i = 0;
    while (i <str.length) {
      reversed = str[i]+reversed
     i++
    }
    return reversed
}



function diamond(height, str) {
    let invertTriangle = reverseString(makeIsoscelesTriangle(height,str))
    return makeIsoscelesTriangle(height, str) +'\n' + invertTriangle
}
console.log(diamond(5))

