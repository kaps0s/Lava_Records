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



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

window.onbeforeunload = function () {
  
};






