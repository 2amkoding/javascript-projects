//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = 0;
let astronauts;
let shuttleAltitude = 0;
const input = require('readline-sync');




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
fuelLevel = input.question('Enter the starting fuel level: ');

while (fuelLevel < 5000 || fuelLevel > 30000||isNaN(fuelLevel)){
  if (fuelLevel <5000) {
    fuelLevel = input.question("Fuel must be above 5000.  Adjust Fuel level: ");
  } else if (fuelLevel >30000){
    fuelLevel = input.question("Fuel level cannot exceed 30000.  Adjust fuel level: ");
  }
}
if (!(fuelLevel < 5000 || fuelLevel > 30000) || isNaN(fuelLevel)){
  console.log(`Fuel level is: ${fuelLevel}. Fuel leve good to go!`)
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
astronauts= input.question('Enter Number of astronauts: ')  

while (astronauts > 7 || astronauts < 1 || isNaN(astronauts)) {
    
  astronauts = (input.question("Number of astronauts must be 1-7 & in numerical value.  Re-enter number: "));
  astronauts = Number(astronauts) 
   
    }

console.log(`${astronauts} on board. Astronauts check complete!`);

  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let fuelPerAstro = astronauts*100;
let orbitAchieved = 2000;

while (shuttleAltitude <= orbitAchieved && fuelLevel > fuelPerAstro) {
  fuelLevel-= fuelPerAstro;
  shuttleAltitude += 50;
  console.log(`fuel level: ${fuelLevel}. altitude: ${shuttleAltitude}`);
  if (shuttleAltitude === orbitAchieved) {
    console.log(`\norbit acheived with fuel remaining: ${fuelLevel}`);
  }
}


console.log(`\n`)
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAltitude >= orbitAchieved) {
  console.log(`Orbit achieved!`);
} else {
  console.log(`Failed to reach orbit.`);
}