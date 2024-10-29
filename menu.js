document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded");
    
    const hamburger = document.getElementById('hamburger');
    const mobileLinks = document.getElementById('mobile-links');
    const reportButton = document.getElementById('report-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButton = document.querySelector('.close-button');
    const loadingSpinner = document.getElementById('loading-spinner');

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
            // Show the loading spinner
            if (loadingSpinner) {
                loadingSpinner.style.display = 'block';
            }
            // Call the function to hide spinner when survey is loaded
            hideSpinnerWhenSurveyLoaded();
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
            // Hide the loading spinner
            if (loadingSpinner) {
                loadingSpinner.style.display = 'none';
            }
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
                // Hide the loading spinner
                if (loadingSpinner) {
                    loadingSpinner.style.display = 'none';
                }
                // Remove 'modal-open' class from body and hamburger menu
                document.body.classList.remove('modal-open');
                if (hamburger) {
                    hamburger.classList.remove('modal-open');
                }
            }
        });
    }

    // Function to hide the spinner when the survey has loaded
    function hideSpinnerWhenSurveyLoaded() {
        const surveyContainer = document.querySelector('.survey-container');
        if (surveyContainer && loadingSpinner) {
            // Create a MutationObserver to watch for changes in the survey container
            const observer = new MutationObserver((mutationsList, observer) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        // Check if any added nodes contain the 'smcx-embed' class
                        for (const node of mutation.addedNodes) {
                            if (node.nodeType === Node.ELEMENT_NODE) {
                                if (node.classList.contains('smcx-embed') || node.querySelector('.smcx-embed')) {
                                    console.log('smcx-embed element added to the DOM');
                                    // Hide the spinner
                                    loadingSpinner.style.display = 'none';
                                    // Stop observing
                                    observer.disconnect();
                                    break;
                                }
                            }
                        }
                    }
                }
            });
            // Start observing the survey container
            observer.observe(surveyContainer, { childList: true, subtree: true });
            // Optional timeout to prevent indefinite spinner
            setTimeout(() => {
                if (loadingSpinner.style.display !== 'none') {
                    loadingSpinner.style.display = 'none';
                    console.warn('Survey loading timed out. Spinner hidden.');
                    // Stop observing
                    observer.disconnect();
                }
            }, 15000); // Adjust timeout as needed
        } else {
            console.error('Survey container or loading spinner not found');
        }
    }
});