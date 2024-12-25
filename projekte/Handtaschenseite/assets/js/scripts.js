document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald.');
});

// Newsletter Formular-Handling
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        alert(`Vielen Dank für Ihre Anmeldung, ${email}!`);
        document.getElementById('newsletter-form').reset();
    }
});