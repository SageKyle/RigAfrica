//================ SCROLLREVEAL ================
import ScrollReveal from 'scrollreveal';
ScrollReveal.debug = true;

// ========== NAVIGATION TOGGLE =============
const navBar = document.querySelector('.main-nav');
const toggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.navbar');
const mainContainer = document.querySelector('.main');

toggle.addEventListener('click', (e) => {
	navBar.classList.toggle('hide-nav');
});

const options = {
	root: document.querySelector('body'),
	rootMargin: '0px',
	threshold: 0.5,
};

let observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio !== 1) {
			// navContainer.classList.add('primary-bg');
			console.log('color added');
		} else {
			// navContainer.style.backgroundColor = 'green';
			console.log('color removed');
			// navContainer.classList.remove('primary-bg');
		}
	});
}, options);

observer.observe(mainContainer);

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

// ================ SEARCH EVENTS ====================
const searchIcon = document.querySelector('.toggle-form');
const closeIcon = document.querySelector('.event-close');
const searchInput = document.querySelector('.event-search');

// ========= DISPLAY FORM INPUT ====================
searchIcon.addEventListener('click', () => {
	searchInput.classList.remove('hidden');
	document.querySelector('.search-form__input').focus();

	CloseOnKeyPress();
});

// ========================= HIDE FORM INPUT FUNCTION ==================
function CloseOnKeyPress() {
	// HIDE FORM BY CLICKING X
	closeIcon.addEventListener('click', () => {
		searchInput.classList.add('hidden');
	});

	// HIDE FORM WITH ESC KEY
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			searchInput.classList.add('hidden');
		}
	});
}
