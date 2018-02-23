// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var resourceSearched = $("#resource-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + resourceSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderResources(data);

  });

});

// When user hits the author-search-btn
$("#category-search-btn").on("click", function() {

  // Save the authorthey typed into the author-search input
  var categorySearched = $("#category-search").val().trim();

  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/category/" + categorySearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderResources(data);

  });

});

// When user hits the genre-search-btn
// $("#genre-search-btn").on("click", function() {
//
//   // Save the book they typed into the genre-search input
//   var genreSearched = $("#genre-search").val().trim();
//
//   // Make an AJAX get request to our api, including the user's genre in the url
//   $.get("/api/genre/" + genreSearched, function(data) {
//
//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderBooks(data);
//
//   });
//
// });

function renderResources(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].resource + "</h2>");
      div.append("<p>Category: " + data[i].category + "</p>");
      div.append("<p>Contact: " + data[i].contact + "</p>");
      div.append("<p>Email: " + data[i].email + "</p>");
      div.append("<p>Number: " + data[i].number + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE RESOURCE</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post("/api/delete", info)
        // On success, run the following code
        .then(function(deldata) {
          // Log the data we found
          console.log(deldata);
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
