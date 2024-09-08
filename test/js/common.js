
document.addEventListener("DOMContentLoaded", function(){
	let menuBlock = document.querySelector('.mob-menu-wrap');
	let openMenuBtn = document.querySelector('#menu-open');
	let closeMenuBtn = document.querySelector('#menu-close');
	
	
	openMenuBtn.onclick = () => {
		menuBlock.classList.add('mob-menu-wrap--active');
	}

	closeMenuBtn.onclick = () => {
		menuBlock.classList.remove('mob-menu-wrap--active');
	}


	
});
