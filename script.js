// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRndSpecial() {
  return Math.floor(Math.random() * 13) + 33;
}

function getRndNum() {
  return Math.floor(Math.random() * 10);
}

function getRndLowercase() {
  return Math.floor(Math.random() * 25) + 97;
}

function getRndUppercase() {
  return Math.floor(Math.random() * 25) + 65;
}

// generate a random Password
function generatePassword() {
  // Initialize all character choices as false
  var notLowercase = true;
  var notUppercase = true;
  var notNumeric = true;
  var notSpecial = true;

  window.alert("Let's make your password!");

  // Prompt for password length between 8 and 128 characters
  var len = window.prompt("How long would you like your password to be? Please enter a number between 8 and 128:");
  
  // Get the length for the password
  while (len < 8 || len > 128 || isNaN(len)){
    len = window.prompt("Please choose a number between 8 and 128:");
  }

  
  
  // Ask for the character options
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
    } else break;
  }
  while (notLowercase == notUppercase == notNumeric == notSpecial == true);
  
  // Generate a random string of characters based on those variables
  // Iterate to make the password as long as requested
  while ()
    // If the chose to add lowercase letters, add a lowercase letter
    // I want to check this once, not on every loop... ugh
    if (notSpecial == false) {
      pword[i].push(getRndSpecial);
      i++;
    }

    if (notNumeric == false) {
      pword[i].push(getRndNum);
      i++;
    }

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
