let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let cowardlyDog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let gross = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

let crew = [superChimpOne, salamander,superChimpTwo, cowardlyDog, gross];
crew.forEach((a)=>{a.astronautID = Math.floor(Math.random()*10)+1});
crew.forEach((a)=>{a.move = Math.floor(Math.random()*10)+1});

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

console.log(crew);

let crewReports = (obj) => (`${obj.name} is a ${obj.species}.  They are ${obj.age} years old and ${obj.mass} kilograms.  Their ID is ${obj.astronautID}`);
console.log(crewReports(gross));

function fitnessTest (ar) {
  let newAr = [];
   for (let i = 0; i < ar.length; i++) {
   turns(ar[i]);
   newAr.push(`${ar[i].name} took ${turns(ar[i])} turns to reach 20 steps`)
  }
  return newAr
}


function turns(obj) {
   let steps = 0;
   let turns = 0;
   while (steps <=20){
      steps+= obj.move;
      turns++;
   }
   return turns
}
//console.log(gross)
console.log(turns(gross))


console.log(fitnessTest(crew))