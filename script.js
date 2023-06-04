
function saveDetails() {
  //validate all inputs first
  var message = "";
  //if validation fails, function returns the
  // data that needs to be checked by the user

  message = message + validateEmail();
  message = message + validateUsername();
  message = message + validateTitle();
  message = message + validateName();
  message = message + validateGender();
  message = message + validateAddress();
  message = message + validateMobile();
  message = message + validateDob();
  message = message + validateCreditCard();
  message = message +  validatePassword();
  message = message + validateSecurityQ();


  if (message == "") {
    alert("Validation passed!");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else {
    if (message[0] == ",") {
      message = message.replace(/^,/, '');
    }
    message = message.trim();

    alert("Invalid " + message + " entered.");
  }
}

function validateEmail() {

  //Peter Mawere
  var x = document.getElementById("email").value;
  let symbolCheck = x.includes("@" && ".com");
  let spaceCheck = x.includes(" ");
  let symbolFirst = x.charAt(0);
  //var symbolPosition = symbolFirst.match(/^([A-Z,a-z])/);
  if (x === "" && symbolCheck === false && spaceCheck === true ) { //&& symbolPosition === false) {
    return "Email";
  }
  if (x !== "" && symbolCheck === true && spaceCheck === false ) { //&& symbolPosition === true ) {
    return "";
  }

}

function validateUsername() {
  //after validation, if no issues, return ""
  //otherwise, return " username"
  //remember to include leading space!
  return "";
}

function validateTitle() {
  return "";
}
function validateName() {
  return "";
}

function validateGender() {
  return "";
}

function validateAddress() {
  return "";
}

function validateMobile() {
  return "";
}
function validateDob() {
  //Joshu was here
  return "";
}

function validatePassword() {
  return "";
}

function validateCreditCard() {
  return "";
}

function validateSecurityQ() {
  return "";
}
