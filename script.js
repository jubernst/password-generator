// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate a random Password
function generatePassword() {
  var isLowercase = false;
  var isUppercase = false;
  var isNumeric = false;
  var isSpecial = false;

  window.alert("Let's make your password!");

  // Prompt for password length between 8 and 128 characters
  var len = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128:");
  
  while (len < 8 || len > 128 || isNaN(len)){
    len = window.prompt("Please choose a number between 8 and 128:");
  }
  
  //while ((isLowercase == isUppercase == isNumeric == isSpecial == false)) {

    // Would rather do this on one page so that these are all buttons. and i can easily check if none of them are selected
    // Prompt "Do you want to include lowercase letters?" store as boolen
    // either in the same prompt or in a box, prompt for uppercase, numbers and special characters
    if(window.confirm("Would you like your password to include lowercase letters?")){
      txt = "You chose to include lowercase"
      isLowercase = true;
    } else {
      txt = "You chose not to include lowercase"
      isLowercase = false;
    };

    if (window.confirm("Would you like your password to include uppercase letters?")){
      txt = "You chose to include uppercase letters"
      isUppercase = true;
    } else {
      txt = "You chose not to include uppercase letters"
      isUppercase = false;
    };

    if (window.confirm("Would you like your password to include numbers?")){
      txt = "You chose to include numbers"
      isNumeric = true;
    } else {
      txt = "You chose not to include numbers"
      isNumeric = false;
    };

    if (window.confirm("Would you like your password to include special characters?")){
      txt = "You chose to include special characters"
      isSpecial = true;
    } else {
      txt = "You chose not to special characters"
      isSpecial = false;
    };

    if ((isLowercase == isUppercase == isNumeric == isSpecial == false)) {
      window.alert("Error: You must select one of the options.")
    }
  //}
  
  // Generate a random string of characters based on those variables
  
  // return that string
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
