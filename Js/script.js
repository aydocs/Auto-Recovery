document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        let icon = this.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    // Navbar Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                behavior: 'smooth'
            });
        });
    });

    // Smooth Scroll to Top
    const toTopBtn = document.createElement('div');
    toTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    toTopBtn.className = 'to-top-btn';
    document.body.appendChild(toTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            toTopBtn.classList.add('show');
        } else {
            toTopBtn.classList.remove('show');
        }
    });

    toTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Parallax Effect
    const parallaxSections = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function () {
        let scrollPosition = window.pageYOffset;

        parallaxSections.forEach(section => {
            let parallaxSpeed = section.dataset.speed || 0.5;
            section.style.backgroundPositionY = -(scrollPosition * parallaxSpeed) + 'px';
        });
    });
});
    