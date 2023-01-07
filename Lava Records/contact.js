function redirect()
{
    
    document.location.href = "mailto:mail@example.org?subject="+document.getElementById("title").value+"&body="+document.getElementById("message").value;
}




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


