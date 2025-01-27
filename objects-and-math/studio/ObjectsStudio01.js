// Code your selectRandomEntry function here:
function selectRandomEntry(howMany) {
  let selection = [];
  let index;
    while (selection.length < howMany) {
      index = Math.floor(Math.random()*(idNumbers.length)); 
      if(!(selection.includes(idNumbers[index]))) {
        selection.push(idNumbers[index]);
      }
}
return selection
}

// Code your buildCrewArray function here:
function buildCrewArray (randomSelect, arOfCrew) {
  let identityNumbers = randomSelect;
  let crew = [];
 for (let i = 0; i<arOfCrew.length; i++) {
  if (identityNumbers.includes(arOfCrew[i].astronautID)) {
      crew.push(arOfCrew[i]);
  }
 }
return crew;
}

//`${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!`
let idNumbers = [291, 414, 503, 599, 796, 890];

//console.log(selectRandomEntry(3))
// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let team = buildCrewArray(selectRandomEntry(3), animals);
// Code your template literal and console.log statements:
let goingToSpace = print => console.log(`${team[0].name}, ${team[1].name}, and ${team[2].name} are going to space!`)
setTimeout(goingToSpace, 20)

