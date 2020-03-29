document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const topSearchST = document.getElementById('search-results-scroll-trigger');
  const headerST = document.getElementById('header-scroll-trigger');
  const header = document.querySelector('.header');

  menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hide');
  });

  /* IntersectionObserver for giving the header a gradient black when the page
   * is scrolled down about 20px
   */
  const headerObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('has-scroll');
      } else {
        header.classList.remove('has-scroll');
      }
    });
  });

  headerObserver.observe(headerST);

  /* IntersectionObserver for making the header solid black when the page
   * is scrolled down to where the header is on top of the search grid element
   */
  const topSearchObserver = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('has-scroll-to-target');
      } else {
        header.classList.remove('has-scroll-to-target');
      }
    });
  });

  topSearchObserver.observe(topSearchST);
});
