function sortStudent() {    // sort student function

        // get student's name from field in the website

    var name = document.getElementById("studentName").value;
    var houseNumber = Math.floor(Math.random() * 4) + 1;
    var house;


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

    var resultMessage = studentName + ", you are " + house + ".";
        // printing result to the website

    document.getElementById("result").innerHTML = name + ", you are " + house + ".";
}