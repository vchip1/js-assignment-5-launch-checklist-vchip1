// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let newPlanet=pickPlanet(listedPlanets);
addDestinationInfo(document, newPlanet.name, newPlanet.dismeter, newPlanet.star, newPlanet.distance, newPlanet.moons, newPlanet.image);
   })
   document.getElementNyId("faultyItems").style.visibility="hidden";
   let form=document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let pilot=document.querySelector("input[name=pilotName]").value
    let copilot=document.querySelector("input[name=copilotName]").value
    let fuelLevel=document.querySelector("input[name=fuelLevel]").value
    let cargoMass=document.querySelector("input[name=cargoMass]").value

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
})



});