function gitLit(){
const takeoff = document.getElementById("takeoff");
const flightStatus = document.getElementById("flightStatus");
const shuttleBackground = document.getElementById("shuttleBackground");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

const land = document.getElementById("landing"); 
const missionAbort = document.getElementById("missionAbort");

const rocket = document.getElementById("rocket");
const down = document.getElementById("down");
const up = document.getElementById("up");
const left = document.getElementById("left");
const right = document.getElementById("right");

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
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
});

missionAbort.addEventListener('click', event =>{
    let response = window.confirm("Confirm that you want to abort the mission.");

    if(response){
        flightStatus.innerHTML = "Mission aborted";
        shuttleBackground.style.backgroundColor = "red";
        spaceShuttleHeight.innerHTML = 0;
    }
});

up.addEventListener('click', event =>{
    
    rocket.top = rocket.top-10
})

}
window.addEventListener("load", gitLit);