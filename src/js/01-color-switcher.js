
const refs = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]')
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', stopChangingColor);

refs.btnStop.disabled = true;
let intervalId;

function changeColor() {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

function stopChangingColor() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;

    clearInterval(intervalId);
};
