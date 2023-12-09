function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let intervalId = null;

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

startButton.addEventListener('click', () => {
    
    startButton.disabled = true;

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    // document.body.style.backgroundColor = ''; //Reset to default background color
    startButton.disabled = false;
});



