// ========== NAVIGATION TOGGLE =============
const navBar = document.querySelector('.main-nav');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', (e) => {
	navBar.classList.toggle('hide-nav');
});

// ============== SEARCH EVENTS =============
const searchIcon = document.querySelector('.toggle-form');
const closeIcon = document.querySelector('.event-close');
const searchInput = document.querySelector('.event-search');

searchIcon.addEventListener('click', () => {
	searchInput.classList.remove('hidden');

	// searchIcon.removeEventListener
});

closeIcon.addEventListener('click', () => {
	searchInput.classList.add('hidden');
});
