$(document).ready(function(){
  $('h1').click(function(){
    console.log('clicked');
  });
});

var slideIndex =1;
showSlides(slideIndex);

function changeSlide(n){
  showSlides(slideIndex +=n);
}

function currentSlide(n){
  showSlides(slideIndex =n);
}

function showSlides(n){
  var i;
  var arr= document.getElementsByClassName("mySlides");
  if (n > arr.length){
    slideIndex =1;
  }
  if (n < 1){
    slideIndex =arr.length;
  }
  for (i=0; i<arr.length; i++){
    arr[i].style.display="none";
  }
  arr[slideIndex-1].style.display="block";
}
