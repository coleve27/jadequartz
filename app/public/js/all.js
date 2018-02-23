
// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "resource-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#resource-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].resource + "</h2>");
    $("#resource-well-" + i).append("<h3>Category: " + data[i].category + "</h4>");
    $("#resource-well-" + i).append("<h3>Contact: " + data[i].contact + "</h4>");
    $("#resource-well-" + i).append("<h3>Email: " + data[i].email + "</h4>");
    $("#resource-well-" + i).append("<h3>Number: " + data[i].number + "</h4>");
  }
});
