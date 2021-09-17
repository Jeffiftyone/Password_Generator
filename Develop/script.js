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
  
  if (passlength>8||passlength<129){
    console.log("user chose a valid number between 8 and 128")
  }

  else{
    alert("This is an invalid choice");
  
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
    ((inclLower==false) && (inclUpper==false) && (inclNum==false) && (inclSpec==false))
  ){
    alert("You must add atleast 1 type of input");
    //start at beginning if no inputs
    generatePassword();
  }
    //add the specified characters to a temp array to use for the password characters
    let passwordChar=[];
    let charTypes=0;
    //ensures at least one uppercase is added if true
    if(inclUpper==true){
      passwordChar=passwordChar.concat(upperChar);
      newPassword=newPassword+upperChar[Math.floor(Math.random() * upperChar.length)];
      charTypes++;
    }
    //ensures at least one lower case is added if true
    if(inclLower==true){
      passwordChar=passwordChar.concat(lowerChar);
      newPassword=newPassword+lowerChar[Math.floor(Math.random() * lowerChar.length)];
      charTypes++;
    }
    //ensures at least one number is added if true
    if(inclNum==true){
      passwordChar=passwordChar.concat(numChar);
      newPassword=newPassword+numChar[Math.floor(Math.random() * numChar.length)];
      charTypes++;
    }
    
    //ensures at least one special character is added if true
    if(inclSpec==true){
      passwordChar=passwordChar.concat(spChar);
      newPassword=newPassword+spChar[Math.floor(Math.random() * spChar.length)];
      charTypes++;
    }
    console.log(charTypes+"outside of check ,this is current pass"+newPassword);
    
  console.log(passwordChar);
      //Generate password after all prompts answered
  for(i=0;i<(passlength-charTypes);i++){
     let randIndex=Math.floor(Math.random() * passwordChar.length);
     newPassword=newPassword+passwordChar[randIndex];
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
