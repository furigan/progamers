//nasłuch an cały dokumnert plik HTML,  w momencie kiedy cały DOM zostanie załadowany
// do momentu kiedy wszystko sie załaduej (zdjecia, liniki itp.)

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	// odwaołanie do każdego elementu(linku) za pomaca perli foreach, nadajemy na każdy item(link) nasłuchiwanie na klik, jeśli klik bedzie odczytany, następnbie uruchamian ajest fumkcja (strzałkowa () => ... ), która usuwa klase show
	allNavItems.forEach(item =>
		item.addEventListener('click', () => navList.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
});
