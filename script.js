// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndSpecial() {
  var specChar = String.fromCharCode(Math.floor(Math.random() * 13) + 33);
  return specChar;
}

function getRndNum() {
  var numChar = Math.floor(Math.random() * 10);
  return numChar;
}

function getRndLowercase() {
  var lowChar = String.fromCharCode(Math.floor(Math.random() * 25) + 97);
  return lowChar;
}

function getRndUppercase() {
  var upChar = String.fromCharCode(Math.floor(Math.random() * 25) + 65);
  return upChar;
}

// Generate a random Password
function generatePassword() {

  // Initialize all choices as false
  var isLowercase = false;
  var isUppercase = false;
  var isNumeric = false;
  var isSpecial = false;
  // Initialize the 
  var rndString = "";

  window.alert("Let's make your password!");

  // Prompt for password length between 8 and 128 characters
  var len = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128:");
  
  // If the number entered is not between 8 and 128, or isn't a number, prompt again
  while (len < 8 || len > 128 || isNaN(len)){
    len = window.prompt("Please choose a number between 8 and 128:");
  }
  
  // Ask the user which character types they would like to include
  // Loop while no options have been selected
  do {

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

    // Catch if no options have been selected, repeat the prompts
    if (isLowercase === false && isUppercase === false && isNumeric === false && isSpecial === false) {
      window.alert("Error: You must select one of the options.")
    } else break; // Do not loop if the user has chosen to include one or more character types
  }
  while (isLowercase === false && isUppercase === false && isNumeric === false && isSpecial === false);
  
  // Generate a string of random characters
  // Loop while the string is under the requested length
  for (var i = 0; i < len; i++) {
    if (isSpecial === true) {
      // Add a random special character to the end of the string
      rndString.concat(getRndSpecial);
    }

    if (isNumeric === true) {
      // Add a random numeric character to the string
      rndString.concat(getRndNum);
    }

    if (isLowercase === true) {
      // Add a random lowercase letter to the string
      rndString.concat(getRndLowercase);
    }

    if (isUppercase === true) {
      // Add a random uppercase letter to the string
      rndString.concat(getRndUppercase);
    }

    // End the loop if the string is at or longer than the requested length
    if (rndString.length >= len){break};
  }
  
  // Return a slice of the string with the requested length
  window.alert("Your password is " + rndString);
  return rndString.slice(0, len);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
