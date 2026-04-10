// Gallery navigation
document.querySelectorAll('.gallery-wrapper').forEach(wrapper => {
  const gallery = wrapper.querySelector('.gallery');
  const prevBtn = wrapper.querySelector('.prev');
  const nextBtn = wrapper.querySelector('.next');
  const scrollAmount = 400;

  if (gallery && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }
});

// Dropdown toggle
function toggleMenu() {
  const list = document.getElementById("myDropdown");
  list.style.display = (list.style.display === "block") ? "none" : "block";
}

// Search functionality
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function performSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const items = document.querySelectorAll('.gallery-item');

  if (!query) {
    items.forEach(item => item.style.display = "block");
    return;
  }

  let found = false;
  items.forEach(item => {
    const itemName = item.querySelector('.image-info').textContent.toLowerCase();
    if (itemName.includes(query)) {
      item.style.display = "block";
      found = true;
    } else {
      item.style.display = "none";
    }
  });

  if (!found) {
    alert(`No items found matching '${query}'. Showing all items.`);
    items.forEach(item => item.style.display = "block");
  }
}

// Event listeners
searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') performSearch();
});

searchInput.addEventListener('input', () => {
  if (!searchInput.value.trim()) {
    document.querySelectorAll('.gallery-item').forEach(item => item.style.display = "block");
  }
});