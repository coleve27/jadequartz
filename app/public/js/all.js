
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



