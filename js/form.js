//to check the form input is empty or not and show the warning message if the input is invalid.
function CheckForm() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var pwd = document.getElementById("pwd");
  var rpwd = document.getElementById("rpwd");
  var gender = document.getElementById("gender");

  if (fname.value === "") {
    fname.focus();
    document.getElementById("warningmessage_fname").innerHTML = "Please input your first name.";
    return false;
  } else if (lname.value === "") {
    lname.focus();
    document.getElementById("warningmessage_lname").innerHTML = "Please input your last name.";
    return false;
  } else if (phone.value === "") {
    phone.focus();
    document.getElementById("warningmessage_phone").innerHTML = "Please input your phone number.";
    return false;
  } else if (email.value === "") {
    email.focus();
    document.getElementById("warningmessage_email").innerHTML = "Please input your email.";
    return false;
  } else if (pwd.value === "") {
    pwd.focus();
    document.getElementById("warningmessage_pwd").innerHTML = "Please input your password.";
    return false;
  } else if (pwd.value.length < 8) {
    pwd.focus();
    document.getElementById("warningmessage_pwd").innerHTML = "Your password must more than or equal to 8 digit.";
    return false;
  } else if (pwd.value !== rpwd.value) {
    rpwd.focus();
    document.getElementById("warningmessage_rpwd").innerHTML = "Password and Password Confirm must be the same.";
    return false;
  } else if (gender.value === "N") {
    gender.focus();
    document.getElementById("warningmessage_gender").innerHTML = "Please select your gender.";
    return false;
  }
  return true;
}
//to reset the warning message to empty by clicking the input box
function ResetMessage() {
  var x = document.getElementsByName("warningmessage");
  for (var i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
  }
}
