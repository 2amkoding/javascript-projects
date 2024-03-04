function gitLit(){
const takeoff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

const land = document.getElementById("landing"); 

takeoff.addEventListener('click', event =>{
    let response  =window.confirm("Confirm that the shuttle is ready for takeoff.");
    
    if(response){
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
    }
});

land.addEventListener('click', event => {
    let response = window.confirm("The shuttle is landing. Landing gear engaged.");

    if(response){
        flightStatus.innerHTML = "The shuttle has landed.";
    }
})

}
window.addEventListener("load", gitLit);