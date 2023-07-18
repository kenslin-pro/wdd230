const apiKey = 'ff9f2ec82564c42998e466a10a7dbb7a';
const city = 'Nairobi';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Process the weather data and update the information card
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Update the information card with the weather data
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('description').textContent = description;
    document.getElementById('weather-icon').setAttribute('src', `https://openweathermap.org/img/w/${icon}.png`);
  })
  .catch(error => {
    console.log('Error fetching weather data:', error);
  });
  
const baseURL = ' https://kenslin-pro.github.io/wdd230/';
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.log('Error fetching links data:', error);
  }
}

function displayLinks(weeks) {
  const linksContainer = document.getElementById('links-container');

  weeks.forEach(week => {
    const weekTitle = document.createElement('h3');
    weekTitle.textContent = week.week;
    linksContainer.appendChild(weekTitle);

    const linksList = document.createElement('ul');

    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    linksContainer.appendChild(linksList);
  });
}

// Call the getLinks function to retrieve and display the activity links
getLinks();

