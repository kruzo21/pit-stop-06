// Плавный скролл по якорным ссылкам
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Бургер-меню: открытие/закрытие
const burgerMenu = document.querySelector('.burger-menu');
const navLinks   = document.querySelector('.nav-links');

burgerMenu?.addEventListener('click', function (e) {
    e.stopPropagation();
    const isActive = this.classList.toggle('active');
    navLinks.classList.toggle('active', isActive);
    this.setAttribute('aria-expanded', String(isActive));
});

// Закрытие меню при клике вне навигации
document.addEventListener('click', e => {
    const nav = document.querySelector('.nav-container');
    if (!nav?.contains(e.target)) {
        burgerMenu?.classList.remove('active');
        navLinks?.classList.remove('active');
        burgerMenu?.setAttribute('aria-expanded', 'false');
    }
});

// Закрытие меню при клике по ссылке
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu?.classList.remove('active');
        navLinks?.classList.remove('active');
        burgerMenu?.setAttribute('aria-expanded', 'false');
    });
});
