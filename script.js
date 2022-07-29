const tipBtns = Array.from(
	document.querySelectorAll('.tips-container input[type="radio"]')
);
const bill = document.querySelector("#bill");
const customTip = document.querySelector("#custom");
const people = document.querySelector("#people");
const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset");
let tipPercent = 0;

function checkError(value, id) {
	const errors = document.querySelectorAll(".error");
	let num;
	switch (id) {
		case "bill":
			num = 0;
			break;
		case "people":
			num = 1;
			break;
	}

	if (value === "" || value <= 0) {
		errors[num].style.display = "block";
		if (num === 0) {
			bill.style.borderColor = "indianred";
		} else {
			people.style.borderColor = "indianred";
		}
	} else {
		errors[num].style.display = "none";
		if (num === 0) {
			bill.style.borderColor = "hsl(183, 100%, 15%)";
		} else {
			people.style.borderColor = "hsl(183, 100%, 15%)";
		}
	}
	calculate();
}

function checkCustomTip(value) {
	if (value <= 0 || value > 100) {
		customTip.value = "";
		customTip.style.setProperty("--r", "indianred");
		customTip.style.borderColor = "indianred";
		customTip.placeholder = "1-100%";
	} else {
		customTip.style.borderColor = "hsl(183, 100%, 15%)";
		if (customTip.value != "") {
			for (const btn of tipBtns) {
				btn.checked = false;
			}
		}
		tipPercent = customTip.value;
		calculate();
	}
}
function tipOption(percent) {
	customTip.value = "";
	customTip.style.borderColor = "hsl(189, 41%, 97%)";
	customTip.placeholder = "Custom";
	customTip.style.setProperty("--r", "hsl(184, 14%, 56%)");
	tipPercent = percent.value;
	calculate();
}
function calculate() {
	if (tipPercent > 0 && bill.value > 0 && people.value > 0) {
		let tipPerson;
		let totalPerson;
		tipPerson = (bill.value * (tipPercent / 100)) / people.value;
		totalPerson = bill.value / people.value + tipPerson;
		tipAmount.textContent = "$" + Math.round(tipPerson * 100) / 100;
		total.textContent = "$" + Math.round(totalPerson * 100) / 100;
		resetBtn.classList.remove("inactive");
		resetBtn.disabled = false;
	} else {
		resetBtn.classList.add("inactive");
		resetBtn.disabled = true;
		tipAmount.textContent = "$0.00";
		total.textContent = "$0.00";
	}
}

function resetVal() {
	tipPercent = 0;
	tipAmount.textContent = "$0.00";
	total.textContent = "$0.00";
	bill.style.borderColor = "hsl(189, 41%, 97%)";
	people.style.borderColor = "hsl(189, 41%, 97%)";
	customTip.placeholder = "Custom";
	customTip.style.borderColor = "hsl(189, 41%, 97%)";
	customTip.style.setProperty("--r", "hsl(184, 14%, 56%)");
	resetBtn.classList.add("inactive");
}
