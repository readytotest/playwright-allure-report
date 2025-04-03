// -----------------------------------------------------
// The below script is a workaround since Safari has issues with scrolling text in CSS
// Safari mishandles the CSS animations in the weather ticker
// after page reloads due to caching issues. The animation can slow down or become inconsistent
// until the cache is cleared. This script works around that by forcing the browser to
// recalculate the animation on page load.
// -----------------------------------------------------

window.addEventListener("load", function () {
  const weatherAlert = document.querySelector(".weather-alert");

  // Force a reflow by reading the offsetHeight
  weatherAlert.style.animation = "none"; // Temporarily stop the animation
  /* The next line forces the browser to recalculate the layout, refreshing the element’s rendering.
    The logging part isn't necessary for the functionality, but it’s added here as a visible reminder
    of what’s happening when the offsetHeight is accessed. */
  console.log(
    "Accessing offsetHeight forces the browser to recalculate styles. The value of offsetHeight is",
    weatherAlert.offsetHeight,
    "pixels, which represents the height of the .weather-alert-container element."
  );
  weatherAlert.style.animation = ""; // Restart the animation
});

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
