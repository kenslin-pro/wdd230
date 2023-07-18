$(document).ready(function () {
  // Weather API call
  var apiKey = "ff9f2ec82564c42998e466a10a7dbb7a";
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=LOCATION&units=metric&appid=" +
    apiKey;

  $.getJSON(apiUrl, function (data) {
    var temperature = data.main.temp;
    var weatherDescription = data.weather[0].description;

    // Display current temperature
    $("#current-temperature").text(temperature + "°C");

    // Display current weather description
    $("#current-weather").text(weatherDescription);
  });

  // Forecast API call
  var forecastApiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=LOCATION&units=metric&appid=" +
    apiKey;

  $.getJSON(forecastApiUrl, function (data) {
    var forecastData = data.list;

    // Display three-day temperature forecast
    for (var i = 0; i < 3; i++) {
      var forecastDate = new Date(forecastData[i * 8].dt_txt);
      var forecastTemperature = forecastData[i * 8].main.temp;
      $("#forecast-day-" + i).text(forecastDate.toDateString());
      $("#forecast-temperature-" + i).text(forecastTemperature + "°C");
    }
  });

  // Chamber members spotlight
  var members = [
    { name: "Member 1", membershipLevel: "gold", advertisement: "Ad 1" },
    {
      name: "Member 2",
      membershipLevel: "silver",
      advertisement: "Ad 2",
    },
    { name: "Member 3", membershipLevel: "gold", advertisement: "Ad 3" },
  ];

  var qualifiedMembers = members.filter(function (member) {
    return (
      member.membershipLevel === "silver" ||
      member.membershipLevel === "gold"
    );
  });

  // Randomly load qualified member advertisements
  var randomMemberIndex = Math.floor(
    Math.random() * qualifiedMembers.length
  );
  var randomMember = qualifiedMembers[randomMemberIndex];

  $("#spotlight-member").text(randomMember.name);
  $("#spotlight-advertisement").text(randomMember.advertisement);

  // Chamber meet and greet banner
  var today = new Date();
  var dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

  if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    $("#meet-greet-banner").show();
  }

  // Close banner functionality
  $("#close-banner").click(function () {
    $("#meet-greet-banner").hide();
  });
});

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