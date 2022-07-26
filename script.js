const bill = document.getElementById("bill");
const tipLabels = document.querySelectorAll(".tips label");
const tip = document.querySelectorAll('input[name = "tip"]');
const customTip = document.querySelector(".tips input[number]");

for (let i = 0; i < tipLabels.length; i++) {
	customTip.addEventListener("onentry");
}
