function YearCheck() {
 const year = parseInt(document.getElementById("year").value);

if ((Number(year) % 4 === 0 && Number(year) % 100 !== 0) || Number(year) % 400 === 0) {
  console.log('the year is a leap year ');
 } else {
  console.log('the year is not a leap year ');
 }
}
