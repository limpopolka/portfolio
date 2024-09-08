document.addEventListener('DOMContentLoaded', function(){
	MicroModal.init({
		onShow: () => {

		}
	});

	let closeModalBtn = document.querySelector('#modal-1-close');

	closeModalBtn.onclick = function(){
		closeModalBtn.closest('form');
		console.log(closeModalBtn)
	}
});