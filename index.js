const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const searchGrid = document.getElementById('search-grid-scroll-trigger');
const searchTop = document.getElementById('top-scroll-trigger');
const header = document.querySelector('.header');

document.addEventListener('scroll', () => {
  window.pageYOffset > 20
    ? header.classList.add('has-scroll')
    : header.classList.remove('has-scroll');
});

menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hide');
});

// const sections = document.querySelectorAll('div.screen');
const gridObserverConfig = {
  // rootMargin: '-50px 0px -55%',
  threshold: 0.6
};

const gridObserver = new IntersectionObserver(function(entries, self) {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      gridIntersectionHandler(entry);
    } else {
      header.classList.remove('has-scroll-to-target');
    }
  });
}, gridObserverConfig);

gridObserver.observe(searchGrid);

function gridIntersectionHandler(entry) {
  const id = entry.target.id;

  if (id === 'search-grid-scroll-trigger') {
    console.log('in grid');
    header.classList.remove('has-scroll');
    header.classList.add('has-scroll-to-target');
  }
}

// const topObserverConfig = {
//   // rootMargin: '-50px 0px -55%',
//   threshold: 0.8
// };

// const topObserver = new IntersectionObserver(function(entries, self) {
//   entries.forEach(entry => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       header.classList.add('has-scroll');
//     } else {
//       header.classList.remove('has-scroll');
//     }
//   });
// }, topObserverConfig);

// topObserver.observe(searchTop);

// function gridIntersectionHandler(entry) {
//   const id = entry.target.id;
//   console.log(id);
//   console.log(window.pageYOffset);

//   if (id === 'search-top-featured') {
//     console.log('in search');
//     header.classList.add('has-scroll');
//   }
// }
