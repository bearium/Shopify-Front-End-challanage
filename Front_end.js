function signup(){

  var email = document.getElementById("email").value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    console.log("validated Email: " + email + ", Interest: " + document.getElementById("dropdown").value);
    document.getElementById('error').style.display = "none";
    return true;
  }
  document.getElementById('error').style.display = "block";
  return false;
}
