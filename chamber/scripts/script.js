window.addEventListener('DOMContentLoaded', (event) => {
  const membersContainer = document.getElementById('members-container');
  const gridViewButton = document.getElementById('grid-view');
  const listViewButton = document.getElementById('list-view');

  gridViewButton.addEventListener('click', () => toggleView('grid'));
  listViewButton.addEventListener('click', () => toggleView('list'));

  function toggleView(view) {
    membersContainer.innerHTML = '';
    fetch('data/members.json')
      .then(response => response.json())
      .then(data => {
        data.members.forEach(member => {
          if (view === 'grid') {
            createMemberCard(member);
          } else {
            createMemberItem(member);
          }
        });
      });
  }

  function createMemberCard(member) {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');

    const image = document.createElement('img');
    image.src = member.image;
    memberCard.appendChild(image);

    const name = document.createElement('h3');
    name.textContent = member.name;
    memberCard.appendChild(name);

    const address = document.createElement('p');
    address.textContent = member.address;
    memberCard.appendChild(address);

    const phone = document.createElement('p');
    address.textContent = member.phone;
    memberCard.appendChild(phone);

    const website = document.createElement('p');
    address.textContent = member.website;
    memberCard.appendChild(website);

    const membershipLevel = document.createElement('p');
    address.textContent = member.membershipLevel;
    memberCard.appendChild(membershipLevel);



    membersContainer.appendChild(memberCard);
  }

  function createMemberItem(member) {
    const memberItem = document.createElement('div');
    memberItem.classList.add('member-item');

    const name = document.createElement('h3');
    name.textContent = member.name;
    memberItem.appendChild(name);

    const address = document.createElement('p');
    address.textContent = member.address;
    memberItem.appendChild(address);

    const phone = document.createElement('p');
    address.textContent = member.phone;
    memberItem.appendChild(phone);

    const website = document.createElement('p');
    address.textContent = member.website;
    memberItem.appendChild(website);

    const membershipLevel = document.createElement('p');
    address.textContent = member.membershipLevel;
    memberItem.appendChild(membershipLevel);


    membersContainer.appendChild(memberItem);
  }

  // Initially, load the grid view
  toggleView('grid');
});

//sidebar
// JavaScript code
const sidebarMessage = document.getElementById('sidebar-message');
const lastVisitDate = localStorage.getItem('lastVisitDate');

if (lastVisitDate) {
  const daysBetween = Math.floor((Date.now() - lastVisitDate) / (1000 * 60 * 60 * 24));
  
  if (daysBetween === 0) {
    sidebarMessage.textContent = "Back so soon! Awesome!";
  } else {
    const pluralSuffix = daysBetween === 1 ? "" : "s";
    sidebarMessage.textContent = `You last visited ${daysBetween} day${pluralSuffix} ago.`;
  }
}

localStorage.setItem('lastVisitDate', Date.now());

//get date
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

//join
window.onload = function() {
  var timestampField = document.getElementById('timestamp');
  var timestampValue = new Date().toLocaleString();
  timestampField.value = timestampValue;
};

//enhancement

// Set your OpenWeatherMap API key
const apiKey = 'ff9f2ec82564c42998e466a10a7dbb7a';

// Function to fetch the weather data
async function getWeatherData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=chamber_location&appid=${apiKey}`);
  const data = await response.json();
  console.log(data); // Test the JSON result by writing it to the console
  displayWeatherData(data);
}

// Function to display the weather data on the home page
function displayWeatherData(data) {
  // Extract the relevant information from the data object
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;

  // Display the current temperature and weather description on the page
  const temperatureElement = document.getElementById('current-temperature');
  temperatureElement.textContent = `Current Temperature: ${temperature}°C`;

  const weatherDescriptionElement = document.getElementById('current-weather');
  weatherDescriptionElement.textContent = `Weather Description: ${weatherDescription}`;
}

// Call the getWeatherData function to fetch and display the weather data
getWeatherData();

