// Write your JavaScript code here!



window.addEventListener("load", function() {

   let listedPlanets;
   
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let newPlanet=pickPlanet(listedPlanets);
addDestinationInfo(document, newPlanet.name, newPlanet.diameter, newPlanet.star, newPlanet.distance, newPlanet.moons, newPlanet.image);
   })
   document.getElementById("faultyItems").style.visibility="hidden";
   let form=document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    
    let pilot=document.querySelector("input[name=pilotName]").value
    let copilot=document.querySelector("input[name=copilotName]").value
    let fuelLevel=document.querySelector("input[name=fuelLevel]").value
    let cargoLevel=document.querySelector("input[name=cargoMass]").value

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
});



});