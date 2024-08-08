document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});




function openWhatsApp() {
    window.open('https://wa.me/07041668088', '_blank');
}