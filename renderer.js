// const information = document.getElementById("info");

// information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;

// const func = async () => {
//   const response = await window.versions.ping();
//   console.log(response)
// }

// func();

const countdownCheckbox = document.getElementById("countdown-checkbox");
const countdownInput = document.getElementById("countdown-input");

const countdownInputManagement = () => {
	if (countdownCheckbox.checked) {
    countdownInput.setAttribute("disabled", "")
  } else {
    countdownInput.removeAttribute("disabled", "");
  }
};

countdownInputManagement();

countdownCheckbox.addEventListener("change", () => {
	countdownInputManagement();
  countdownInput.value = "";
});
