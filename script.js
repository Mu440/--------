const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopBtn.innerHTML = "Stop";
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.innerHTML = "Start";
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.innerHTML = "Start";
    display.innerHTML = "00:00:00:000";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
