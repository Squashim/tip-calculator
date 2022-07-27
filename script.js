const tipBtns = Array.from(
	document.querySelectorAll('.tips input[type="radio"]')
);
const bill = document.querySelector("#bill");
const customTip = document.querySelector("#custom");
const people = document.querySelector("#people");
const tipAmount = document.querySelector(".tip-amount");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset");

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
		return;
	}
}

function checkCustomTip(value) {
	if (value <= 0 || value > 100) {
		customTip.value = "";
		customTip.style.setProperty("--r", "indianred");
		customTip.style.borderColor = "indianred";
		customTip.placeholder = "0-100%";
	} else {
		customTip.style.borderColor = "hsl(183, 100%, 15%)";
		return;
	}
}

for (const btn of tipBtns) {
	btn.addEventListener("click", () => {
		console.log(btn);
	});
}
