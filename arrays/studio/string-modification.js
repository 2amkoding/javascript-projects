const input = require('readline-sync');
let str = "LaunchCode";
let newstr = "";
let print = function (str) {
    console.log(`${str}\n `)}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
lau = str.slice(0,3);
newStr = str.slice(3).concat(lau);
print(lau);
print(str);
print(newStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
print(`original string: ${str}
modified string: ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let question = input.question("Enter number of letter to be relocated: ");
print(`User has input: ${question}`)
let validatedStr = str.slice(0,question);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(question <= 7){
    print(`${str.slice(question).concat(validatedStr)}`)
 } else {
    print(`${newstr} User input is greater than word length. `)};