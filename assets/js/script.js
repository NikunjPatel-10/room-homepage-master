

let slideIndex = 1;
showSlides(slideIndex);

function showData(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none"
    }
   slides[slideIndex -1].style.display = "flex"
}

function openmenu(){
  document.getElementById('mobile-nav').classList.add('nav-mobile');
}

function closemenu(){
   document.getElementById('mobile-nav').classList.remove('nav-mobile');
}