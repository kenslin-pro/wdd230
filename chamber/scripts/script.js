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

    // Add more member details as needed

    membersContainer.appendChild(memberItem);
  }

  // Initially, load the grid view
  toggleView('grid');
});
