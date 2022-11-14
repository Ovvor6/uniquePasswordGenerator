// Assignment code here

var passLength = -1;
// character bank 
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters ="0123456789";
var specialCharactersBank = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|"

//collected character bank (BIG BANK)
var characterBank = "";

//gathering password information to generate password
function generatePassword() {
// alerting the user to provide valid inputs with the following prompts
  alert("criteria to include in the password, length of at least 8 characters and no more than 128 characters, whether or not to include lowercase, uppercase, numeric, and/or special characters");
  do { 
    //input prompt asking user how many characters password would be
    passLength= prompt("How many characters do you want? (8-128)");
  }
  //valid input that for character length
  while (passLength < 8 || passLength > 128)
  //confirming if user wants lowercase characters
  let lowerCase= confirm("would you like lowercase characters?");
  if (lowerCase){
    // adding lowercase characters to big bank
    characterBank += lowerCaseCharacters;
  };
  let upperCase= confirm("would you like uppercase characters?");
  if(upperCase){
    // adding uppercase characters to big bank
    characterBank += upperCaseCharacters;
  };
  let numbers= confirm("would you like number characters?");
  if (numbers){
    // adding number characters to big bank
    characterBank += numberCharacters;
  };
  let specialCharacters= confirm("would you like special characters?");
  if (specialCharacters){
    // adding number characters to big bank
    characterBank += specialCharactersBank;
  };
  var password = "";
  for(let i = 0; i < passLength; i++){
    var randomIndex = Math.floor(Math.random() * characterBank.length);
    // gettting random string character from random number character
    let randomCharacter = characterBank.charAt(randomIndex);
    password += randomCharacter;
  }
  //
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

