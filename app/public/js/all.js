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


$(document).ready(function() {
  $('select').material_select();
  $('.modal').modal();
});



// Make a get request to our api route that will return every resource
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {

    // Create a parent div to hold resource data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "resource-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now we add our resource data to the well we just placed on the page
    $("#resource-well-" + i).append(
      "<script>$(document).ready(function(){$('.collapsible').collapsible();}); </script>"+
      "<ul class='collapsible popout collapsible accordion' data-collapsible='accordian'><li><div class='collapsible-header'><p>" + (i + 1) + ". " + data[i].business_name + "</p></div>" +
      "<div class='collapsible-body'>" + "<p class='flow-text'> <h4>" + data[i].business_name + "</h4> "+ data[i].business_description + "</p>" + "<p> <b>Organization Type: </b>" +  data[i].sub_category1 + "</p>" + "<p><b> Ethnicity Represented: </b>" + data[i].ethnicity +"</p>"+
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
     "<a class='delete waves-effect waves-light red btn' data-id='" + data[i].id + "'>DELETE RESOURCE</a>"+
     "<a class='waves-effect waves-light blue btn modal-trigger' href='#modal1' data-id='" + data[i].id + "'>UPDATE RESOURCE</a></div></div>"+
     "</li></ul>");
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
  $(this).closest("ul").remove();

});

$(".update").click(function() {
  var info = {
    id: $(this).attr("data-id")
  };
  $.post("/api/update", info)
    // On success, run the following code
    .then(function(updateData) {
      // Log the data we found
      console.log(updateData);
      console.log("This resource has been updated.");
    });
  //$(this).closest("ul").remove();

});









});





// "<p>Main Contact: " + data[i].main_contact + "</p>"+
// "<p>Contact Title: " + data[i].contact_title + "</p>"+
// "<p>Contact Phone: " + data[i].contact_phone + "</p>"+



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

var idToken = localStorage.getItem('idToken');
if(idToken){
  $.ajaxSetup({
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer ' + idToken);
    }
  });
}
