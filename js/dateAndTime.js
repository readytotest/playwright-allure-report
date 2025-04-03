/*

(^_^) [o_o] (^.^)  (".") ($.$)
______________________________________________________________________________________________________
___                                                                                                ___
___  JavaScript References Used:                                                                   ___
___  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date         ___
___  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice ___
___  https://developer.mozilla.org/en-US/docs/Web/API/setInterval                                  ___
___                                                                                                ___
___  Approach:                                                                                     ___
___  Using slice so the ms is always at three digits                                               ___
___  Using en-ZA format so it uses military time                                                   ___
___                                                                                                ___
______________________________________________________________________________________________________

*/

function timeAndDateRealTime() {
  const getTimeDate = new Date();
  const mill = getTimeDate.getMilliseconds();
  const mill3Places = `00${mill}`.slice(-3);
  const dateTimePacific = `${getTimeDate.toLocaleString("en-ZA", {
    timeZone: "America/Los_Angeles",
  })}.${mill3Places}`;
  document.getElementById("current-time").textContent = dateTimePacific;
}

//Call the function directly first so there isn't a slight delay in displaying the text

timeAndDateRealTime();
setInterval(timeAndDateRealTime, 75);
