document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });
});

const testimonials = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}


const contactForm = document.querySelector('.contact-form');
if (contactForm) 
  contactForm.addEventListener('submit', function(e) {
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');
    if (!email.value || !message.value) {
      alert('Please fill in all fields.');
      e.preventDefault();
    }
  });