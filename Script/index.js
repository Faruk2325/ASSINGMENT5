const loginBtn = document.getElementById("loginBtn");
const userName = document.getElementById("userName");
const userPassword = document.getElementById("userPassword");

loginBtn.addEventListener("click", function(e){
    e.preventDefault()
  const name = userName.value;
  const password = userPassword.value;
 
  if(name === "admin" && password === "admin123"){
    window.location = "Issues.html"
  }
  else{
    alert( "Wrong username or password ")
  }

})