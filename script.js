const tipBtns = Array.from(
	document.querySelectorAll('.tips input[type="radio"]')
);

for (const btn of tipBtns) {
	btn.addEventListener("click", () => {
		console.log(btn);
	});
}
