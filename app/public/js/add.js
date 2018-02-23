// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var newResource= {
    resource: $("#resource").val().trim(),
    category: $("#category").val().trim(),
    contact: $("#contact").val().trim(),
    email: $("#email").val().trim(),
    number: $('#number').val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newResource)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#resource").val("");
  $("#category").val("");
  $("#contact").val("");
  $("#email").val("");
  $("#number").val("");

});
