
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num) {
    if(num%5===0 && num%3===0 && num%2 ===0){
      return 'LaunchCode Rocks!'
    };

    while(num %2 ===0) {
      if(num%3 === 0) {
        return 'LaunchCode!'
      } else if(num%5===0) {
        return 'Launch Rocks!'
      } else {
    return 'Launch'
      }  
    };
    while(num%3===0) {
      if(num%5===0) {
        return 'Code Rocks!'
      }else {
        return 'Code!'
      }
    };
    
    if(num%5===0) {
      return 'Rocks!'
    } else{
      return "Rutabagas! That doesn't work."
    };
  
  }

};

module.exports = launchcode;

