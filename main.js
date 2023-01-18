/** @format */

const clearButton = document.querySelector('.clear-results');

// Array to store data.
const people = [
 { name: 'adri' },
 { name: 'becky' },
 { name: 'chris' },
 { name: 'dillon' },
 { name: 'evan' },
 { name: 'frank' },
 { name: 'georgette' },
 { name: 'hugh' },
 { name: 'igor' },
 { name: 'jacoby' },
 { name: 'kristina' },
 { name: 'lemony' },
 { name: 'matilda' },
];

// // Function for the clear buttton.
function clearList() {
 list.innerHTML = '';
}

const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('input', (e) => {
 // Store the value of the search input.
 let searchValue = e.target.value;

 // Check if the input value exists.
 if (searchValue) {
  // Exclude whitespace and make text lowercase.
  searchValue = searchValue.trim().toLowerCase();

  // Return results of setList if value matches any characters in the people array.
  renderList(
   people.filter((person) => {
    return person.name.includes(searchValue);
   })
  );
 } else {
  clearList();
 }
});

clearButton.addEventListener('click', () => {
 clearList();
});

//Function to append results to the page.
function renderList(results) {
 for (const person of results) {
  // List element to display results.
  const resultItem = document.createElement('li');

  // Add a class to each result item.
  resultItem.classList.add('results-item');

  // Getting the name of the current point of the loop and inserting the name in the results list text.
  const text = document.createTextNode(person.name);

  // Appnending the search result to result item.
  resultItem.appendChild(text);

  // Appending the result item to the list.
  list.appendChild(resultItem);
 }
 if (results.length === 0) {
  noResults();
 }
}

function noResults() {
 // Create an element for the error.
 const errorMessage = document.createElement('p');

 // Add a class name to the error element.
 errorMessage.classList.add('error-message');

 //Create the text for the error element.
 const errorText = document.createTextNode('No results!');

 // Append text to error element.
 errorMessage.appendChild(errorText);

 // Append erorr to the list element.
 list.appendChild(errorMessage);
}
