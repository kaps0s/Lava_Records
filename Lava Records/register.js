console.log(document.cookie);

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

checkDatabase();




function checkFields(){
  
  //console.log(/^([a-zA-Z]|\.|,|!|;|(|)|-|<<|>>|:)+$/.test(document.getElementById('username').value));
  let bool = true;

  if (document.getElementById('username').value.length == 0){
    //console.log("braaaaahhhhh");
    document.getElementById('usernameMessage').innerHTML = "You have to fill this field!";
    bool = false;
  }else if(!(/^([a-zA-Z]|\.|,|!|;|(|)|-|<<|>>|:)+$/.test(document.getElementById('username').value))){
    document.getElementById('username').value = "";
    document.getElementById('usernameMessage').innerHTML = "Not a valid username!";
    bool = false;
  }

  if ((document.getElementById('email').value.length == 0)){
    document.getElementById('emailMessage').innerHTML = "You have to fill this field!";
    bool = false;
  }else if(!(/^[a-zA-Zα]+@[a-zA-Zα]+\.[a-zA-Z]+$/.test(document.getElementById('email').value))){
    document.getElementById('email').value = "";
    document.getElementById('emailMessage').innerHTML = "Not a valid email!";
    bool = false;
  }

  if (document.getElementById('password').value.length == 0 || document.getElementById('password2').value.length == 0){
    if (document.getElementById('password').value.length == 0){
      document.getElementById('passwordMessage').innerHTML = "You have to fill this field!";
      bool = false;
    }

    if (document.getElementById('password2').value.length == 0){
      document.getElementById('confirmPasswordMessage').innerHTML = "You have to fill this field!";
      bool = false;
    }

  }else if(document.getElementById('password').value != document.getElementById('password2').value){
    document.getElementById('password').value = "";
    document.getElementById('password2').value = "";

    document.getElementById('confirmPasswordMessage').innerHTML = "Passwords not identical!";
    bool = false;
  }

  if (!bool){
    document.getElementById('password').value = "";
    document.getElementById('password2').value = "";
  }

  return bool;
}

function checkDatabase(){
    //fill all field values && checks for pg_errors
    let x = document.cookie.split(";");
    for (var i = 0; i < x.length; i++){
      if (x[i].includes("USERNAME_COPY")){
        document.getElementById('username').value = x[i].substring(15);
      }
  
      if (x[i].includes("EMAIL")){
        document.getElementById('email').value = x[i].substring(7);
      }
  
      if (x[i].includes("PG_ERROR")){
        if(x[i].includes("PG_ERROR=\"\"")){
          continue;
        }else if(x[i].includes("username")){
          document.getElementById("username").value = "";
          document.getElementById("usernameMessage").innerHTML = "Username already exists!";
        }else if(x[i].includes("email")){
          document.getElementById("email").value = "";
          document.getElementById("emailMessage").innerHTML = "Email already exists!";
        }
        document.getElementById('password').value = "";
        document.getElementById('password2').value = "";
        return false;
      }
    }
    return true;
}

function setCookies(){

  document.cookie = "USERNAME_COPY=" + document.getElementById('username').value;
  document.cookie = "EMAIL=" + document.getElementById('email').value;
  
  document.cookie = "RECORD_1=false";
  document.cookie = "RECORD_2=false";
  document.cookie = "RECORD_3=false";
  document.cookie = "RECORD_4=false";


};

function clearHiddenMessages(){
  document.getElementById("usernameMessage").innerHTML = "";
  document.getElementById("emailMessage").innerHTML = "";
  document.getElementById('passwordMessage').innerHTML = "";
  document.getElementById('confirmPasswordMessage').innerHTML = "";
  document.getElementById("connectionMessage").innerHTML = "";
}

function send(){
  setCookies(); 
  clearHiddenMessages();
  return checkFields();
}
