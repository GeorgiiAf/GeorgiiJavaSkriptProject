// Function to get participant names based on the user input count
function getParticipantNames() {
    // Get the number of participants from the input field
    let participantCount = parseInt(document.getElementById("participantCount").value);
    let participants = []; // Initialize an empty array to store participant names

    // Loop through each participant count and prompt for their name
    for (let i = 1; i <= participantCount; i++) {
        let name = prompt("Enter the name of participant " + i + ":"); // Prompt the user for participant name
        participants.push(name); // Add the participant name to the array
    }

    // Call the function to display the participant list
    displayParticipantList(participants);
}

// Function to display the participant list
function displayParticipantList(participants) {
    participants.sort(); // Sort the participants alphabetically
    let participantListHTML = "<ol>"; // Initialize an ordered list HTML string

    // Loop through each participant and create list items for them
    participants.forEach(function(name) {
        participantListHTML += "<li>" + name + "</li>"; // Add each participant name as a list item
    });

    participantListHTML += "</ol>"; // Close the ordered list HTML string

    // Set the HTML content of the participant list element
    document.getElementById("participantList").innerHTML = participantListHTML;
}