// Smooth scrolling for Tech section (optional enhancement)
document.querySelectorAll('a[href^="#tech"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
