const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.side-nav');
const navLinks = document.querySelectorAll('.nav-link');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navigation.classList.toggle('open', !isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    if (menuButton && navigation) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      navigation.classList.remove('open');
    }
  });
});

const footerTemplate = `
  <footer class="site-footer">
    <div class="footer-content container">
      <div>
        <a class="footer-name" href="index.html">John Kiteto</a>
        <p>IT student and aspiring software engineer building thoughtful digital solutions.</p>
      </div>
      <div class="footer-contact">
        <a href="mailto:Johnkitman7@gmail.com">Johnkitman7@gmail.com</a>
        <a href="tel:+254115843006">+254 115 843 006</a>
      </div>
      <div class="social-links" aria-label="Social media links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><span aria-hidden="true">GH</span></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><span aria-hidden="true">in</span></a>
      </div>
    </div>
    <p class="copyright">© <span class="current-year"></span> John Kiteto. All rights reserved.</p>
  </footer>`;

document.querySelectorAll('[data-site-footer]').forEach((footerSlot) => {
  footerSlot.innerHTML = footerTemplate;
  footerSlot.querySelector('.current-year').textContent = new Date().getFullYear();
});
