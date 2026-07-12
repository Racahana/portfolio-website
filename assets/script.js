// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;
document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
});
function animFollower() {
    fx += (mx - fx) * 0.15; fy += (my - fy) * 0.15;
    follower.style.left = fx + 'px'; follower.style.top = fy + 'px';
    requestAnimationFrame(animFollower);
}
animFollower();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    updateActiveNav();
});

// ===== ACTIVE NAV =====
function updateActiveNav() {
    const sections = ['hero', 'about', 'projects', 'experience', 'testimonials', 'contact'];
    const links = document.querySelectorAll('.nav-links a');
    let current = 'hero';
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.fade-up,.fade-left,.fade-right').forEach(el => observer.observe(el));

// ===== THEME TOGGLE (just gimmick, already dark) =====
const themeToggle = document.getElementById('themeToggle');
let dark = true;
themeToggle.addEventListener('click', () => {
    dark = !dark;
    themeToggle.textContent = dark ? '☀' : '☾';
    document.documentElement.style.setProperty('--bg', dark ? '#050505' : '#f5f0e8');
    document.documentElement.style.setProperty('--white', dark ? '#FFFFFF' : '#050505');
    document.documentElement.style.setProperty('--bg2', dark ? '#0a0a0a' : '#ede8dc');
    document.documentElement.style.setProperty('--bg3', dark ? '#111111' : '#ddd8cc');
    document.documentElement.style.setProperty('--card', dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)');
    document.documentElement.style.setProperty('--card-border', dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.1)');
});

// ===== SUBMIT HANDLER =====
function handleSubmit(e) {
    const btn = e.target;
    btn.textContent = '✓ Sent!';
    btn.style.background = '#4ade80';
    btn.style.color = '#050505';
    setTimeout(() => { btn.textContent = 'Send Message ↗'; btn.style.background = ''; btn.style.color = ''; }, 3000);
}

// ===== CAROUSEL DOTS =====
document.querySelectorAll('.carousel-dot').forEach((dot, i, dots) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});

// ===== MAGNETIC BUTTONS =====
document.querySelectorAll('.btn-primary,.btn-secondary,.btn-talk,.btn-submit').forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        this.style.transform = `translate(${x * 0.15}px,${y * 0.2}px)`;
    });
    btn.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// **********Projects Start********* 
function showTab(event, tab) {

    let items = document.querySelectorAll(".item");
    items.forEach(i => i.classList.add("d-none"));

    let active = document.querySelectorAll("." + tab);
    active.forEach(i => i.classList.remove("d-none"));

    document.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));
    event.target.classList.add("active");
}