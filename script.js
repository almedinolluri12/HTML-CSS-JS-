   // Basic form validation
   document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert("Thank you for reaching out! We'll get back to you shortly.");
    } else {
        alert("Please fill out all fields before submitting.");
    }
});


function showSection(section) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach((sec) => {
        sec.classList.remove('active');
    });
    document.getElementById(section).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    showSection('appetizers'); // Trego appetizers si default
});

function handleReservation(event) {
    event.preventDefault(); // Parandalon rifreskimin e faqes

    // Shfaq modalin e suksesit
    var successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
}