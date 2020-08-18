/*  eslint-env es6*/
//THis TEMplate made by SHubham Mali

window.onload = function() {
let menu = document.querySelector('#menu');
let body = document.querySelector('body');
let drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
/*  if click anywhere on the screen, the menu closes*/
body.addEventListener('click', function() {
  drawer.classList.remove('open');
});
};
//THis TEMplate made by SHubham Mali
