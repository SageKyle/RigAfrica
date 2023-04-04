// ========== NAVIGATION TOGGLE =============
const navBar = document.querySelector('.main-nav');
const toggle = document.querySelector('.nav-toggle');

toggle.addEventListener('click', (e) => {
	navBar.classList.toggle('hide-nav');
});
