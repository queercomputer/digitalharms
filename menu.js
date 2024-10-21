document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded");
    
    const hamburger = document.getElementById('hamburger');
    const mobileLinks = document.getElementById('mobile-links');
  
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
  });