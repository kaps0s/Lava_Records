if (document.cookie.split(';').some((item) => item === "")) {
  document.cookie="USERNAME=null";

}

// check if a user is logged with cookie
if (document.cookie.split(';').some((item) => item.includes('USERNAME=null'))) {
  document.getElementById("favorites").style.display = 'none';
  document.getElementById("logout").style.display = 'none';
  document.getElementById("login").style.display = 'inline-block';
  document.getElementById("register").style.display = 'inline-block';

}else{
  
  document.getElementById("login").style.display = 'none';
  document.getElementById("register").style.display = 'none';

}

let x = document.cookie.split(";");
for (var i = 0; i < x.length; i++){
  if (x[i].includes("PG_ERROR=Entry_not_found")){
    //console.log("dkfdjsfkjdskfjdsk");
    document.getElementById('formMessage').innerHTML = "Username or Password incorect!";
    document.cookie = "PG_ERROR=";
    document.getElementById('usernameMessage').innerHTML = "";
    document.getElementById('passwordMessage').innerHTML = "";
    
    break;
  }
  //console.log("!!!!!!!");
  console.log(x[i]);
}

function checkFields(){
  let bool;
  if (document.getElementById('username').value == ""){
    document.getElementById('usernameMessage').innerHTML = "You have to fill this field!";
    document.getElementById('formMessage').innerHTML = "";
    bool = false;
  }

  if (document.getElementById('password').value == ""){
    document.getElementById('passwordMessage').innerHTML = "You have to fill this field!";
    document.getElementById('formMessage').innerHTML = "";
    bool = false;
  }

  return bool;
}