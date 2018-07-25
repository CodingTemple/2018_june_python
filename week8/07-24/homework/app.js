'use strict';

// Add a todo item
$('#addButton').on("click", function() {
  var newItem = $('#inputField').val();
  if (newItem === "") {
    alert("You need to add SOMETHING! You can't add nothing.");
  } else {
    $('#todoList').append(`<li>${newItem}<span class="delete pull-right"><button type="button" class="btn btn-danger btn-xs">Delete</button></span></li>`);
    $('#inputField').val("");
  }
});

// Delete item
$('#todoList').on("click", ".delete", function() {
  $(this).parent().remove();
});