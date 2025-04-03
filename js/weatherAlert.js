//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

//API status
fetch('https://api.weather.gov')
.then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
.then(response => { document.querySelector("weather-api-status").textContent = (response.status)
})

.catch(error => {
    console.error('Error fetching API status:', error.message);
    alert('There was an error fetching API status. Please try again later.');
  });


//Weather alert

fetch('https://api.weather.gov/alerts/active?area=NV&limit=8') 
.then(response => {
  console.log('Weather API Status:', response.status);
    if (!response.ok) {
        throw new Error(`Weather Alerts HTTP error! Status: ${response.status}`);
    }
    return response.json();
})

.then(response => {
  // Log the response body to the console
  console.log('Response Body Weather API:', response);
  return response;
})

.then(response => { document.querySelector("weather-title").innerHTML = (`<b>${response.title}</b>`)
return response;
})

.then(response => { document.querySelector("weather-updated").textContent = new Date(response.updated.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"}))
return response;
})

//Alert 1 if available
.then(response => { document.querySelector("weather-sender-name").textContent= (response.features[0]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent").textContent= (response.features[0]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline").textContent= (response.features[0]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra").textContent = (response.features[0]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity").textContent = (response.features[0]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event").textContent = (response.features[0]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description").textContent = (response.features[0]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description").textContent = (response.features[0]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction").textContent = (response.features[0]?.properties.instruction)
return response;
})

//Alert 2 if available
.then(response => { document.querySelector("weather-sender-name2").textContent= (response.features[1]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent2").textContent= (response.features[1]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline2").textContent = (response.features[1]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra2").textContent = (response.features[1]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity2").textContent = (response.features[1]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event2").textContent = (response.features[1]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description2").textContent = (response.features[1]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description2").textContent = (response.features[1]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction2").textContent = (response.features[1]?.properties.instruction)
return response;
})

//Alert 3 if available
.then(response => { document.querySelector("weather-sender-name3").textContent= (response.features[2]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent3").textContent= (response.features[2]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline3").textContent = (response.features[2]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra3").textContent = (response.features[2]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity3").textContent = (response.features[2]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event3").textContent = (response.features[2]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description3").textContent = (response.features[2]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description3").textContent = (response.features[2]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction3").textContent = (response.features[2]?.properties.instruction)
return response;
})

//Alert 4 if available
.then(response => { document.querySelector("weather-sender-name4").textContent= (response.features[3]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent4").textContent= (response.features[3]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline4").textContent = (response.features[3]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra4").textContent = (response.features[3]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity4").textContent = (response.features[3]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event4").textContent = (response.features[3]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description4").textContent = (response.features[3]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description4").textContent = (response.features[3]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction4").textContent = (response.features[3]?.properties.instruction)
return response;
})

//Alert 5 if available
.then(response => { document.querySelector("weather-sender-name5").textContent= (response.features[4]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent5").textContent= (response.features[4]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline5").textContent = (response.features[4]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra5").textContent = (response.features[4]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity5").textContent = (response.features[4]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event5").textContent = (response.features[4]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description5").textContent = (response.features[4]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description5").textContent = (response.features[4]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction5").textContent = (response.features[4]?.properties.instruction)
return response;
})

//Alert 6 if available
.then(response => { document.querySelector("weather-sender-name6").textContent= (response.features[5]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent6").textContent= (response.features[5]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline6").textContent = (response.features[5]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra6").textContent = (response.features[5]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity6").textContent = (response.features[5]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event6").textContent = (response.features[5]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description6").textContent = (response.features[5]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description6").textContent = (response.features[5]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction6").textContent = (response.features[5]?.properties.instruction)
return response;
})

//Alert 7 if available
.then(response => { document.querySelector("weather-sender-name7").textContent= (response.features[6]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent7").textContent= (response.features[6]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline7").textContent = (response.features[6]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra7").textContent = (response.features[6]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity7").textContent = (response.features[6]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event7").textContent = (response.features[6]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description7").textContent = (response.features[6]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description7").textContent = (response.features[6]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction7").textContent = (response.features[6]?.properties.instruction)
return response;
})

//Alert 8 if available
.then(response => { document.querySelector("weather-sender-name8").textContent= (response.features[7]?.properties.senderName ?? 'No data available. Alert data is populated when received.')
return response;   
})

.then(response => { document.querySelector("weather-time-sent8").textContent= (response.features[8]?.properties.sent)
return response;   
})

.then(response => { document.querySelector("weather-headline8").textContent = (response.features[7]?.properties.headline)
return response;   
})

.then(response => { document.querySelector("weather-headline-extra8").textContent = (response.features[7]?.properties.parameters.NWSheadline)
return response;
})

.then(response => { document.querySelector("weather-severity8").textContent = (response.features[7]?.properties.severity)
return response;
})

.then(response => { document.querySelector("weather-event8").textContent = (response.features[7]?.properties.event)
return response;
})

.then(response => { document.querySelector("weather-area-description8").textContent = (response.features[7]?.properties.areaDesc)
return response;
})

.then(response => { document.querySelector("weather-description8").textContent = (response.features[7]?.properties.description)
return response;
})

.then(response => { document.querySelector("weather-instruction8").textContent = (response.features[7]?.properties.instruction)
return response;
})

.catch(error => {
    console.error('Error fetching weather data:', error.message);
    alert('There was an error fetching weather data. Please try again later.');
  });



