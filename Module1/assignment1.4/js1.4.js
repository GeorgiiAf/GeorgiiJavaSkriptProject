function sortStudent() {    // sort student function

// Get student's name from the input field in the website

    let name = document.getElementById("studentName").value;
    // Generate a random house number
    let houseNumber = Math.floor(Math.random() * 4) + 1;

    let house;
    switch(houseNumber) {
        case 1:
            house = "Gryffindor";
            break;
        case 2:
            house = "Slytherin";
            break;
        case 3:
            house = "Hufflepuff";
            break;
        case 4:
            house = "Ravenclaw";
            break;
        default:
            house = "Unknown";
    }

    document.getElementById("result").innerHTML = name + ", you are " + house + ".";
}