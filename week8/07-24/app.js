'use strict';

// Add Item
$('#submitButton').on("click", function() {
  var newItem = $('#inputText').val();
  if (newItem === "") {
    alert("You must enter in a todo.");
  }
  else {
    $('#items').append(`<li>${newItem}<span class="delete pull-right"><button type="button" class="btn btn-danger btn-xs">Delete</button></span></li>`);
    $('#inputText').val("");
  }
});

// Delete Item
$('#items').on("click", ".delete", function() {
  $(this).parent().remove();
});

// Edit Item