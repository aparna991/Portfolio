// script.js
// Scrolling animation using ScrollReveal
ScrollReveal().reveal('.hero', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
});

// Modal window using jQuery
$('#modal-button').on('click', function() {
    $('#modal-window').fadeIn();
});

// Form validation using jQuery
$('form').on('submit', function(event) {
    event.preventDefault();
    // Validate form fields
    // ...
});