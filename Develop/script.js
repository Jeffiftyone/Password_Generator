// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  //possible characters to to be added to password
  let spChar=["!","@","#","$","%","^","&","*","(",")","?","+","-","=",".","<",";",":","|","/","'","[","]","{","}","`","~"];
  let lowerChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let upperChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let numChar=["1","2","3","4","5","6","7","8","9","0"];

  let passlength=prompt("How long should the Password be? (8-128 Characters)");
  //check to see if password length is valid
  
  if (7<passlength<129){
    console.log("user chose a valid number between 8 and 128")
  }

  else{
    alert("This is an invalid choice");
    generatePassword();
  }
  //ask for whether or not to include uppercase, lowercase, numbers, and/or special characters
  //Each prompt should be validated and atleast on character type should be selected
  let newPassword="";
  let inclUpper=confirm("Include UpperCase Letters?");
  let inclLower=confirm("Include LowerCase Letters?");
  let inclNum=confirm("Include Numbers?");
  let inclSpec=confirm("Include special Characters?");
  //check for invalid input
  if(
    (inclLower && inclUpper && inclNum && inclSpec)==false
  ){
    alert("You must add atleast 1 type of input");
    //start at beginning if no inputs
    generatePassword();
  }
    //add the specified characters to a temp array to use for the password characters
    let passwordChar=[];
    if(inclUpper==true){
      passwordChar=passwordChar.concat(upperChar);
    }
    if(inclLower==true){
      passwordChar=passwordChar.concat(lowerChar);
    }
    if(inclNum==true){
      passwordChar=passwordChar.concat(numChar);
    }
    if(inclSpec==true){
      passwordChar=passwordChar.concat(spChar);
    }
  console.log(passwordChar);
      //Generate password after all prompts answered
  for(i=0;i<=passlength;i++){
     let index=Math.floor(Math.random() * passwordChar.length);
     newPassword=newPassword+passwordChar[index];
  }

  //new password generated
  return newPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Password: "+ password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
