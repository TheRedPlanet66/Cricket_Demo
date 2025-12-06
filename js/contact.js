// Contact Form Handler
(function () {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (!form) return;

    // Form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Validation functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateField(input, errorElement, validationFn, errorMessage) {
        const value = input.value.trim();

        if (!value) {
            errorElement.textContent = 'This field is required';
            input.style.borderColor = '#D32F2F';
            return false;
        }

        if (validationFn && !validationFn(value)) {
            errorElement.textContent = errorMessage;
            input.style.borderColor = '#D32F2F';
            return false;
        }

        errorElement.textContent = '';
        input.style.borderColor = '#3A3B3C';
        return true;
    }

    function clearErrors() {
        [nameError, emailError, subjectError, messageError].forEach(error => {
            error.textContent = '';
        });

        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
            input.style.borderColor = '#3A3B3C';
        });
    }

    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = `form-feedback ${type}`;

        // Auto-hide after 5 seconds
        setTimeout(() => {
            feedback.className = 'form-feedback';
        }, 5000);
    }

    // Real-time validation
    nameInput.addEventListener('blur', () => {
        validateField(nameInput, nameError);
    });

    emailInput.addEventListener('blur', () => {
        validateField(emailInput, emailError, validateEmail, 'Please enter a valid email address');
    });

    subjectInput.addEventListener('blur', () => {
        validateField(subjectInput, subjectError);
    });

    messageInput.addEventListener('blur', () => {
        validateField(messageInput, messageError);
    });

    // Clear error on input
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            const errorElement = document.getElementById(`${input.id}Error`);
            if (errorElement.textContent) {
                errorElement.textContent = '';
                input.style.borderColor = '#3A3B3C';
            }
        });
    });

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous feedback
        feedback.className = 'form-feedback';
        clearErrors();

        // Validate all fields
        const isNameValid = validateField(nameInput, nameError);
        const isEmailValid = validateField(emailInput, emailError, validateEmail, 'Please enter a valid email address');
        const isSubjectValid = validateField(subjectInput, subjectError);
        const isMessageValid = validateField(messageInput, messageError);

        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
            showFeedback('Please fix the errors above', 'error');
            return;
        }

        // Show loading state
        const submitButton = form.querySelector('.submit-button');
        submitButton.classList.add('loading');
        submitButton.disabled = true;

        // Simulate form submission (save to localStorage)
        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Prepare form data
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                subject: subjectInput.value.trim(),
                message: messageInput.value.trim(),
                timestamp: new Date().toISOString()
            };

            // Get existing submissions from localStorage
            let submissions = [];
            try {
                const stored = localStorage.getItem('cricketClubSubmissions');
                if (stored) {
                    submissions = JSON.parse(stored);
                }
            } catch (err) {
                console.error('Error reading from localStorage:', err);
            }

            // Add new submission
            submissions.push(formData);

            // Save to localStorage
            try {
                localStorage.setItem('cricketClubSubmissions', JSON.stringify(submissions));
            } catch (err) {
                console.error('Error saving to localStorage:', err);
                throw new Error('Failed to save submission');
            }

            // Show success message
            showFeedback('Thank you for your message! We\'ll get back to you soon.', 'success');

            // Reset form
            form.reset();

            // Log success (for demo purposes)
            console.log('Form submitted successfully:', formData);
            console.log('Total submissions:', submissions.length);

        } catch (error) {
            console.error('Submission error:', error);
            showFeedback('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            // Remove loading state
            submitButton.classList.remove('loading');
            submitButton.disabled = false;
        }
    });
})();
