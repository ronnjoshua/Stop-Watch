// Variables for buttons

const startStopBtn_btn = document.querySelector('#startStopBtn');
const resetBtn_btn = document.querySelector('#resetBtn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variables for set Interval & timer status

let timerInterval = null;
let timerStatus = "stopped";


// Stop Watch function

function stopWatch() {



    seconds++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    }
    else {
        leadingSeconds = seconds;
    }

    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    }
    else {
        leadingMinutes = minutes;
    }

    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    }
    else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

//window.setInterval(stopWatch, 1000);

startStopBtn_btn.addEventListener('click', function(){
    if(timerStatus === 'stopped'){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id= "pause"></i>`
        timerStatus = "started";
    }
    else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id= "play"></i>`
        timerStatus = "stopped";
    }

});

resetBtn_btn.addEventListener('click', function() {

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id= "play"></i>`

});