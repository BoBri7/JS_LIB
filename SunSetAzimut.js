/*
  sunAzmt()
  datum
  lat =45, lon=15
*/
function sunAzmt(date, lat,lon){ //★★★★★★★★★★★★★★★★★★
  function mt(d){return moment(d)}
  function sin(x){return Math.sin(x)}
  function asin(x){return Math.asin(x)}
  function cos(x){return Math.cos(x)}
  function acos(x){return Math.acos(x)}
  
  const pi = Math.PI, rad = pi / 180, deg = 180 / pi
  let d, n, delta, h, phi, alpha, A,LST
  if( lat == null) lat = 45
  if( lon == null) lon = 15
// Calculate the number of days since January 1st UTC
//d0 = Math.floor((date - new Date(date.getFullYear(), 0, 1)) / (1000 * 60 * 60 * 24));
  d=mt(date).format("DDD")-1
  // Calculate the declination angle in radians
  delta = -23.45 * rad * Math.cos(2 * pi * (d + 10) / 365);
  // Calculate the local solar time in hours
  n = date.getTimezoneOffset() / 60; // difference between local time and UTC in hours
  LST=date.getHours()+(date.getMinutes() /60)+n+(lon / 15);
  // Calculate the hour angle in radians
  h = (LST - 12) * 15 * rad;
  // Convert the latitude to radians
  phi = lat * rad;
  // Calculate the solar elevation angle in radians
  alpha =asin(sin(delta) *sin(phi) +cos(delta) *cos(phi) * cos(h));
  // Calculate the solar azimuth angle in radians
  A = acos((sin(delta) * cos(phi) -cos(delta) *sin(phi) *cos(h)) /cos(alpha));
// Convert the solar azimuth angle to degrees and adjust for the quadrant
  A = A * deg;
  if (h > 0) { A = 360 - A }
  return Math.round(A)
}
