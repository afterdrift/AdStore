document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const dropbtn = document.getElementById('dropbtn');
  const dropdownContent = document.getElementById('dropdown-content');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  if (dropbtn && dropdownContent) {
    dropbtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle('show');
    });
  }
});

/* --- GALLERY SCROLLING (Runs only if galleries exist) --- */
const wrappers = document.querySelectorAll('.gallery-wrapper');

wrappers.forEach(wrapper => {
 
  const gallery = wrapper.querySelector('.gallery');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');

  const scrollAmount = 400;

  if (prevBtn && nextBtn && gallery) {
    prevBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

if (searchInput && searchBtn) {
  function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    const items = document.querySelectorAll('.gallery-link');

    items.forEach(item => {
      const infoElement = item.querySelector('.image-info');
      if (infoElement) {
        const itemName = infoElement.textContent.toLowerCase();
        item.style.display = (itemName.includes(query) || query === "") ? "block" : "none";
      }
    });
  }

  searchBtn.addEventListener('click', performSearch);
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });

  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === "") {
      document.querySelectorAll('.gallery-link').forEach(item => item.style.display = "block");
    }
  });
}
