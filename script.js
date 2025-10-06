document.addEventListener('DOMContentLoaded', function() {

    // ===== Hamburger Menu Logic =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Menutup menu jika salah satu link diklik (untuk navigasi di halaman yang sama)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // ===== Scroll Animation Logic =====
    const sections = document.querySelectorAll('.content-section');

    const observerOptions = {
        root: null, // default: viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% dari elemen harus terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animasi hanya sekali
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

});