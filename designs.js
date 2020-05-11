// Access DOM elements that user interacts with
const colorPicker = document.querySelector('#colorPicker');
const sizePicker = document.querySelector('#sizePicker');
const table = document.querySelector('#pixelCanvas');

/* Access submit button and assign event listener when pressed
*  Clear any inner HTML from table
*  Get the input from the user and store in a variable
*  When size is submitted by the user, call makeGrid()
*/
sizePicker.addEventListener('submit', function() {
  table.innerHTML = "";
  event.preventDefault();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

/* Create for loop for number of rows
*  Create second loop for number of columns
*  Insert both into the table
*  Add event listener to cell click to add color.value
*/
function makeGrid(height, width) {
  for (let x = 0; x < height; x++) {
    let row = table.insertRow(x);
    for (let y = 0; y < width; y++) {
      let cell = row.insertCell(y);
      cell.addEventListener('click', function() {
        cell.style.backgroundColor = colorPicker.value;
      });
    }
  }
}
