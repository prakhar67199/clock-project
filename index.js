// hour hand logic
// 12 hour = 360deg
//  1 hour = 360/12 => 30deg
//  h hour = (30h + m/2) deg

// 60 min = 30deg
// 1 min = 30/60 => 1/2 deg
// m minutes = (1/2)m deg

// minute hand logic
// 60min = 360deg
// 1 min = 360/60 => 6deg
// m min = 6m deg

// second hand logic
//  60 sec = 360deg
//  1 sec = 360/60 => 6deg
//  s sec = 6s deg




// javascript logic
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime()
{
    let date = new Date();

    // fetch out hours,min,sec value from date variable
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // logic for hands rotation
    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
 }
setInterval(displayTime ,1000);