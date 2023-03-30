// Write your JavaScript here...

// Responsive Menu - Dropdown
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');

//Event listeners to open and close the menu
btnMenu.addEventListener('click', openMenu);
document.addEventListener('click', closeMenu);

// Prevents the focus state from activating
btnMenu.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

//To open the menu
function openMenu(event) {
  event.stopPropagation();
  btnMenu.classList.toggle('clicked');
  nav.classList.toggle('open');
}

//To close the menu once the mouse is clicked elsewhere
document.addEventListener('click', function(e) {
  if (!nav.contains(e.target) && e.target !== btnMenu) {
    closeMenu();
  }
});

function closeMenu (){
  btnMenu.classList.remove('clicked');
  nav.classList.remove('open');
}

// Automatic Slideshow
let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("ellipses");



showSlides();
function currentSlide(index) {
     slideIndex = index;
     showSlides();
}
function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}
function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
   if(timeoutId) {
      clearTimeout(timeoutId);
   }
  timeoutId = setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}