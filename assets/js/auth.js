const pswdInput = document.querySelector('.pswd-input');
const showPswd = document.querySelector('.show-pswd');
const hidePswd = document.querySelector('.hide-pswd');

showPswd.addEventListener('click', (e) => {
	hidePswd.classList.remove('hidden');
	showPswd.classList.add('hidden');
});

hidePswd.addEventListener('click', (e) => {
	showPswd.classList.remove('hidden');
	hidePswd.classList.add('hidden');
});
