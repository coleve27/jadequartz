
var options = {
  auth: {
       responseType: 'token id_token',
       scope: 'openid'
     },
     autoclose: true,
     oidcConformant: true,
};

var lock = new Auth0Lock(
  'C3uimLj64ZbCZ3XxjiQ5T-mRt92h5u12',
  'jdqtz.auth0.com',
  options
);

lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    document.getElementById('nick').textContent = profile.nickname;

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
    console.log(JSON.stringify(profile));

    $.post("/api/login", authResult,)
      // On success, run the following code
      .then(function (data) {
        // Log the data we found
        console.log(data);
      });


    lock.hide();

  });
});


lock.show();




$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the resource they typed into the resource search input
  var resourceSearched = $("#resource-search").val().trim();

  // Make an AJAX get request to our api, including the user's resource in the url
  $.get("/api/" + resourceSearched, function(data) {

    console.log(data);
    // Call our renderResources function to add our books to the page
    renderResources(data);

  });

});

// When user hits the category-search-btn
$("#category-search-btn").on("click", function() {

  // Save the query they typed into the category-search input
  var categorySearched = $("#category-search").val().trim();

  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/" + categorySearched, function(data) {

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


///This will display the data found in the search page.
function renderResources(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

          div.append("<h2>" + (i + 1) + ". " + data[i].business_name + "</h2>");
          div.append("<p>Category: " + data[i].business_category + "</p>");
          div.append("<p>Sub-Category: " + data[i].sub_category1 + "</p>");
          div.append("<p>Ethnicity: " + data[i].ethnicity + "</p>");
          div.append("<p>Description: " + data[i].business_description + "</p>");

          div.append("<p>Street Address: " + data[i].street_address + "</p>");
          div.append("<p>City: " + data[i].business_city + "</p>");
          div.append("<p>State: " + data[i].zip_code + "</p>");
          div.append("<p>Business Number: " + data[i].phone_number+ "</p>");
          div.append("<p>Email: " + data[i].business_email + "</p>");
          div.append("<p>Website: " + data[i].business_url + "</p>");
          div.append("<p>Facebook: " + data[i].business_fb + "</p>");

          div.append("<p>Main Contact: " + data[i].main_contact + "</p>");
          div.append("<p>Contact Title: " + data[i].contact_title + "</p>");
          div.append("<p>Contact Phone: " + data[i].contact_phone + "</p>");
          div.append("<p>Contact Email: " + data[i].contact_email+ "</p>");

          div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE RESOURCE</button>");
          $("#stats").append(div);

    }


// DELETE
    $(".delete").click(function() {
      var info = {
        id: $(this).attr("data-id")
      };
      $.post("/api/delete", info)
        // On success, run the following code
        .then(function(deldata) {
          // Log the data we found
          console.log(deldata);
          console.log("This resource has been deleted.");
        });
      $(this).closest("div").remove();

    });

  }
}
