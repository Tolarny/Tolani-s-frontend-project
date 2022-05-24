const menu = document.querySelector('#togglemenu');
const menuLinks = document.querySelector('.navebar');

menu.addEventListener('click', function(){
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
});