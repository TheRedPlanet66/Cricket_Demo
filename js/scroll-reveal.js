// Scroll Reveal Animation using Intersection Observer
(function () {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Skip animations for users who prefer reduced motion
        return;
    }

    // Configuration
    const config = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Callback function for intersection observer
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }

    // Create intersection observer
    const observer = new IntersectionObserver(handleIntersection, config);

    // Function to observe elements
    function observeElements() {
        // Select elements to animate
        const revealElements = document.querySelectorAll('.work-card, .about-content, .about-image, .contact-info, .contact-form, .stat-item');

        revealElements.forEach((element, index) => {
            // Add reveal class
            element.classList.add('reveal');

            // Add staggered delay
            element.style.transitionDelay = `${index * 0.1}s`;

            // Observe element
            observer.observe(element);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeElements);
    } else {
        observeElements();
    }

    // Re-observe when new elements are added (for dynamically loaded content)
    window.observeNewElements = function () {
        observeElements();
    };
})();
