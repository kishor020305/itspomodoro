let timerInterval;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;
let alarm = document.getElementById('alarm');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alarm.play();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = parseInt(document.getElementById('timer').textContent.split(':')[0]) * 60;
    updateTimerDisplay();
    isRunning = false;
}

function setMode(minutes) {
    clearInterval(timerInterval);
    timeLeft = minutes * 60;
    updateTimerDisplay();
    isRunning = false;
}

updateTimerDisplay();
