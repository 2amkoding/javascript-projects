//Part Three section one

const { init } = require("create-react-app/createReactApp");

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let initials = language.charAt(0)+language.charAt(4);
console.log(language.slice(0,1)+language.slice(4,5));
console.log(language.indexOf('S'));
console.log(language.charAt(4));
//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.charAt(0)+language.charAt(4));
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${initials}.`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toLocaleLowerCase().replace('java','J.').replace('script','S'));
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';


notTitleCase = notTitleCase.replace('t','T').replace('c','C');
console.log(notTitleCase);

