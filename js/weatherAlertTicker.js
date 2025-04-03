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
  });


//Weather alert

fetch('https://api.weather.gov/alerts/active?severity=Extreme,Severe,Moderate,Minor&limit=1') 
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

// .then(response => { document.querySelector("weather-area-description").textContent = (response.features[0]?.properties.areaDesc)
// return response;
// })

// .then(response => { document.querySelector("weather-description").textContent = (response.features[0]?.properties.description)
// return response;
// })

// .then(response => { document.querySelector("weather-instruction").textContent = (response.features[0]?.properties.instruction)
// return response;
// })

.catch(error => {
    console.error('Error fetching weather data:', error.message);
  });