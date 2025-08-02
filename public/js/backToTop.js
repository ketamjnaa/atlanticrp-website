document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById('backToTop');
  
  // Check if element exists
  if (backToTop) {
      // Remove the default link behavior completely
      backToTop.removeAttribute('href');
      
      backToTop.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          // Force scroll to top
          document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
          document.body.scrollTop = 0; // For Safari
          
          return false;
      }, false);

      // Show/hide based on scroll position
      window.addEventListener('scroll', () => {
          // Only perform scroll behavior on mobile
          if (window.innerWidth <= 800) {
              const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
              
              if (scrollPosition > 300) {
                  backToTop.style.display = 'flex';
                  backToTop.style.opacity = '1';
                  backToTop.style.pointerEvents = 'auto';
              } else {
                  backToTop.style.opacity = '0';
                  backToTop.style.pointerEvents = 'none';
              }
          }
      });
  }
});