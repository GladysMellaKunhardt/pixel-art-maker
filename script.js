$(document).ready(function () {
  $('#size-picker').submit(function makeGrid(grid) {  // Creates the grid upon clicking the button 'Submit'
    $('#canvas tr').remove(); // Lets the grid be cleared when hitting the 'Submit' button again

    var rowInput = $('#field-height').val(); // Allows the user to add a chosen value inside the input box to add rows 
    var colInput = $('#field-width').val(); // Allows the user to add a chosen value inside the 2nd input box to add columns

    for (var i = 1; i <= rowInput; i++) { 
      $('#canvas').append("<tr></tr>"); // This loop creates a row of cells
      for (var j = 1; j <= colInput; j++) {
        $('tr:last').append("<td></td>"); // This loop adds a cell after every row
        $('td').attr("class", 'cells') // For every 'td', a class of 'cells' is created
      }
    }

    grid.preventDefault(); // Prevents the grid to be deleted after it is created

    $('.cells').click(function (event) { // The function allows the user to color a cell on click
      var paint = $('#color-picker').val();
      $(event.target).css('background-color', paint); // Lets the chosen color on a click event to be added to the grid
    });
  }); 
});
