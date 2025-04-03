/*
    ┌───────────────────────────────────────────────────────────────────────┐
    │ We don't want this alert popping up constantly for the visitor        │
    │ because it will be too annoying. So if they have never seen it        │
    │ then we show it to them or if they have seen it more than one         │
    │ hour ago, we will show it again.                                      │
    │                                                                       │
    │ Links:                                                                │
    │ https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage  │
    │ https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API      │
    └───────────────────────────────────────────────────────────────────────┘
*/

const dismissedTime = localStorage.getItem("dismissedTimeTinker");
const alertTinkerDismissed = localStorage.getItem("alertTinkerDismissed");

// Check if the alert should be shown
if (!alertTinkerDismissed || (dismissedTime && Date.now() - dismissedTime > 3600000)) {
  // Show the alert
  window.alert(
    "Tinker:\nTo make small changes or adjustments to something in order to improve it or to learn more about it.\n\nExample usage:\n- He enjoys tinkering with old cars to learn how they work.\n- She spent the afternoon tinkering in her workshop."
  );

  // Set a flag in local storage to indicate the alert has been shown
  localStorage.setItem("alertTinkerDismissed", "true");
  localStorage.setItem("dismissedTimeTinker", Date.now());
}
