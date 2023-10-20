/*

*/
// Define some constants and variables
const pi = Math.PI; // pi constant
const rad = pi / 180; // radians per degree
const deg = 180 / pi; // degrees per radian
var d, n, delta, h, phi, alpha, A; // variables for calculations

// Get the current date and time
var date = new Date();

// Get the latitude and longitude of the location
var lat = 45.65; // latitude in degrees (Metlika, Slovenia)
var lon = 15.32; // longitude in degrees (Metlika, Slovenia)

// Calculate the number of days since January 1st UTC
d = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24));

// Calculate the declination angle in radians
delta = -23.45 * rad * Math.cos(2 * pi * (d + 10) / 365);

// Calculate the local solar time in hours
n = date.getTimezoneOffset() / 60; // difference between local time and UTC in hours
var LST = date.getHours() + (date.getMinutes() / 60) + n + (lon / 15);

// Calculate the hour angle in radians
h = (LST - 12) * 15 * rad;

// Convert the latitude to radians
phi = lat * rad;

// Calculate the solar elevation angle in radians
alpha = Math.asin(Math.sin(delta) * Math.sin(phi) + Math.cos(delta) * Math.cos(phi) * Math.cos(h));

// Calculate the solar azimuth angle in radians
A = Math.acos((Math.sin(delta) * Math.cos(phi) - Math.cos(delta) * Math.sin(phi) * Math.cos(h)) / Math.cos(alpha));

// Convert the solar azimuth angle to degrees and adjust for the quadrant
A = A * deg;
if (h > 0) {
  A = 360 - A;
}

// Display the result
console.log("The sunset azimuth angle is " + A.toFixed(2) + " degrees.");
