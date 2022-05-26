// To check the user name and password is empty or not. Warning message will appear when the input box is empty and reject the submit.
function CheckForm() {
  var uName = document.getElementById("uName");
  var pwd = document.getElementById("pwd");

  if (uName.value == "") {
    document.getElementById("loginmessage_name").innerHTML = "Please enter your user name.";
    uName.focus();
    return false;
  } else if (pwd.value == "") {
    document.getElementById("loginmessage_pwd").innerHTML = "Please enter your password.";
    pwd.focus();
    document.getElementById("loginmessage_name").innerHTML = "";
    return false;
  }
  return true;
}

// To reset the warning message while the user click the input box again.
function ResetMessage() {
  var x = document.getElementsByName("warningmessage");
  for (var i = 0; i < x.length; i++) {
    x[i].innerHTML = "";
  }
}

// To control the slider auto slide and will return to image1 when it slide to the last image.
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 10000);
