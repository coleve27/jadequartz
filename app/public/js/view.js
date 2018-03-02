

  $(document).ready(function() {
    $('select').material_select();
  });

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

    localStorage.setItem('idToken', authResult.idToken);
    localStorage.setItem('accessToken', authResult.accessToken);

    localStorage.setItem('profile', JSON.stringify(profile));
    // console.log(JSON.stringify(profile));
    console.log('hello');
    $.ajaxSetup({
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + authResult.idToken);
      }
    });

    // $.post("/api/login", authResult)
    //   // On success, run the following code
    //   .then(function (data) {
    //     // Log the data we found
    //     console.log(data);
    //   });
 
    lock.hide();

  });
});


lock.show();




$("#search-btn").on("click", function(event) {
  event.preventDefault();
  console.log("this is selecting a sub-category");

  // Save the resource they typed into the resource search input
  var resourceSearched = $("#sub_category1").val();

  console.log("This is what is chosen: " + resourceSearched);

  // Make an AJAX get request to our api, including the user's resource in the url
  $.get("/api/" + resourceSearched, function(data) {

    console.log(data);
    // Call our renderResources function to add our books to the page
    renderResources(data);

  });

});

// When user hits the ethnicity
// $("#search-btn").on("click", function() {
//   console.log("this is selecting an ethnicity");

//   // Save the query they typed into the category-search input
//   var categorySearched = $("#ethnicity").val();

//   console.log("This is what is chosen: " +categorySearched);

//   // Make an AJAX get request to our api, including the user's author in the url
//   $.get("/api/" + categorySearched, function(data) {

//     // Log the data to the console
//     console.log(data);
//     // Call our renderBooks function to add our books to the page
//     renderResources(data);

//   });

// });



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

      var wellSection = $("<div>");

     // $("#well-section").append(wellSection);


        wellSection.append(
        "<ul class='collapsible' data-collapsible='accordian'><li><div class='collapsible-header'><p>" + (i + 1) + ". " + data[i].business_name + ": " + data[i].sub_category1 +"</p></div>" +
        "" + "<p class='flow-text'> <h4>" + data[i].business_name + "</h4> "+ data[i].business_description + "</p>" + "<p> <b>Organization Type: </b>" +  data[i].sub_category1 + "</p>" + "<p><b> Ethnicity Represented: </b>" + data[i].ethnicity +"</p>"+
        "<table class = 'responsive-table'><div class='container'><thead><tr><th>Street Address</th><th>City</th><th>State</th><th>Org. Number</th><th>Email</th><th>Facebook</th><th>Email</th></tr></thead><tbody><tr>"+
    
        "<td>" + data[i].street_address + "</td>"+
        "<td>"+ data[i].business_city + "</td>"+
        "<td>" + data[i].zip_code + "</td>"+
        "<td>" + data[i].phone_number+ "</td>" +
        "<td>" + data[i].business_email + "</td>"+
        "<td>" + data[i].business_url + "</td>"+
        "<td>" + data[i].business_fb + "</td></tr></tbody></div></table>" +
        "<div class='card-panel teal lighten-2 white-text text-darken-2'>"+
       "<p class='flow-text'><h5>Main Contact </h5></p>"+
       "<table class='responsive-table'>"+
       "<div class='container'><thead><tr><th>Contact Name</th><th>Title</th><th>Phone</th><th>Email</th></tr></thead>"+
       "<tbody><tr>"+
       
       "<td>" + data[i].main_contact + "</td>"+
       "<td>"+ data[i].contact_title + "</td>"+
       "<td>" + data[i].contact_phone+ "</td>"+
       "<td>" + data[i].contact_email+ "</td>" +
       "</tr></tbody></table></div>"+
       //insert buttons here
       "<a class='email waves-effect waves-light btn modal-trigger' href='mailto:"+ data[i].business_email+ "' data-id='" + data[i].id + "'>EMAIL ORGANIZATION</a>"+
       "<a class='delete waves-effect waves-light red btn' data-id='" + data[i].id + "'>DELETE RESOURCE</a></div></div>"+
       "</li></ul>");

      wellSection.append("<button class='delete' data-id='" + data[i].id + "'>DELETE RESOURCE</button>");
      
      $("#stats").append(wellSection);

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
