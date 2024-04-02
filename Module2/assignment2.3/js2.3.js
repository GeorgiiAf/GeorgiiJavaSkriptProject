function getDogNames() {
            var dogNames = [];

            // Prompt the user to enter dog names
            for (var i = 1; i <= 6; i++) {
                var name = prompt("Enter the name of dog " + i + ":");
                dogNames.push(name);
            }

            displayDogList(dogNames);
        }

        function displayDogList(dogNames) {
            // Sort the dog names in reverse alphabetical order
            dogNames.sort(function(a, b) {
                return b.localeCompare(a);
            });

            var dogListHTML = "<ul>";
            dogNames.forEach(function(name) {
                dogListHTML += "<li>" + name + "</li>";
            });
            dogListHTML += "</ul>";

            document.getElementById("dogList").innerHTML = dogListHTML;
        }