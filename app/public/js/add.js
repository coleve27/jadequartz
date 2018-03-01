
  $(document).ready(function() {
    $('select').material_select();
  });

// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function (event) {
  event.preventDefault();

  // Make a newBook object
  var newResource = {
    // resource: $("#resource").val().trim(),
    // category: $("#category").val().trim(),
    // contact: $("#contact").val().trim(),
    // email: $("#email").val().trim(),
    // number: $('#number').val().trim()
    // username:  $("#username").val().trim(),

    business_name: $("#business_name").val().trim(),
    //business_category: $("#business_category").val(),
    // city_dept: $("#city_dept").val().trim(),
    sub_category1: $("#sub_category1").val(),
    // sub_category2: $("#sub_category2").val().trim(),
    ethnicity: $("#ethnicity").val(),
    // ethnicity2: $("#ethnicity2").val().trim(),
    business_description: $("#business_description").val().trim(),
    street_address: $("#street_address").val().trim(),
    business_city: $("#business_city").val().trim(),
    business_state: $("#business_state").val(),
    zip_code: $("#zip_code").val().trim(),
    phone_number: $("#phone_number").val().trim(),
    business_email: $("#business_email").val().trim(),
    business_url: $("#business_url").val().trim(),
    business_fb: $("#business_fb").val().trim(),
    main_contact: $("#main_contact").val().trim(),
    contact_title: $("#contact_title").val().trim(),
    contact_phone: $("#contact_phone").val().trim(),
    contact_email: $("#contact_email").val().trim(),


  };
  $.ajaxSetup({
    beforeSend: function(xhr) {
      console.log(localStorage.getItem('idToken'));
      xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('idToken'));
    }
  });
  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newResource)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#username").val("");
  $("#business_name").val("");
  //$("#business_category").val("");
  //$("#city_dept").val("");
  $("#sub_category1").val("");
  //$("#sub_category2").val("");
  $("#ethnicity").val("");
  //$("#ethnicity2").val("");
  $("#business_description").val("");
  $("#street_address").val("");
  $("#business_city").val("");
  $("#business_state").val("");
  $("#zip_code").val("");
  $("#phone_number").val("");
  $("#business_email").val("");
  $("#business_url").val("");
  $("#business_fb").val("");
  $("#main_contact").val("");
  $("#contact_title").val("");
  $("#contact_phone").val("");
  $("#contact_email").val("");
  // $("#resource").val("");
  // $("#category").val("");
  // $("#contact").val("");
  // $("#email").val("");
  // $("#number").val("");

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
