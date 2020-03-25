const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const header = document.querySelector('.header');

document.addEventListener('scroll', () => {
  window.pageYOffset > 20
    ? header.classList.add('has-scroll')
    : header.classList.remove('has-scroll');
});

menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hide');
});
