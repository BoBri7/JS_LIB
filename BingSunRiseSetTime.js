function calculateSunriseSunset(date, lat, long) {
    // Convert latitude to radians
    var latRad = lat * Math.PI / 180;

    // Calculate the day of the year
    var now = date;
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    // Calculate the declination of the sun
    var declination = 23.45 * Math.sin(2 * Math.PI * (284 + day) / 365);

    // Calculate the time difference from solar noon
    var timeDiff = 12 * Math.acos((Math.sin(-0.83 * Math.PI / 180) - Math.sin(latRad) * Math.sin(declination * Math.PI / 180)) / (Math.cos(latRad) * Math.cos(declination * Math.PI / 180))) / Math.PI;

    // Calculate solar noon (the time when the sun is at its highest point)
    var solarNoon = 12 - (long / 15);

    // Calculate sunrise and sunset times
    var sunrise = solarNoon - timeDiff;
    var sunset = solarNoon + timeDiff;

    return {
        sunr: sunrise,
        suns: sunset
    };
}


//=========
let date = new Date();
let lat = 46; // Latitude for Metlika, Slovenia
let long = 15; // Longitude for Metlika, Slovenia

s=""
//var az= sunSetAzimuth(date, lat, lon); //= bing2
for(let i=-1;i<12;i++){
 date = new Date(2023, 2, 21); 
  lati =lat //-40+i*5
  longi =long//+i*5

  //az=calculateSunsetAzimuth(date, lati, longi) //= bing3
  sunRS= calculateSunriseSunset(date, lati, longi)

  s+=moment(date).format("DD.MM.YY  ")
  s+="lat="+lati+" lng="+longi
  s+=" Rise ="+t(sunRS.sunr
  s+="Set ="   +t(sunRS.suns

//s+=("===="+az.toFixed(1)).slice(-7)
s+="\n"
}

/* ★★★★★★ => BING = Copilot
write javascript function to calculate sun rise set time from date and lat/long without external library

var date = new Date();
var lat = 46.4875; // Latitude for Metlika, Slovenia
var long = 15.3156; // Longitude for Metlika, Slovenia

var times = calculateSunriseSunset(date, lat, long);
console.log("Sunrise is at " + times.sunrise + " hours");
console.log("Sunset is at " + times.sunset + " hours");
*/

