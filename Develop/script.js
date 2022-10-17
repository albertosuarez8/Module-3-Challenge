// Get the modal 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector("#generate");

// Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];

var apply = document.getElementById("apply-btn");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = closeModal;

/* When the apply button is clicked it checks first to to make sure a criteria selected and if true closes the modal
and writes the password */
apply.onclick = function () {
  if (checkRequiredCriteria()) {
  closeModal();
  writePassword();
} else {
  alert("Need to select at least one criteria")
}
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Closes the modal 
function closeModal() {
  modal.style.display = "none";
}

// Returns a list of user selected criteria 
function checkAppliedCriteria() {
  var listofAppliedCriteria = [];
  if (document.getElementById("uppercase").checked) {
    listofAppliedCriteria.push(uppercase);
  }
  if (document.getElementById("lowercase").checked) {
    listofAppliedCriteria.push(lowercase);
  }
  if (document.getElementById("numbers").checked) {
    listofAppliedCriteria.push(numbers);
  }
  if (document.getElementById("special").checked) {
    listofAppliedCriteria.push(special);
  }
  return listofAppliedCriteria;
}

// Randomizes a password using the checkAppliedCriteria function which is the list of user selected criteria
function generatePassword() {
  var checkedList = checkAppliedCriteria();
  var generatePassword = "";
  for (let x = 0; x < slider.value; x++) {
    var randomCriteria = checkedList[Math.floor(Math.random() * checkedList.length)]; //Picks a random criteria from the selected ones
    var randomChar = randomCriteria[Math.floor(Math.random() * randomCriteria.length)]; //Picks a random character from the random criteria
    generatePassword = generatePassword.concat(randomChar); //Rewrites the generatePassword variable and adds the new random character
  }
  return generatePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Checks if a required criteria is selected 
function checkRequiredCriteria() {
  if (document.getElementById("uppercase").checked ||
    document.getElementById("lowercase").checked ||
    document.getElementById("numbers").checked ||
    document.getElementById("special").checked) {
    return true;
  } else {
    return false
  }
}
