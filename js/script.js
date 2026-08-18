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
    