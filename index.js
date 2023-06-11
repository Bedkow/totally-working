const { mouse, left, right } = require("@nut-tree/nut-js");

async function workHard() {
  await mouse.move(right(100));
  await mouse.move(left(100));
  console.log("moved")
}

let desiredIntervalInSeconds = 5;

let interval = desiredIntervalInSeconds * 1000;

(async () => {
  setInterval(workHard, interval)
})();