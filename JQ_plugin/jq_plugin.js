$(document).ready(function() {
  $("#form").validate({
  rules: {
  fname : {
  required: true,
  minlength: 2,
  maxlength : 15,
  fname :true
  },
  lname : {
    required: true,
    minlength: 2,
    maxlength : 15,
    lname:true
  },
  streetadd1 : {
    required: true,
    streetadd1:true
  },
  streetadd2 : {
    required: true,
    streetadd2:true
  },
  city : {
    required: true,
    minlength: 3,
    city:true
  },
  state : {
    required: true,
    minlength: 3,
    state:true
  },
  pin : {
    required: true,
    min: 6,
    pin:true
  },
  phone : {
    required: true,
    phone:true
  },
  email: {
  required: true
  },
  feed: {
    required: true
  },
  sugg: {
    required: true
  },
  gender: {
    required: true
    }
},
messages : {
  fname: {
  minlength: "Name should be at least 2 characters",
  maxlength: "Name should be at most 15 characters"
  },
  lname: {
    minlength: "Name should be at least 2 characters",
    maxlength: "Name should be at most 15 characters"
    },
  email: {
  email: "The email should be in the given format"
  },
  pin : {
    min: "Pin code  must be of 6 digits"
  }
  },

  errorPlacement: function(error, element) {
    if ( element.attr('name') == 'gender' ) {
        error.insertAfter("#others");
    }
    else { 
        error.insertAfter( element);
    }
}
});
});

$.validator.addMethod('fname', function (value) { 
  return /[a-zA-Z]$/.test(value); 
}, 'Please enter a valid name');
$.validator.addMethod('lname', function (value) { 
  return /[a-zA-Z]$/.test(value); 
}, 'Please enter a valid name');
$.validator.addMethod('streetadd1', function (value) { 
  return /[a-zA-Z0-9]$/.test(value); 
}, 'Please enter a valid address');
$.validator.addMethod('streetadd2', function (value) { 
  return /[a-zA-Z0-9]$/.test(value); 
}, 'Please enter valid address');
$.validator.addMethod('city', function (value) { 
  return /[a-zA-Z]$/.test(value); 
}, 'Invalid city name');
$.validator.addMethod('state', function (value) { 
  return /[a-zA-Z]$/.test(value); 
}, 'Invalid state name');
$.validator.addMethod('pin', function (value) { 
  return /[0-9]{6}$/.test(value); 
}, 'Invalid Zip-code');
$.validator.addMethod('phone', function (value) { 
  return /\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/.test(value); 
}, 'Phone Number should be of given format');