document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navItems = document.querySelectorAll('.nav-item');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // Toggle mobile menu
    navbarToggler.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarCollapse.classList.toggle('active');
        
        // Add animation to nav items when menu opens
        if (navbarCollapse.classList.contains('active')) {
            navItems.forEach((item, index) => {
                item.style.animation = `slideIn 0.3s ease forwards ${index * 0.1 + 0.3}s`;
            });
        } else {
            navItems.forEach(item => {
                item.style.animation = '';
            });
        }
    });
    
    // Handle dropdowns on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const dropdown = this.parentElement.querySelector('.dropdown-menu');
                dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                
                // Rotate icon
                const icon = this.querySelector('.dropdown-icon');
                icon.style.transform = dropdown.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navbarToggler.classList.remove('active');
                navbarCollapse.classList.remove('active');
            }
        });
    });
});

//------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Add click event to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target section ID from href attribute
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') {
        // Scroll to top if it's the Home link
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else if (targetId.startsWith('#')) {
        // Scroll to section
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
      
      // Close mobile menu if open (optional)
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});

// Smooth scrolling for navigation
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor behavior
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Handle Home link (scroll to top)
      if (targetId === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      // Handle section links
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Calculate the position to scroll to (accounting for fixed navbar)
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setupSmoothScrolling();
});


document.addEventListener('DOMContentLoaded', function() {
  // Handle all navigation links (including dropdown items)
  const allNavLinks = document.querySelectorAll('.nav-link, .dropdown-item');
  
  allNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default only if it's a hash link
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Handle Home link (scroll to top)
        if (targetId === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }
        
        // Scroll to section
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Calculate position accounting for fixed navbar
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
      
      // Close dropdown menu if open
      const dropdownMenu = this.closest('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.style.display = 'none';
      }
    });
  });
  
  // Keep the dropdown toggle functionality
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      const dropdownMenu = this.nextElementSibling;
      if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.matches('.dropdown-toggle') && !e.target.closest('.dropdown-menu')) {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
      });
    }
  });

  // Handle social links - prevent default behavior for internal links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only prevent default for links that are just "#"
      if (this.getAttribute('href') === '#') {
        e.preventDefault();
      }
      // Allow normal behavior for links with actual URLs
    });
  });
});