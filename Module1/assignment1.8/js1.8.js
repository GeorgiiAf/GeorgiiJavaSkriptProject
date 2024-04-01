function printLeapYears() {
            var startYear = parseInt(document.getElementById("startYear").value);
            var endYear = parseInt(document.getElementById("endYear").value);
            var leapYearsList = document.getElementById("leapYearsList");
            leapYearsList.innerHTML = ""; // Clear previous results

 for (var year = startYear; year <= endYear; year++) {
                if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                    var listItem = document.createElement("li");
                    listItem.textContent = year;
                    leapYearsList.appendChild(listItem);
                }
            }
        }