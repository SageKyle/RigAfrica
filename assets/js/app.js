//================ SCROLLREVEAL ================
import ScrollReveal from 'scrollreveal';
ScrollReveal.debug = true;

// ========== NAVIGATION TOGGLE =============
const navBar = document.querySelector('.main-nav');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', (e) => {
	navBar.classList.toggle('hide-nav');
});

// ============= CONTACT PAGE ANIMATION =============
ScrollReveal().reveal('.center-img', {
	duration: 800,
	reset: true,
	delay: 500,
	cleanup: true,
});

ScrollReveal().reveal('.top-img', {
	duration: 800,
	reset: true,
	delay: 800,
	cleanup: true,
});

ScrollReveal().reveal('.bottom-img', {
	duration: 800,
	reset: true,
	delay: 1000,
});
