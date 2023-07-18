// Set the baseURL variable to your root wdd230 repository or GitHub pages URL
var baseURL = " https://kenslin-pro.github.io/wdd230/";

// Set the linksURL variable to the path of your links.json data file
var linksURL = baseURL + "/data/links.json";

// Function to fetch the links data from links.json
async function getLinks() {
  try {
    var response = await fetch(linksURL);
    var data = await response.json();
    console.log(data); // Test the JSON result by writing it to the console
    displayLinks(data.weeks); // Call the displayLinks function with the weeks data
  } catch (error) {
    console.log("Error: " + error);
  }
}

// Function to build out the available activity links from the data response
function displayLinks(weeks) {
  var linksContainer = document.getElementById("links-container");

  // Clear the existing content
  linksContainer.innerHTML = "";

  // Loop through each week
  weeks.forEach(function (week) {
    // Create the week header element
    var weekHeader = document.createElement("h2");
    weekHeader.textContent = week.week;
    linksContainer.appendChild(weekHeader);

    // Create the list element for the links
    var linksList = document.createElement("ul");

    // Loop through each link in the week
    week.links.forEach(function (link) {
      // Create the list item element
      var listItem = document.createElement("li");

      // Create the anchor element for the link
      var linkAnchor = document.createElement("a");
      linkAnchor.href = baseURL + "/" + link.url;
      linkAnchor.textContent = link.title;

      // Append the link anchor to the list item
      listItem.appendChild(linkAnchor);

      // Append the list item to the links list
      linksList.appendChild(listItem);
    });

    // Append the links list to the links container
    linksContainer.appendChild(linksList);
  });
}

// Call the getLinks function to fetch the links data
getLinks();
