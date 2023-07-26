/* eslint-env browser */

// Mock data for demonstration purposes (replace this with actual data from API)
const items = [
  { id: 1, title: "Product 1", price: 100, description: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Product 2", price: 200, description: "Lorem ipsum dolor sit amet." },
  { id: 3, title: "Product 3", price: 150, description: "Lorem ipsum dolor sit amet." },
];

// Function to display the list of items on the page
const displayItems = function() {
  const itemListElement = document.getElementById("item-list");

  items.forEach(function(item) {
    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
      <div class="item-title">${item.title}</div>
      <div class="item-price">$${item.price}</div>
    `;

    // Add click event listener to display item details
    itemElement.addEventListener("click", function() {
      displayItemDetails(item);
    });

    itemListElement.appendChild(itemElement);
  });
};

// Function to display the details of a selected item
const displayItemDetails = function(item) {
  const itemDetailsElement = document.getElementById("item-details");
  itemDetailsElement.innerHTML = `
    <h2>${item.title}</h2>
    <p>Price: $${item.price}</p>
    <p>${item.description}</p>
  `;
};

// Call the displayItems function to show the list of items on page load
displayItems();