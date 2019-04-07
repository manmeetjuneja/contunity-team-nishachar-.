firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	document.getElementById("user_div").style.display = "initial";
	document.getElementById("login_div").style.display = "block";
  } else {
    // No user is signed in.
	
	document.getElementById("user_div").style.display = "block";
	document.getElementById("login_div").style.display = "initial";
  }
});


function login()
{
	var userEmail = document.getElementbyId("email_field").value;
	var userPassword = document.getElementbyId("password_field").value;
	
	firebase.auth().createUserWithEmailAndPassword(email id,password).catch(function(error) 
{
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
  window.alert("Error : " error message);
  // ...
});
}