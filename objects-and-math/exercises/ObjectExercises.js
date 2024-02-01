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

let allObjs = [superChimpOne, salamander,superChimpTwo, cowardlyDog, gross];

allObjs.forEach((a)=>{a.astronautID = Math.floor(Math.random()*10)+1});

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
console.log(allObjs)