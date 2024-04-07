'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let selectList = document.createElement("select");
// create element <option> for each student and add it to the list
for (let i = 0; i < students.length; i++) {
  let optionItem = document.createElement("option");
  optionItem.value = students[i].id; // set up value
  optionItem.textContent = students[i].name; // set up textcontent option
  selectList.appendChild(optionItem);
}

// Get the target element by its ID
let targetElement = document.getElementById("target");

// Append the list to the target element
targetElement.appendChild(selectList);
