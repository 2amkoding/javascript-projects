let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   birthday: function() {
      return this.age = this.age + 1;
   }
};

let tortoiseTwo = {
   species: "Galapagos Tortoise",
   name: "Patricia",
   weight: 800,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: function() {
      return this.name + " is a " + this.species;
   }
 };
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

console.log(tortoiseOne.weight);
tortoiseOne.weight = tortoiseOne.weight + 10;
console.log(tortoiseOne["weight"]);
console.log(tortoiseOne);
for (item in tortoiseOne) {
   console.log(`${item}: ${tortoiseOne[item]}`)
}
for (item in tortoiseTwo) {
   console.log(`${item}: ${tortoiseTwo[item]}`)
}

console.log(tortoiseOne.birthday);
