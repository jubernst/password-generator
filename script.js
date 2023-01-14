// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 13) + 33);
}

function getRndNum() {
  return Math.floor(Math.random() * 10);
}

function getRndLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 97);
}

function getRndUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 65);
}

// generate a random Password
function generatePassword() {
  // Initialize all character choices as false
  var notLowercase = true;
  var notUppercase = true;
  var notNumeric = true;
  var notSpecial = true;
  var pword;

  window.alert("Let's make your password!");

  // Prompt for password length between 8 and 128 characters
  var len = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128:");
  
  // If the number entered is not between 8 and 128, or isn't a number, prompt again
  while (len < 8 || len > 128 || isNaN(len)){
    len = window.prompt("Please choose a number between 8 and 128:");
  }
  
  // Ask the user which characters they would like to include
  // Loop while no options have been selected
  do {
    console.log("You're in the loop!");

    if(window.confirm("Would you like your password to include lowercase letters?")){
      txt = "You chose to include lowercase"
      notLowercase = false;
    } else {
      txt = "You chose not to include lowercase"
      notLowercase = true;
    };

    if (window.confirm("Would you like your password to include uppercase letters?")){
      txt = "You chose to include uppercase letters"
      notUppercase = false;
    } else {
      txt = "You chose not to include uppercase letters"
      notUppercase = true;
    };

    if (window.confirm("Would you like your password to include numbers?")){
      txt = "You chose to include numbers"
      notNumeric = false;
    } else {
      txt = "You chose not to include numbers"
      notNumeric = true;
    };

    if (window.confirm("Would you like your password to include special characters?")){
      txt = "You chose to include special characters"
      notSpecial = false;
    } else {
      txt = "You chose not to special characters"
      notSpecial = true;
    };

    // Catch if no options have been selected, repeat the prompts
    if (notLowercase == notUppercase == notNumeric == notSpecial == true) {
      window.alert("Error: You must select one of the options.")
    } else break; // Do not loop if the user has selected an option
  }
  while (notLowercase == notUppercase == notNumeric == notSpecial == true);
  
  // Randomly generate a string with the requested characters
  // Loop while the string is under the requested length
  do {

    if (notSpecial == false) {
      // Add a random special character to the string
      pword.concat(getRndSpecial);
    }

    if (notNumeric == false) {
      // Add a random numeric character to the string
      pword.concat(getRndNum);
    }

    if (notLowercase == false) {
      // Add a random lowercase letter to the string
      pword.concat(getRndLowercase);
    }

    if (notUppercase == false) {
      // Add a random uppercase letter to the string
      pword.concat(getRndUppercase);
    }

  } while (pword.length <= len);

  // Slice the string to the desired length
  pword.slice(0, len+1);
  
  // return the password
  return pword;
  }
  
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
