const tipBtns = Array.from(
	document.querySelectorAll('.tips input[type="radio"]')
);
const customTip = document.querySelector("#custom");
const people = document.querySelector("#people");
const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset");

function checkError(value, id) {
	let num;
	const errors = document.querySelectorAll(".error");
	if (id === "bill") {
		num = 0;
	} else if (id === "people") {
		num = 1;
	}
	if (value === "" || value <= 0) {
		errors[num].style.display = "block";
	} else {
		errors[num].style.display = "none";
		return;
	}
}

function checkCustomTip(value) {
	const billError = document.querySelector(".error-bill");
	if (value === "" || value <= 0) {
		billError.style.display = "block";
	} else {
		billError.style.display = "none";
		return;
	}
}

for (const btn of tipBtns) {
	btn.addEventListener("click", () => {
		console.log(btn);
	});
}
