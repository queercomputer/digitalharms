document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded");
    
    const hamburger = document.getElementById('hamburger');
    const mobileLinks = document.getElementById('mobile-links');
    const reportButton = document.getElementById('report-button');
    const surveyContainer = document.querySelector('.survey-container');
  
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

    if (reportButton && surveyContainer) {
        reportButton.addEventListener('click', function(event) {
            event.preventDefault();
            console.log("Report button clicked");
            surveyContainer.classList.toggle('open');
        });
    } else {
        console.error("Report button or survey container not found");
    }
    
  });