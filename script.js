var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "?", ":", ";", "<", ">", "=", "@", "[", "]", "^", "_", "`", "{", "}", "~", "|"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


function generatePassword() {
  var length = parseInt(prompt("What do you want the length of your password to be?(range 8-128)"));
  if (length < 8 || length > 128) {
    alert("Your password length must be between 8 and 128. Please try again.");
    return;

  }

  var includeUppercase = confirm("If you have atlest one uppercase, click ok.");
  var includeLowercase = confirm("If you ave atleast one lowercase, click ok.");
  var includeSpecialcharacter = confirm("If you have atleast one special character, click ok.");
  var includeNumber = ("If you have atleast one number, click ok.");
  var requiredPass = []
  console.log(requiredPass)
  if (includeUppercase === false && includeLowercase === false && includeSpecialcharacter === false && includeNumber === false) {
    alert("Must choose one character type.");
    return;

  }
  if (includeUppercase) {
    requiredPass = requiredPass.concat(upperCase);
    console.log(requiredPass);

  }
  if (includeLowercase) {
    requiredPass = requiredPass.concat(lowerCase);
    console.log(requiredPass);

  }
  if (includeSpecialcharacter) {
    requiredPass = requiredPass.concat(specialCharacters);
    console.log = (specialCharacters);

  }
  if (includeNumber){
    requiredPass = requiredPass.concat(numbers);
    console.log = (requiredPass);

  }
  var tempPassword = " ";
  var charactersLength = requiredPass.length;
  for (var i = 0; i < length; i++) {
    tempPassword += requiredPass[Math.floor(Math.random() * charactersLength)];
    console.log(tempPassword);

  }
  return tempPassword;

}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

