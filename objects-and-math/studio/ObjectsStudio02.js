// Code your orbitCircumference function here:
let orbitCircumference = (r) => Math.round(2*Math.PI*r)
//console.log(orbitCircumference(2));

// Code your missionDuration function here:
function missionDuration(orbitsCompleted=0, orbitRadius = 2000, orbitalSpeed = 28000){
 let totalOrbDistance = orbitCircumference(orbitRadius)
  let time = totalOrbDistance / orbitalSpeed
 time = Math.round(time*100)/100;
 let totalTime =  orbitsCompleted*time
 console.log(`The mission will travel ${totalOrbDistance}km around the planet, and take ${totalTime} hrs to complete.`)
  return orbitsCompleted*time
  
}
console.log(missionDuration(5))
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(ar, howMany) {
  let selection = [];
  let index;
    while (selection.length < howMany) {
      index = Math.floor(Math.random()*(ar.length)); 
      if(!(selection.includes(ar[index]))) {
        selection.push(ar[index]);
      }
}
return selection
}

// Code your oxygenExpended function here:
function oxygenExpended(obj,orbitCompletion) {
  let spaceWalk = missionDuration(orbitCompletion);
  let oxygen = obj.o2Used(spaceWalk);
  oxygen = Math.round(oxygen*1000)/1000
  return `${obj.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${oxygen}kg of oxygen.`
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];

 //console.log(oxygenExpended(candidateA))
 console.log(selectRandomEntry(crew,1));
 console.log(oxygenExpended(candidateA,3))
