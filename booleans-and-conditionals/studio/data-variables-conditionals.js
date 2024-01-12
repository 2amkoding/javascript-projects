// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 8
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp	= -300
let maximumFuelTemp	= -150
let fuelLevel = "100%"
let weatherStatus = "clear"
let preparedForLiftOff = true
 
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    
}   else {
    console.log('Astronaut Count: FAILED!')
    
}

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {

}   else {
    console.log(`Astronaut Status: FAILED!`)
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    
} else {
    console.log("Total Mass: FAILED!")

}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (!((fuelTempCelsius < -300)) || fuelTempCelsius> (!(-150))){
    
} else {
    console.log(`Fuel Temperature: FAILED!`)
}
// add logic below to verify the fuel level is at 100%
if(fuelLevel === "100%"){
    
} else {
    console.log(`Fuel Level: FAILED!`)
}
// add logic below to verify the weather status is clear
if (weatherStatus = "clear"){
    
} else{
    console.log(`Weather Status: FAILED!`)
}
// Verify shuttle launch can proceed based on above conditions


if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg < maximumMassLimit&& (!(fuelTempCelsius < -300)) || fuelTempCelsius> (!(-150)) && fuelLevel === "100%" && weatherStatus === "clear"){
    
    console.log(`ALL SYSTEMS GO. READY FOR LAUNCH.\n`)
    console.log(`Date: ${date} \nTime: ${time}\nAstronaut Count: ${astronautCount}\nCrew Mass: ${crewMassKg}\nFuel Mass: ${fuelMassKg}\nTotal Mass: ${totalMassKg}\nFuel Temperature:  ${fuelTempCelsius} \nWeather Status: ${weatherStatus}`)
    //console.log(`\nHave a safe flight!`)

} else {console.log(`\nLAUNCH SCRUBBED!\n`)
    console.log(`Date: ${date} \nTime: ${time}\nAstronaut Count: ${astronautCount}\nCrew Mass: ${crewMassKg}\nFuel Mass: ${fuelMassKg}\nTotal Mass: ${totalMassKg}\nFuel Temperature:  ${fuelTempCelsius} \nWeather Status: ${weatherStatus}`)
}
