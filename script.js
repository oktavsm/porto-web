document.addEventListener('DOMContentLoaded', function() {

    // ===== EDIT AREA: Ubah teks yang akan diketik di sini =====
    const rolesToType = [
        "Mobile Developer",
        "Network Enthusiast",
        "Tech Explorer",
        "Problem Solver"
    ];
    // ===== AKHIR EDIT AREA =====

    // --- Logic untuk Typing Effect ---
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


    // --- Logic untuk Hamburger Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Logic untuk Animasi Scroll ---
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