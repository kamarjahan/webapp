let isMining = false;
let minedCoins = 0;
let hashRate = 0;

const statusElement = document.getElementById('status');
const startButton = document.getElementById('start-miner');
const stopButton = document.getElementById('stop-miner');
const coinsElement = document.getElementById('coins');
const hashRateElement = document.getElementById('hash-rate');

function updateUI() {
    coinsElement.innerText = minedCoins.toFixed(4);
    hashRateElement.innerText = `${hashRate} H/s`;
}

function startMining() {
    isMining = true;
    statusElement.innerText = 'Mining';
    startButton.disabled = true;
    stopButton.disabled = false;
    hashRate = 1000; // Fake Hash Rate
    minedCoins = 0;

    const miningInterval = setInterval(() => {
        if (!isMining) {
            clearInterval(miningInterval);
        } else {
            minedCoins += Math.random() * 0.0001;
            updateUI();
        }
    }, 1000);
}

function stopMining() {
    isMining = false;
    statusElement.innerText = 'Stopped';
    startButton.disabled = false;
    stopButton.disabled = true;
    hashRate = 0;
    updateUI();
}

startButton.addEventListener('click', startMining);
stopButton.addEventListener('click', stopMining);
