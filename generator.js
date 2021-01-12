// Code Assignment Variables
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#password");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Values for password variables 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is used to identify the Uppercase conversion
space = [];
// Choices declared outside the "if" statement, so "concat" can be used based on variables
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
  return x.toUpperCase();
};


// creates a "variable" for Text: uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");
var generatePassword;
get.addEventListener("click", function () {
  generatePassword()
});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generatePassword = function () {

  // First user prompt

  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));


  // First statement requiring user input 

  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Accepts user input
    // Begin user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));
  }

  else {
    // Continues to next prompt once user input is validated

    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

  }
  // First statement that uses valiodated input prompts to determine response

  // Else if "solution" for 4 positive options

  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
  }
  // Else if "solution" for 3 positive options

  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(alpha, alpha2);
  }
  // Else if "solution" for 2 positive options 

  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(alpha2);
  }
  // Else if "solution" for 1 positive option

  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = alpha;
  }
  // Created space variable to fill uppercase conversion

  else if (confirmUppercase) {
    choices = space.concat(alpha2);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start variables for random "function":

  // Random selection "solution" for all variables: 

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  };

  // This joins the password array and converts it to a string

  var ps = password.join("");
  UserInput(ps);
  return ps;
};
// This puts the password "value" into the textbox

// Changed function input to use textcontent property
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

};





