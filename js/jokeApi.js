fetch("https://official-joke-api.appspot.com/jokes/knock-knock/random")
  .then((response) => {
    console.log("Joke API Response Status:", response.status);
    if (!response.ok) {
      throw new Error(`Joke API Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Joke API Response Body:", data);
    const joke = data[0];

    document.getElementById("joke-id").textContent = `Joke ID: ${joke?.id ?? "This is unavailable at the moment"}`;
    document.getElementById("joke-setup").textContent = joke?.setup ?? "Joke setup unavailable";
    document.getElementById("joke-punchline").textContent = joke?.punchline ?? "Joke punchline unavailable";
  })
  .catch((error) => {
    console.error(`Problem with joke API! ${error.message}`);
    document.getElementById("joke-id").textContent = "Looks like the API is down!";
    document.getElementById("joke-setup").textContent = "A joke should be here...but something went wrong.";
    document.getElementById("joke-punchline").textContent = error.message;
  });
