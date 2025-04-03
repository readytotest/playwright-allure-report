/*

Fetching Earthquake Data: The fetch function makes a request to the USGS Earthquake API for data about earthquakes that happened in the last hour.

Checking if the Request Worked: After the request is made, the .then(response => {...}) block checks if the request was successful. If it wasn’t, an error is thrown, and it shows a message.

Getting the Data: Once the request is successful, we convert the response into a format we can use. This JSON data contains earthquake details like time, magnitude, location, etc.

Converting the Time: The time in the API response is in Unix Time, which is a numeric format not easy to read by humans. The code converts it into a more readable date and time, adjusting it to Pacific Time.

Displaying the Earthquake's Magnitude: The magnitude of the earthquake is pulled from the data and displayed on the webpage. If no magnitude is found, it defaults to 0.

Displaying the Location: The location of the earthquake is shown on the webpage. It’s extracted from the API response and displayed.

Displaying the Coordinates: The code extracts the earthquake's latitude and longitude (east-west position) and shows them on the page.

Displaying the Depth: The depth of the earthquake is also displayed. If no depth is found, it defaults to 0.

Link to the Earthquake on a Map: The API response includes a URL, but it needs to be modified slightly to link directly to a map. This part of the code fixes the URL and creates a clickable link to show the earthquake's location on a map.

Handling Errors: If something goes wrong while trying to get the earthquake data, the .catch(error => {...}) block runs. It will log the error and display an alert to the user telling them there was a problem, so the earthquake data might not show up.

However, the alert will only pop up once per hour, thanks to the use of localStorage. This prevents the alert from showing repeatedly and annoying the user.

*/

fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson")
  .then((response) => {
    console.log("Earthquake API Status:", response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })

  .then((response) => {
    // Log the response body to the console
    console.log("Response Body Earthquake API:", response);
    return response;
  })

  //The response is in Unix Time, which isn't human readable so converting time to Pacific.
  .then((response) => {
    document.querySelector("earthquake-time").textContent = new Date(
      response.features[0]?.properties.time
    ).toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    return response;
  })

  .then((response) => {
    document.querySelector("earthquake-mag").textContent = (response.features[0]?.properties.mag ?? 0).toFixed(2);
    return response;
  })

  .then((response) => {
    document.querySelector("earthquake-place").textContent = response.features[0]?.properties.place;
    return response;
  })

  .then((response) => {
    document.querySelector("earthquake-long").textContent = response.features[0]?.geometry.coordinates[0];
    return response;
  })

  .then((response) => {
    document.querySelector("earthquake-lat").textContent = response.features[0]?.geometry.coordinates[1];
    return response;
  })

  .then((response) => {
    document.querySelector("earthquake-depth").textContent = (
      response.features[0]?.geometry.coordinates[2] ?? 0
    ).toFixed(2);
    return response;
  })

  .then((response) => {
    let receivedUrl = response.features[0]?.properties.url.split("/");
    /* By default the URL response includes /executive as the last directory and we are replacing that directory with /map
because we want to have a link that points directly to the map page */
    let replaceLastDirectory = receivedUrl.slice(0, receivedUrl.length - 0).join("/");
    document.querySelector("earthquake-url").innerHTML =
      `<a href="${replaceLastDirectory}/map" target="_blank" rel="noopener noreferrer">View on map</a>`;
    return response;
  })

  .catch((error) => {
    console.error("Error fetching earthquake data:", error.message);

    /*
    We don't want this alert popping up constantly for the visitor
    because it will be too annoying. So if they have never seen it
    then we show it to them or if they have seen it more than one 
    hour ago, we will show it again.

    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
  */

    const alertQuakeDismissed = localStorage.getItem("alertQuakeDismissed");
    const dismissedTime = localStorage.getItem("dismissedTime");

    // Check if the alert should be shown
    if (!alertQuakeDismissed || (dismissedTime && Date.now() - dismissedTime > 3600000)) {
      // Show the alert
      window.alert("There was an error fetching earthquake data.\nThe earthquake section on this page might be blank.");

      // Set a flag in localStorage to indicate the alert has been shown
      localStorage.setItem("alertQuakeDismissed", "true");
      localStorage.setItem("dismissedTime", Date.now());
    }
  });
