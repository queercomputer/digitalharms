document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded");
    
    const hamburger = document.getElementById('hamburger');
    const mobileLinks = document.getElementById('mobile-links');
    const reportButton = document.getElementById('report-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButton = document.querySelector('.close-button');
  
    // Existing hamburger menu functionality
    if (hamburger && mobileLinks) {
      hamburger.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Hamburger clicked");
        mobileLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
      });
    } else {
      console.error("Hamburger or mobile links element not found");
    }
  
    // Open the modal when the report button is clicked
    if (reportButton && modalOverlay) {
      reportButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Report button clicked");
        modalOverlay.classList.add('open');
        // Add to open modal function
        document.body.classList.add('modal-open');
        // Hide the hamburger menu
        if (hamburger) {
          hamburger.classList.add('modal-open');
        }
      });
    } else {
      console.error("Report button or modal overlay not found");
    }
  
    // Close the modal when the close button is clicked
    if (closeButton && modalOverlay) {
      closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("Close button clicked");
        modalOverlay.classList.remove('open');
        // Remove 'modal-open' class from body and hamburger menu
        document.body.classList.remove('modal-open');
        if (hamburger) {
          hamburger.classList.remove('modal-open');
        }
      });
    }
  
    // Close the modal when clicking outside the survey container
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
          console.log("Clicked outside the survey container");
          modalOverlay.classList.remove('open');
          // Remove 'modal-open' class from body and hamburger menu
          document.body.classList.remove('modal-open');
          if (hamburger) {
            hamburger.classList.remove('modal-open');
          }
        }
      });
    }
  });