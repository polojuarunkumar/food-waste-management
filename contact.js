document.addEventListener('DOMContentLoaded', function () {
    // Form elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // FAQ links
    const faqLinks = document.querySelectorAll('#faqSection button a');

    // Validate email format
    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    // Handle form submission
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default page reload

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Input validation
        if (!name || !email || !message) {
            successMessage.style.color = 'red';
            successMessage.textContent = 'Please fill out all fields.';
            return;
        }

        if (!validateEmail(email)) {
            successMessage.style.color = 'red';
            successMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // Simulate form submission (you can later connect to a backend)
        successMessage.style.color = 'green';
        successMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

        // Clear the form
        contactForm.reset();
    });

    // FAQ button click event
    faqLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            alert('This FAQ feature is under construction. Please check back soon!');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
  
      question.addEventListener("click", () => {
        const isVisible = answer.style.display === "block";
        // Hide all answers first
        document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
        // Toggle current one
        answer.style.display = isVisible ? "none" : "block";
      });
    });
  });
  
