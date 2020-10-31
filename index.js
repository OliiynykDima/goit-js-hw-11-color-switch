const start = document.getElementById("start");
const stop = document.getElementById("stop");
let isOn = 0;
let randNumOk;
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function stopSwitchColors() {
  isOn = 0;
  setInterval(change, 2000);
}
function changeColors() {
  isOn = 1;
  setInterval(change, 2000);
}

function change(event) {
    if (isOn === 1) {
        const randNum = randomIntegerFromInterval(0, 5);
        document.body.style.backgroundColor = colors[randNum];
        randNumOk = randNum;
    } else {
        document.body.style.backgroundColor = colors[randNumOk];
    }
    event.preventDefault();
}
start.addEventListener("click", changeColors);
stop.addEventListener("click", stopSwitchColors);
