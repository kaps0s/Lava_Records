if (document.cookie.split(';').some((item) => item === "")) {
  document.cookie="USERNAME=null";
  

}

// check if a user is logged with cookie
if (document.cookie.split(';').some((item) => item.includes('USERNAME=null'))) {
  document.getElementById("favorites").style.display = 'none';
  document.getElementById("logout").style.display = 'none';
  document.getElementById("login").style.display = 'inline-block';
  document.getElementById("register").style.display = 'inline-block';
  document.querySelector('.favorite_heart_1').style.display = 'none';
  document.querySelector('.favorite_heart_2').style.display = 'none';
  document.querySelector('.favorite_heart_3').style.display = 'none';
  document.querySelector('.favorite_heart_4').style.display = 'none';
  

}else{
  
  document.getElementById("login").style.display = 'none';
  document.getElementById("register").style.display = 'none';
  document.getElementById("record_anchor").href = "update_records.php";
  document.getElementById("home_anchor").href = "update_index.php";
  document.getElementById("contact_anchor").href = "update_contact.php";
  document.getElementById("logo").href = 'update_index.php';

}

document.querySelector('.favorite_heart_1').addEventListener('click', (e) => {

  let bool = e.currentTarget.classList.toggle('favorite_heart_toggle');
  if (bool){

    document.cookie = "RECORD_1=true";
  
  }
  else{

    document.cookie = "RECORD_1=false";
    let x = document.querySelector('.record_container_1').classList.toggle('invisible');

  }

});

document.querySelector('.favorite_heart_2').addEventListener('click', (e) => {

  let bool = e.currentTarget.classList.toggle('favorite_heart_toggle');
  if (bool){

    document.cookie = "RECORD_2=true";

  }
  else{

    document.cookie = "RECORD_2=false";
    let x = document.querySelector('.record_container_2').classList.toggle('invisible');

  }

});

document.querySelector('.favorite_heart_3').addEventListener('click', (e) => {
  /*console.log('!!!!!');*/
  let bool = e.currentTarget.classList.toggle('favorite_heart_toggle');
  if (bool){
    document.cookie = "RECORD_3=true";

  }
  else{
    document.cookie = "RECORD_3=false";
    let x = document.querySelector('.record_container_3').classList.toggle('invisible');

  }
});

document.querySelector('.favorite_heart_4').addEventListener('click', (e) => {

  let bool = e.currentTarget.classList.toggle('favorite_heart_toggle');
  if (bool){
    document.cookie = "RECORD_4=true";
  }
  else{
    console.log("record-4 false");
    document.cookie = "RECORD_4=false";
    let x = document.querySelector('.record_container_4').classList.toggle('invisible');
  }
});


  

let x = document.cookie.split(";");
for (var i = 0; i < x.length; i++){

  if (x[i].includes("RECORD_1")){
    if(x[i].includes("RECORD_1=true") || (x[i].includes("RECORD_1=t"))){
      document.querySelector('.favorite_heart_1').classList.toggle('favorite_heart_toggle');
    }else{
      document.querySelector('.record_container_1').classList.toggle('invisible');
    }
  }

  if (x[i].includes("RECORD_2")){
    if(x[i].includes("RECORD_2=true") || x[i].includes("RECORD_2=t")){
      document.querySelector('.favorite_heart_2').classList.toggle('favorite_heart_toggle');
    }else{
      document.querySelector('.record_container_2').classList.toggle('invisible');
    }
  }

  if (x[i].includes("RECORD_3")){
    if(x[i].includes("RECORD_3=true") || x[i].includes("RECORD_3=t")){
      document.querySelector('.favorite_heart_3').classList.toggle('favorite_heart_toggle');
    }else{
      document.querySelector('.record_container_3').classList.toggle('invisible');
    }
  }

  if (x[i].includes("RECORD_4")){
    if(x[i].includes("RECORD_4=true") || x[i].includes("RECORD_4=t")){
      document.querySelector('.favorite_heart_4').classList.toggle('favorite_heart_toggle');
    }else{
      document.querySelector('.record_container_4').classList.toggle('invisible');
    }
  }
}




