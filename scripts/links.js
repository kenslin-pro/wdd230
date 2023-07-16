// Set the baseURL to your GitHub Pages URL or the root URL of your website
const baseURL = "https://yourusername.github.io/wdd230/";

// Set the linksURL to the relative path of your links.json file
const linksURL = "./path/to/links.json";

// Function to fetch the links data from the links.json file
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching links data:", error);
  }
}

// Call the getLinks function to fetch the links data
getLinks().then(data => {
  // Test the JSON result by writing the data to the console
  console.log(data);

  // Call the displayLinks function to build the activity links
  displayLinks(data.weeks);
});

// Function to build the activity links from the data response
function displayLinks(weeks) {
  const activityList = document.getElementById("activity-list");

  // Clear the existing content
  activityList.innerHTML = "";

  // Loop through each week and create the links
  weeks.forEach(week => {
    const weekNumber = week.week;
    const links = week.links;

    const weekItem = document.createElement("li");
    weekItem.textContent = weekNumber;

    const linkList = document.createElement("ul");

    links.forEach(link => {
      const linkItem = document.createElement("li");
      const linkAnchor = document.createElement("a");
      linkAnchor.href = baseURL + link.url;
      linkAnchor.textContent = link.title;
      linkItem.appendChild(linkAnchor);
      linkList.appendChild(linkItem);
    });

    weekItem.appendChild(linkList);
    activityList.appendChild(weekItem);
  });
}
