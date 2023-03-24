// Write your JavaScript here...

// Responsive Menu - Dropdown
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');


btnMenu.addEventListener('click', openMenu);
// Prevents the focus state from activating
btnMenu.addEventListener('mousedown', function (e) {
  e.preventDefault();
});

function openMenu() {
  btnMenu.classList.toggle('clicked');
  nav.classList.toggle('open');

}
