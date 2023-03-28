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