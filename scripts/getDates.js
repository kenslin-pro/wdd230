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

//weather


  // Function to fetch weather data from OpenWeatherMap API
  function fetchWeatherData() {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = 'ff9f2ec82564c42998e466a10a7dbb7a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extract required information from the API response
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        // Update the HTML elements with the fetched data
        document.getElementById('temp-value').textContent = temperature;
        document.getElementById('desc-value').textContent = description;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${iconCode}.png`;
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
      });
  }

  // Call the fetchWeatherData function to get the weather data
  fetchWeatherData();


