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


    // Add more member details as needed

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


    // Add more member details as needed

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
