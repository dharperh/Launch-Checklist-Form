window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
            const missionTarget = document.getElementById("missionTarget");
            const randomPlanet = Math.floor(Math.random()*json.length)
            const planet = json[randomPlanet]
            missionTarget.innerHTML += `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planet.name}</li>
               <li>Diameter: ${planet.diameter}</li>
               <li>Star: ${planet.star}</li>
               <li>Distance from Earth: ${planet.distance}</li>
               <li>Number of Moons: ${planet.moons}</li>
            </ol>
            <img src="${planet.image}"></img>`
        });
    });



     
        let form = document.getElementById("launchForm");
        form.addEventListener("submit", function (event) {
           event.preventDefault();
     
           let pilotName = document.querySelector("input[name=pilotName]");
           let copilotName = document.querySelector("input[name=copilotName]");
           let fuelLevel = document.querySelector("input[name=fuelLevel]");
           let cargoMass = document.querySelector("input[name=cargoMass]");
     
           let faultyItems = document.getElementById("faultyItems");
           let pilotStatus = document.getElementById("pilotStatus");
           let copilotStatus = document.getElementById("copilotStatus");
           let fuelStatus = document.getElementById("fuelStatus");
           let cargoStatus = document.getElementById("cargoStatus");
           let launchStatus = document.getElementById("launchStatus");
           let letters = /^[A-Za-z]+$/;

           if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
              alert("All fields are required.");
     

           } else if ((!pilotName.value.match(letters)) || (!copilotName.value.match(letters)) || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
              alert("Make sure to enter valid information for each field.");
     
           } else {
               if(fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
                faultyItems.style.visibility = "visible";
                pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready.`;
                copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready.`;
                cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
                launchStatus.style.color = "green";
                launchStatus.innerHTML = `Shuttle ready for launch.`;
                fuelStatus.innerHTML = `Fuel level high enough for launch.`;
               }

            if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
              faultyItems.style.visibility = "visible";
              pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
              copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
              fuelStatus.innerHTML = (`Fuel level too low for launch.`);
              launchStatus.style.color = "red";
              launchStatus.innerHTML = (`Shuttle not ready for launch.`);
              cargoStatus.innerHTML = (`Cargo mass too much for launch.`);
     
           } 
           
           if (fuelLevel.value > 10000 && cargoMass.value > 10000) {
              faultyItems.style.visibility = "visible";
              pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
              copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
              cargoStatus.innerHTML = (`Cargo mass too much for launch.`);
              launchStatus.style.color = "red";
              launchStatus.innerHTML = (`Shuttle not ready for launch.`);
              fuelStatus.innerHTML = (`Fuel level high enough for launch.`);
     
           } 
     
            if (fuelLevel.value < 10000 && cargoMass.value < 10000) {
              faultyItems.style.visibility = "visible";
              pilotStatus.innerHTML = (`Pilot ${pilotName.value} is ready.`);
              copilotStatus.innerHTML = (`Co-pilot ${copilotName.value} is ready.`);
              cargoStatus.innerHTML = (`Cargo mass low enough for launch.`);
              launchStatus.style.color = "red";
              launchStatus.innerHTML = (`Shuttle not ready for launch.`);
              fuelStatus.innerHTML = (`Fuel level too low for launch.`);
           };
         };
    
        });






    
    


    


    });




