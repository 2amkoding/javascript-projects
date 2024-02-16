//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores = []) {
       this.name = name;
       this.mass = mass;
       this.scores = scores;
    }
    addScore(score) {
        this.scores.push(score);
    }
    averageScore() {
        let sum = 0;
        let avg = 0;
        for(let i = 0; i < this.scores.length; i++) {
            sum+= this.scores[i]
        }
       avg = Math.round((sum/this.scores.length)*10)/10
      
       return avg
    }

    status(){
        if (this.averageScore() >= 90){
           return `${this.name} earned an average test score of ${this.averageScore()}% and has a status of Accepted.`;
          }
          else if (this.averageScore() >= 80){
              return `${this.name} earned an average test score of ${this.averageScore()}% and has a status of Reserved.`;
          }
          else if (this.averageScore() >= 70){
              return `${this.name} earned an average test score of ${this.averageScore()}% and has a status of Probationary.`;
          }
          else {
              return `${this.name} earned an average test score of ${this.averageScore()}% and has a status of Rejected.`;
          }
      }

     }
 

 let bubbaBear = new CrewCandidate('bubbaBear', 135, [88,85,90]);
 let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
 let gladGator = new CrewCandidate('Glad Gator', 225, [75,78,62]);

 console.log(bubbaBear);
 console.log(merryMaltese);
 console.log(gladGator);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubbaBear.addScore(83);
console.log(merryMaltese.averageScore())
console.log(bubbaBear.status())
console.log(merryMaltese.status())
console.log(gladGator.status())


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let reserveCount = 0;

    while (!(gladGator.averageScore() >= 80)){
        gladGator.addScore(100);
        reserveCount++;
    }

    console.log(gladGator.scores);
    console.log(`${gladGator.name} took ${reserveCount} to reach Reserve status`);
    console.log(gladGator.status());

    let acceptCount = 0;

    while (!(gladGator.averageScore() >= 90)){
        gladGator.addScore(100);
        acceptCount++;
    }

    console.log(gladGator.scores);
    console.log(`${gladGator.name} took ${acceptCount} to reach Accept status`);
    console.log(gladGator.status());