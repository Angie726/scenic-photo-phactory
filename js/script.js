document.addEventListener('DOMContentLoaded',
    function() {
        console.log('Scenic Photo Phactory website loaded successfully.');
    });
    //Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    {
        anchor.addEventListener('click',function (e){
            e.preventDefault();
            const target=
            document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behaviour:'smooth'
                });
            }
        });
    });

    // Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Change hamburger to X when open
            if (navLinks.classList.contains('active')) {
                menuToggle.textContent = '✕'; // X symbol
            } else {
                menuToggle.textContent = '☰'; // Hamburger symbol
            }
        });
    }
});