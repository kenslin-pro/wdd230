// Get the current year
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Get the last modified date of the document
var lastModifiedDate = new Date(document.lastModified);
document.getElementById("lastModified").textContent = "Last modified: " + lastModifiedDate;

const hamburgerButton = document.getElementById('hamburgerButton');
const mainMenu = document.getElementById('mainMenu');
const darkModeToggle = document.getElementById('darkModeToggle');
const mainContent = document.querySelector('main');

// Hamburger button click event
hamburgerButton.addEventListener('click', () => {
  mainMenu.style.display = mainMenu.style.display === 'none' ? 'block' : 'none';
});

// Dark mode toggle button click event
darkModeToggle.addEventListener('click', () => {
  mainContent.classList.toggle('dark-mode');
});
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});
