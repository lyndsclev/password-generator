// Assignment code
var generateBtn = document.querySelector("#generate");

// Character option arrays 

var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Function to generate password based on user input

function generatePassword () {

  // Ask user how many characters to include (8-128)

  var length = prompt("Choose password length. Must be between 8 and 128 characters.");

  // Loop (while) if answer is less than 8 or more than 128

  while(length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    length = prompt("Choose password length. Must be between 8 and 128 characters.");
  }

  // Confirm if the user would like numbers (true or false)

  var confirmNum = confirm("Should password contain numbers?");

  // Confirm if the user would like special characters (true or false)

  var confirmSpecial = confirm("Should password contain special characters?");

  // Confirm if the user would like lowercase letters (true or false)

  var confirmLower = confirm("Should password contain lowercase letters?");

  // Confirm if the user would like uppercase letters (true or false)

  var confirmUpper = confirm("Should password contain uppercase letters?");

  // Loop (while) if all options false and alert user they must select at least one and go back through 

  while(!confirmNum && !confirmSpecial && !confirmLower && !confirmUpper){
    alert("You must choose at least one character type.");
    confirmNum = confirm("Should password contain numbers?");
    confirmSpecial = confirm("Should password contain special characters?");
    confirmLower = confirm("Should password contain lowercase letters?");
    confirmUpper = confirm("Should password contain uppercase letters?");
  }

  // Assign true character types to an array using conditional statement

  var charTypesConfirmed = []

  if (confirmNum) {
    charTypesConfirmed = charTypesConfirmed.concat(num)
  }

  if (confirmSpecial) {
    charTypesConfirmed = charTypesConfirmed.concat(special);
  }

  if (confirmLower) {
    charTypesConfirmed = charTypesConfirmed.concat(lower);
  }

  if (confirmUpper) {
    charTypesConfirmed = charTypesConfirmed.concat(upper);
  }

  // Console log to check the array for confirmed character types is working 

  console.log(charTypesConfirmed);

  // Loop (for) through true character types array to pull a number the same length as the user selected 

  // Declare variable to be populated by result of for loop pulling from charTypesConfirmed array 
 
  var pass = ""; 

  for (var i = 0; i < length; i++) {
    pass = pass + charTypesConfirmed[Math.floor(Math.random() * charTypesConfirmed.length)];

    // Console log to see how it's working

    console.log(password);
  }

  // Return password 

  return pass; 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);