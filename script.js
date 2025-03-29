function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.home, .signin, .signup, .bio, .interests, .projects, .skills, .blog, .contact, .contact-form').forEach(section => {
        section.classList.remove('active');
    });
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

function sayHello() {
    showSection('contact-form');
}

function handleSubmit(event, action) {
    event.preventDefault();
    alert(`${action} successful! (This is a demo alert)`);
    showSection('home');
}

function handleContactSubmit(event) {
    event.preventDefault();
    alert("Message sent! (This is a demo alert)");
    showSection('contact');
}

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    const button = document.getElementById('dark-mode-toggle');
    button.textContent = document.body.classList.contains('light-mode') ? 'Toggle Dark Mode' : 'Toggle Light Mode';
}

// Show "Home" by default
window.onload = function() {
    showSection('home');
};