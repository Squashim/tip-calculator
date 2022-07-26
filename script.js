const tipBtns = document.querySelectorAll('.tips input[type="radio"]');
console.log(tipBtns);
tipBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		console.log(btn);
	});
});
