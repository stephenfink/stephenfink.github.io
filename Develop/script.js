
var generateBtn = document.querySelector("#generate");
//possible content arrays I can make each letter/number into a unit
generateBtn.addEventListener("click", writePassword);
//WHEN I click the button to generate a password

// Assignment Code
var caseUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var caseLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var caseNum = ["0","1","2","3","4","5","6","7","8","9"]
var symbolLetters = ["!","@","#","$","%","^","&","*","(",")","+","-"];
var password;
var passLength 
var pWChoice = [];
// Write password to the #password input
// Assignment Code


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  
  passLength = (prompt("how long you want the password between 8 and 128"));
  if ((passLength => 8 && passLength <=128)) {
    console.log(passLength)
  }
  else {alert("must color between the lines")
return};



upperCase = confirm("do you want upper case? yes or no");
if (upperCase === true) {
  pWChoice = pWChoice + caseUpper
  console.log(upperCase)
}
else {pWChoice = pWChoice
  console.log(upperCase);}

lowerCase = confirm("do you want lower case? yes or no");
if (lowerCase === true) {
  pWChoice = pWChoice + caseLower
  console.log(lowerCase);
}
else {
  pWChoice = pWChoice
  console.log(lowerCase);
};


numCase = confirm("do you want numbers? yes or no");
if (numCase === true) {
  pWChoice = pWChoice + caseNum
  console.log(numCase);
}
else {
  pWChoice = pWChoice
  console.log(numCase);
};


var symbolCase = confirm("do you want symbols? yes or no");
if (symbolCase === true) {
  pWChoice = pWChoice + symbolLetters
  console.log(symbolCase);
  console.log(pWChoice)
}
else {pWChoice + pWChoice
  console.log(symbolCase);
  console.log(pWChoice);
}

  var password ="";
 
  for (var i = 1; i <= passLength; i++) {
    var rNGen = pWChoice[Math.floor(Math.random()*passLength)];
    password = rNGen + password;
    console.log(rNGen)
    console.log(password)
  }
  return password;
}
