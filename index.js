document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const searchBox = document.querySelector('.input-search');
  const closeIcon = document.querySelector('.icon-close');
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const topSearchST = document.getElementById('search-results-scroll-trigger');

  searchBox.addEventListener('input', (event) => {
    event.target.value
      ? closeIcon.classList.add('has-search-text')
      : closeIcon.classList.remove('has-search-text');
  });

  closeIcon.addEventListener('click', () => {
    searchBox.value = '';
    closeIcon.classList.remove('has-search-text');
  });

  menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });
  // gradual fade to black for header on scroll
  document.addEventListener('scroll', () => {
    header.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,${
      window.pageYOffset / 400
    }) 30%, transparent 100%)`;
  });

  /* IntersectionObserver for making the header solid black when the page
   * is scrolled down to where the header is on top of the search grid element
   */
  const topSearchObserver = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('has-scroll-to-target');
      } else {
        header.classList.remove('has-scroll-to-target');
      }
    });
  });

  topSearchObserver.observe(topSearchST);
});
