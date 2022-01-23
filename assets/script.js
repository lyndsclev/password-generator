// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {

  var passLength = prompt("How many characters? Choose between 8 and 128.");
  console.log("Your password will be " + passLength + " characters.");

  // Check to see that the value is between 8 and 128 characters 

  if(passLength >= 8 || passLength <= 128) {
    alert("Your password will be " + passLength + " characters.");

  } else if(passLength < 8) {
    prompt("Enter a  number between 8 and 128");
  } else if(passLength > 128) {
    prompt("Enter a number between 8 and 128.");
  } 

    // 1. Prompt the user for password criteria
    //    a. Password length 8 < 128
    //    b. Lowercase, uppercase, numbers, special characters
    // 2. Validate the input (8 < 128, at least one character type is being selected)
    // 3. Generate password based on criteria 
    


  // 4. Display password to the page 
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






