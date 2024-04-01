function YearCheck() {
 var year = parseInt(document.getElementById("year").value);

 if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log('the year is a leap year ');
 } else {
  console.log('the year is not a leap year ');
 }
}
