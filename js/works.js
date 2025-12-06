// Works Gallery - Display cricket events and handle modal
(function () {
    const worksGrid = document.getElementById('worksGrid');
    const modal = document.getElementById('workModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');

    if (!worksGrid || !modal) return;

    // Render work cards
    function renderWorks() {
        worksGrid.innerHTML = '';

        cricketWorks.forEach(work => {
            const card = createWorkCard(work);
            worksGrid.appendChild(card);
        });

        // Re-observe for scroll reveal animation
        if (window.observeNewElements) {
            window.observeNewElements();
        }
    }

    // Create work card element
    function createWorkCard(work) {
        const card = document.createElement('div');
        card.className = 'work-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `View details for ${work.title}`);

        card.innerHTML = `
            <div class="work-thumbnail">
                <svg width="100%" height="100%" viewBox="0 0 400 200">
                    <rect width="400" height="200" fill="url(#workGradient${work.id})"/>
                    <defs>
                        <linearGradient id="workGradient${work.id}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#B30000;stop-opacity:0.2" />
                            <stop offset="100%" style="stop-color:#252627;stop-opacity:0.9" />
                        </linearGradient>
                    </defs>
                    <text x="50%" y="50%" text-anchor="middle" fill="#fff" font-size="16" opacity="0.5">Cricket Event</text>
                </svg>
            </div>
            <div class="work-content">
                <span class="work-category">${getCategoryName(work.category)}</span>
                <h3 class="work-title">${work.title}</h3>
                <p class="work-date">${formatDate(work.date)}</p>
                <p class="work-description">${work.description}</p>
                <div class="work-stats">
                    <div class="work-stat">
                        <span class="work-stat-value">${work.stats.runs}</span>
                        <span class="work-stat-label">Runs</span>
                    </div>
                    <div class="work-stat">
                        <span class="work-stat-value">${work.stats.wickets}</span>
                        <span class="work-stat-label">Wickets</span>
                    </div>
                    <div class="work-stat">
                        <span class="work-stat-value">${work.stats.overs}</span>
                        <span class="work-stat-label">Overs</span>
                    </div>
                </div>
            </div>
        `;

        // Add click handler
        card.addEventListener('click', () => openModal(work));

        // Add keyboard handler
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(work);
            }
        });

        return card;
    }

    // Open modal with work details
    function openModal(work) {
        modalBody.innerHTML = `
            <div class="work-thumbnail" style="margin-bottom: 1.5rem;">
                <svg width="100%" height="300" viewBox="0 0 700 300">
                    <rect width="700" height="300" fill="url(#modalGradient)"/>
                    <defs>
                        <linearGradient id="modalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#B30000;stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:#252627;stop-opacity:0.9" />
                        </linearGradient>
                    </defs>
                    <text x="50%" y="50%" text-anchor="middle" fill="#fff" font-size="24" opacity="0.5">${work.title}</text>
                </svg>
            </div>
            
            <span class="work-category" style="margin-bottom: 1rem;">${getCategoryName(work.category)}</span>
            <h2 id="modalTitle" style="font-size: 2rem; margin-bottom: 0.5rem;">${work.title}</h2>
            <p class="work-date" style="margin-bottom: 1.5rem;">${formatDate(work.date)}</p>
            
            <p style="font-size: 1.125rem; line-height: 1.8; color: #E0E0E0; margin-bottom: 2rem;">
                ${work.detailedDescription}
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 1.5rem; background-color: #252627; border-radius: 1rem;">
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #D4AF37; margin-bottom: 0.25rem;">${work.stats.runs}</div>
                    <div style="font-size: 0.875rem; color: #9E9E9E; text-transform: uppercase;">Total Runs</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #D4AF37; margin-bottom: 0.25rem;">${work.stats.wickets}</div>
                    <div style="font-size: 0.875rem; color: #9E9E9E; text-transform: uppercase;">Wickets</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: 700; color: #D4AF37; margin-bottom: 0.25rem;">${work.stats.overs}</div>
                    <div style="font-size: 0.875rem; color: #9E9E9E; text-transform: uppercase;">Overs</div>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus management
        modalClose.focus();
    }

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners for closing modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Keyboard support for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Focus trap in modal
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && modal.classList.contains('active')) {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });

    // Initialize
    renderWorks();
})();
