function printLeapYears() {
            let startYear = parseInt(document.getElementById("startYear").value);
            let endYear = parseInt(document.getElementById("endYear").value);

           // Get the HTML element representing the list of leap years

            let leapYearsList = document.getElementById("leapYearsList");
            leapYearsList.innerHTML = ""; // Clear previous results

 for (let year = startYear; year <= endYear; year++) {
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
             // If the year is a leap year, create a new list item element
                  let listItem = document.createElement("li");
            // Set the text content of the list item to the current year
                    listItem.textContent = String(year);
                          // Append the list item to the leap years list
                    leapYearsList.appendChild(listItem);
                }
            }
        }