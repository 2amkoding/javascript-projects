// Declare and assign the variables below

let shuttleName = "Determination";
let shuttleSpeed = 17500;
let kmToMars = 225000000;
let kmToMoon = 384400;
let milesPerKilometer = 0.621;
let arraysOfGroup = [shuttleName, shuttleSpeed, kmToMars, kmToMoon, milesPerKilometer]

// Use console.log to print the 'typeof' each variable. Print one item per line.

//Lines: 14-16: Gotta figure out how to do it this way, then add it as a function

/*for (let i = 0; i < arraysOfGroup.length; i++) {
    console.log(typeof [i])
}*/
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof kmToMars);
console.log(typeof kmToMoon);
console.log(typeof milesPerKilometer);

// Calculate a space mission below
let milesToMars = (kmToMars*milesPerKilometer);
let hoursToMars = (milesToMars/shuttleSpeed);
let daysToMars = (hoursToMars/24);
// Print the results of the space mission calculations below
console.log(`${shuttleName} will take ${hoursToMars} days to reach Mars.`)
// Calculate a trip to the moon below
let milesToMoon = (kmToMoon*milesPerKilometer);
let hoursToMoon = (milesToMoon/shuttleSpeed);
let daysToMoon = (hoursToMoon/24);
// Print the results of the trip to the moon below
console.log(`${shuttleName} will take ${hoursToMoon} days to reach the Moon.`);