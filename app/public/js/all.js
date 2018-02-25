
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

    // Now  we add our resource data to the well we just placed on the page
    $("#resource-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].business_name + "</h2>");
    $("#resource-well-" + i).append("<h3>Category: " + data[i].business_category + "</h4>");
    $("#resource-well-" + i).append("<h3>Sub-Category: " + data[i].sub_category1 + "</h4>");
    $("#resource-well-" + i).append("<h3>Ethnicity: " + data[i].ethnicity + "</h4>");
    $("#resource-well-" + i).append("<h3>Description: " + data[i].business_description + "</h4>");

    $("#resource-well-" + i).append("<h3>Street Address: " + data[i].street_address + "</h4>");
    $("#resource-well-" + i).append("<h3>City: " + data[i].business_city + "</h4>");
    $("#resource-well-" + i).append("<h3>State: " + data[i].zip_code + "</h4>");
    $("#resource-well-" + i).append("<h3>Business Number: " + data[i].phone_number+ "</h4>");

    $("#resource-well-" + i).append("<h3>Email: " + data[i].business_email + "</h4>");
    $("#resource-well-" + i).append("<h3>Website: " + data[i].business_url + "</h4>");
    $("#resource-well-" + i).append("<h3>Facebook: " + data[i].business_fb + "</h4>");


    $("#resource-well-" + i).append("<h3>Main Contact: " + data[i].main_contact + "</h4>");
    $("#resource-well-" + i).append("<h3>Contact Title: " + data[i].contact_title + "</h4>");
    $("#resource-well-" + i).append("<h3>Contact Phone: " + data[i].contact_phone + "</h4>");
    $("#resource-well-" + i).append("<h3>Contact Email: " + data[i].contact_email+ "</h4>");
  }
});






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



