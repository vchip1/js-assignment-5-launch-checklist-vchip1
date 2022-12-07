// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   //Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML= 

   `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
   
}

function validateInput(testInput) {
    
   if (testInput = "") {
    return "Empty";
   } else if (isNaN(testInput)===true){
    return "Not a Number";
   } else if (isNaN(testInput)===false) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus=document.getElementById("pilotStatus");
   let copilotStatus=document.getElementById("copilotStatus");
   let fuel=document.getElementById("fuelStatus");
   let cargo=document.getElementById("cargoStatus");

   if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty"){
    console.error("Error: One or more fields are blank. Please complete all fields.")
   } else if (validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" || validateInput(fuelLevel)==="Not a Number" || validateInput(cargoLevel)==="Not a Number"){
    console.error("Error: One or more fields contains an invalid entry.")
   } else {
    list.style.visibility="visible";
    pilotStatus.innerHTML=`${pilot} is prepared for launch!`
    copilotStatus.innerHTML=`${copilot} is also prepared for launch!`
    let launchStatus=document.getElementById("launchStatus");
    if ((fuelLevel<10000) && (cargoLevel<= 10000)){
launchStatus.innerHTML="Shuttle not ready for launch"
launchStatus.style.color="Red"
        fuel.innerHTML="Not enough fuel for launch"
cargo.innerHTML="Mass low enough for launch"
    } else if ((fuelLevel>=10000) && (cargoLevel> 10000)){
        launchStatus.innerHTML="Shuttle not ready for launch"
        launchStatus.style.color="Red"
        fuel.innerHTML="Fuel level sufficient for launch"
        cargo.innerHTML="Mass too high for launch"
    } else if ((fuelLevel<10000) && (cargoLevel>10000)){
        launchStatus.innerHTML="Shuttle not ready for launch"
        launchStatus.style.color="Red"
        fuel.innerHTML="Not enough fuel for launch"
        cargo.innerHTML="Mass too high for launch"
    } else {
        launchStatus.innerHTML="Shuttle not ready for launch"
        launchStatus.style.color="Green"
        fuel.innerHTML="Fuel level sufficient for launch"
        cargo.innerHTML="Mass low enough for launch"
    }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
