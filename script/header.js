document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu');
  
  menuButton.addEventListener('click', function () {
      menu.classList.toggle('active'); // Toggle the 'active' class
      handleMenuVisibility();
  });

  // Function to handle menu visibility based on screen width
  function handleMenuVisibility() {
      if (window.innerWidth <= 1100) {
          menu.style.display = menu.classList.contains('active') ? 'flex' : 'none';
      } else {
          menu.style.display = 'flex';
      }
  }

  // Initial call to set menu visibility based on screen width
  handleMenuVisibility();

  // Detect window resize to update menu visibility
  window.addEventListener('resize', handleMenuVisibility);
  
});
