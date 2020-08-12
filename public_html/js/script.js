$(document).ready( function () {
  $("#contact-me").validate({
    debug: true,
    errorClass: "alert alert-danger",
    errorLabelContainer: "#output-area",
    errorElement: "div",

    rules: {
      name: {
        required: true
      },
      email:{
        email: true,
        required: true
      },
      message:{
        required: true,
        maxlength: 2000
      }
    },

    messages:{
      name:{
        required: "Name is a required field"
      },
      email:{
        required: "Email is a required field",
        email: "Please provide a valid email address"
      },
      message: {
        required: "Message is a required field",
        maxlength: "Message is too long"
      },
    },
    submitHandler: function (form) {
      $("#contact-me").ajaxSubmit({
        type: "POST",
        url: $('contact-me').attr('action'),
        success: function (ajaxOutput) {
          $("#output-area").css("display", "")
          $("output-area").html(ajaxOutput)

          if($(".alert-success").length >= 1) {
            $("#contact-me")[0].reset()
          }
        }
      })
    }

  })

})