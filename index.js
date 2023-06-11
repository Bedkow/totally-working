const { mouse, left, right } = require("@nut-tree/nut-js");

async function workHard() {
  await mouse.move(right(1));
  await mouse.move(left(1));
}

let desiredIntervalInSeconds = 60;

let interval = desiredIntervalInSeconds * 1000;

(async () => {
  setInterval(workHard, interval)
})();