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

function toggleMenu() {
  var list = document.getElementById("myDropdown");
  if (list.style.display === "block") {
    list.style.display = "none";
  } else {
    list.style.display = "block";
  }
}

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function performSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const items = document.querySelectorAll('.gallery-item');

  if (query === "") {
    items.forEach(item => item.style.display = "block");
    return;
  }

  const matches = Array.from(items).filter(item => {
    const itemName = item.querySelector('.image-info').textContent.toLowerCase();
    return itemName.includes(query);
  });


  if (matches.length > 0) {
    items.forEach(item => {
      const itemName = item.querySelector('.image-info').textContent.toLowerCase();
      if (itemName.includes(query)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  } else {

    alert("No items found matching '" + query + "'. showing all items.");
    items.forEach(item => item.style.display = "block");
  }
}

searchBtn.addEventListener('click', performSearch);

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearch();
  }
});


searchInput.addEventListener('input', () => {
  if (searchInput.value.trim() === "") {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => item.style.display = "block");
  }
});
