const validation = document.getElementById("form-validation");


validation.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const FirstName = document.getElementById("FirstName").value.trim();
  const SecondName = document.getElementById("SecondName").value.trim();
  const gmail = document.getElementById("gmail").value.trim();
  const password = document.getElementById("password").value.trim();
  const cpassword = document.getElementById("cpassword").value.trim();
  const successful = document.getElementById("successful");
  
  // for all errors messages 
  const firstNameP = document.getElementById("first-name-p");
  const secondNameP = document.getElementById("second-name-p");
  const gmailP = document.getElementById("gmail-p");
  const passwordP = document.getElementById("password-p");
  const cPasswordP = document.getElementById("c-password-p");
  
  firstNameP.innerHTML = "";
  secondNameP.innerHTML = "";
  gmailP.innerHTML = "";
  passwordP.innerHTML = "";
  cPasswordP.innerHTML = "";
  
  //for first name
  if(FirstName === ''){
    firstNameP.innerHTML = "First name can not be empty";
    return;
  }
  
  if(FirstName.length < 3){
    firstNameP.innerHTML = "Name can not be less than 3";
  }
  
  // for second name
  if(SecondName === ''){
    secondNameP.innerHTML = "Second name is required to continue";
    return;
  }
  
  if(SecondName.length < 3) {
    secondNameP.innerHTML = "Name can not be less than 3 also"
  }
  
  if(!gmail.includes("@gmail") || !gmail.includes(".")){
    gmailP.innerHTML = "gmail is invalid";
    return;
  }
  
  if(password.length < 8 || cpassword.length < 8){
    passwordP.innerHTML = 'password must be 8 character or longer';
    return
  }
  
  if(cpassword  !== password ){
    cPasswordP.innerHTML = "passwords do not match";
    return;
  }
  
  
  successful.innerHTML = "You have successfully registered";
  successful.style.color = "green";
  validation.reset();
  
  setTimeout(() => {
    validation.submit();
  }, 3000);
  
});