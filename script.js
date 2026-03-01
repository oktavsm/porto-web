document.addEventListener('DOMContentLoaded', function() {

    // Typing Effect configuration
    const rolesToType = [
        "Informatics Student",
        "Mobile Developer",
        "Cloud & Distributed Systems Enthusiast",
        "Competitive Programmer"
    ];

    // Typing Effect Logic
    const typingElement = document.getElementById('typing-effect');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = rolesToType[roleIndex];
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Jeda setelah selesai mengetik
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % rolesToType.length;
        }

        setTimeout(type, typeSpeed);
    }
    if (typingElement) {
        type();
    }


    // Mobile Navbar Auto-collapse
    const navLinksList = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                // Programmatically hide the Bootstrap collapse
                let bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // Scroll Animation Observer (IntersectionObserver)
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
