// var options = {
//   auth: {
//        responseType: 'token id_token',
//        scope: 'openid'
//      },
//      autoclose: true,
//      oidcConformant: true,
// };
//
// var lock = new Auth0Lock(
//   'C3uimLj64ZbCZ3XxjiQ5T-mRt92h5u12',
//   'jdqtz.auth0.com',
//   options
// );
//
// lock.on("authenticated", function(authResult) {
//   // Use the token in authResult to getUserInfo() and save it to localStorage
//   lock.getUserInfo(authResult.accessToken, function(error, profile) {
//     if (error) {
//       // Handle error
//       return;
//     }
//
//     document.getElementById('nick').textContent = profile.nickname;
//
//     localStorage.setItem('accessToken', authResult.accessToken);
//     localStorage.setItem('profile', JSON.stringify(profile));
//     // console.log(JSON.stringify(profile));
//
//     $.ajaxSetup({
//       beforeSend: function(xhr) {
//         xhr.setRequestHeader('Authorization', 'Bearer ' + authResult.idToken);
//       }
//     });
//
//     $.post("/api/login", authResult)
//       // On success, run the following code
//       .then(function (data) {
//         // Log the data we found
//         console.log(data);
//       });
//
//
//     lock.hide();
//
//   });
// });
//
//
// lock.show();


/*// Make a get request to our api route that will return every resource
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

    // Now we add our resource data to the well we just placed on the page
    $("#resource-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].business_name + "</h2>");
    $("#resource-well-" + i).append("<p>Category: " + data[i].business_category + "</p>");
    $("#resource-well-" + i).append("<p>Sub-Category: " + data[i].sub_category1 + "</p>");
    $("#resource-well-" + i).append("<p>Ethnicity: " + data[i].ethnicity + "</p>");
    $("#resource-well-" + i).append("<p>Description: " + data[i].business_description + "</p>");

    $("#resource-well-" + i).append("<p>Street Address: " + data[i].street_address + "</p>");
    $("#resource-well-" + i).append("<p>City: " + data[i].business_city + "</p>");
    $("#resource-well-" + i).append("<p>State: " + data[i].zip_code + "</p>");
    $("#resource-well-" + i).append("<p>Business Number: " + data[i].phone_number+ "</p>");

    $("#resource-well-" + i).append("<p>Email: " + data[i].business_email + "</p>");
    $("#resource-well-" + i).append("<p>Website: " + data[i].business_url + "</p>");
    $("#resource-well-" + i).append("<p>Facebook: " + data[i].business_fb + "</p>");


    $("#resource-well-" + i).append("<p>Main Contact: " + data[i].main_contact + "</p>");
    $("#resource-well-" + i).append("<p>Contact Title: " + data[i].contact_title + "</p>");
    $("#resource-well-" + i).append("<p>Contact Phone: " + data[i].contact_phone + "</p>");
    $("#resource-well-" + i).append("<p>Contact Email: " + data[i].contact_email+ "</p>");
  }
});

*/

// Make a get request to our api route that will return every resource
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

    // Now we add our resource data to the well we just placed on the page
    $("#resource-well-" + i).append(
      "<ul class='collapsible' data-collapsible='accordian'><li><div class='collapsible-header'><h2>" + (i + 1) + ". " + data[i].business_name + "</h2></div>" +
      "<div class='collapsible-body'><p>Category: " + data[i].business_category + "</p>"+
      "<p>Sub-Category: " + data[i].sub_category1 + "</p>"+
      "<p>Ethnicity: " + data[i].ethnicity + "</p>"+
      "<p>Description: " + data[i].business_description + "</p>"+
      "<p>Street Address: " + data[i].street_address + "</p>"+
      "<p>City: " + data[i].business_city + "</p>"+
      "<p>State: " + data[i].zip_code + "</p>"+
      "<p>Business Number: " + data[i].phone_number+ "</p>" +
      "<p>Email: " + data[i].business_email + "</p>"+
      "<p>Website: " + data[i].business_url + "</p>"+
      "<p>Facebook: " + data[i].business_fb + "</p>"+
      "<p>Main Contact: " + data[i].main_contact + "</p>"+
      "<p>Contact Title: " + data[i].contact_title + "</p>"+
      "<p>Contact Phone: " + data[i].contact_phone + "</p>"+
      "<p>Contact Email: " + data[i].contact_email+ "</p></div></li></ul>"
    );
  }
});




//do not delete this below
// username:
// business_name:
// business_category:
// city_dept:
// sub_category1:
// sub_category2:
// ethnicity:
// ethnicity2:
// business_description:
// street_address:
// business_city:
// business_state:
// zip_code:
// phone_number:
// business_email:
// business_url:
// business_fb:
// main_contact:
// contact_title:
// contact_phone:
// contact_email:
