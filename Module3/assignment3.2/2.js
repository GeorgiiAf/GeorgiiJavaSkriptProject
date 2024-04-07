const items = ["First item","Second item","Third item"];

let list = document.createElement("ul");


for (let i = 0; i < items.length; i++){
  let listItem = document.createElement("li");

  // Set the text content for the list item
  listItem.textContent = items[i];
 if (i === 1) {
        listItem.classList.add("my-item");
    }

    // Append the list item to the list
    list.appendChild(listItem);
}

// Get the target element by its ID
let targetElement = document.getElementById("target");

// Append the list to the target element
targetElement.appendChild(list);