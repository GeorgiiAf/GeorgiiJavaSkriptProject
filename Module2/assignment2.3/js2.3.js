function getDogNames() {
    const dogNames = [];

    // Prompt the user to enter dog names
    for (let i = 1; i <= 6; i++) {
        let name = prompt("Enter the name of dog " + i + ":");
        dogNames.push(name);
    }

    displayDogList(dogNames);
}

function displayDogList(dogNames) {
    // Sort the dog names in reverse alphabetical order
    dogNames.sort(function(a, b) {
        return b.localeCompare(a); // Compare strings in reverse alphabetical order
    });

    let dogListHTML = "<ul>";
    dogNames.forEach(function(name) {
        dogListHTML += "<li>" + name + "</li>"; // Add each dog name to the list
    });
    dogListHTML += "</ul>";

    document.getElementById("dogList").innerHTML = dogListHTML; // Display the list in HTML
}