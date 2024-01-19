let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",").sort();
console.log(food);
equipment = equipment.split(",").sort();
pets = pets.split(",").sort();
sleepAids = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let info =input.question("select a cabinet (0-3)");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
console.log(`You have chosen Cabinet ${info}!  Here are the contents: ${cargoHold[info]}`);
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let info2 = input.question("select item: ");
if (cargoHold[info].includes(info2.toLowerCase())) {
    console.log(`Cabinet ${info} DOES contain ${info2.toLowerCase()}`)
} else {
    console.log(`Cabinet ${info} DOES NOT contain ${info2.toLowerCase()}`)
}