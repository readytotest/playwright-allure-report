/*Cypress/JavaScript test playground..
NOTE: This is an experimental spec for testing things out and
will probably change frequently. Some things may not work.*/

//Time Date Stamper https://day.js.org/docs/en/installation/installation
const easternTimeDateWithUtcOffset = function () {
  const dayjs = require("dayjs");
  const utc = require("dayjs/plugin/utc");
  const timezone = require("dayjs/plugin/timezone"); // dependent on utc plugin
  //const advanced = require("dayjs/plugin/advancedFormat")
  dayjs.extend(utc);
  dayjs.extend(timezone);
  //dayjs.extend(advanced)
  //dayjs.tz.setDefault('America/New_York')

  return dayjs()
    .tz("America/New_York")
    .format("YYYY-MM-DD" + "THH:mm:ssZ");
};
/*Need to convert to a string or Cypress errors trying to type the date
This will print out the current date, military time, UTC offset and a text that says Eastern
Example: 2024-01-01T23:14:13-05:00 (Eastern)*/
const timeDateStamp = String(easternTimeDateWithUtcOffset() + " (Eastern)");

describe("Experimental Tests Here", () => {
  it("Testing the time stamper", () => {
    cy.visit("https://google.com");
    cy.get("#APjFqb").realType(`Time stamper: ${timeDateStamp}`);
  });
});
