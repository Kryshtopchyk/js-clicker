let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
const refresh = document.getElementById('refresh');

refresh.hidden = true;
button.onclick = start;
refresh.onclick = refresgGame;

function start() {
    const startTime = Date.now();

    display.textContent = formatTime(TIMEOUT);
    counter.textContent = clicks++;

    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime;
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100)

    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Game Over';
        refresh.hidden = false;

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

function refresgGame() {
    clicks = 0;
    refresh.hidden = true;
    display.textContent = '';
    counter.textContent = '';
    button.onclick = start;
}

function formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}
