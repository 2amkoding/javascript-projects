// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("the value of organization is nonprofit", () => {
    expect(launchcode.organization).toBe('nonprofit');
  });

  test("executiveDirector: Jeff", () => {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  test("percentageCoolEmployees: 100", () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("checks array to contain right stuff", () => {
    for (let i = 0; i<launchcode.programsOffered.length; i++) {
    expect(launchcode.programsOffered[0]).toBe('Web Development'); 
    expect(launchcode.programsOffered[1] ==="Data Analysis");
    expect(launchcode.programsOffered[2] === "Liftoff");
    expect(launchcode.programsOffered.length === launchcode.programsOffered.length-1) 
    }
    });
  
  test("num%2 returns 'Launch!", () =>{
    expect(launchcode.launchOutput(4)).toBe('Launch');
  });

  test("num% 2 and 3 returns 'LaunchCode!", () => {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });

  test("num% 2 and 5 returns Launch Rocks!", () => {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
  });

  test("num%3 returns 'Code!", () =>{
    expect(launchcode.launchOutput(9)).toBe('Code!');
  });

  test("num%3 and 5 returns 'Code Rocks!", () => {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!')
  })

  test("num%5 returns 'Rocks!", () => {
    expect(launchcode.launchOutput(25)).toBe('Rocks!');
  });

  test("num % 2, 3, 5 returns 'LaunchCode Rocks!", () => {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });

  test("not modulus 2, 3, 5 returns 'Rutabagas! That doesn't work.'", () => {
    expect(launchcode.launchOutput('z')).toBe("Rutabagas! That doesn't work.");
  });
});