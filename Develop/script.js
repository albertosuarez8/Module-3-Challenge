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

slider.oninput = function() {
  output.innerHTML = this.value;
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function closeModal() {
  modal.style.display = "none";
}

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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

