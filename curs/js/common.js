const ready = () =>{

	const overlayOpenBtns = document.querySelectorAll('.overlay-action');
	const overlay = document.querySelector('.mobile-overlay');
	const asks = document.querySelectorAll('.ask__item');

	const checkUpdateElemClass = (elem, className) =>{
			if(!elem.classList.contains(className)){
				elem.classList.add(className);
			}else{
				elem.classList.remove(className);
			}
	}

	overlayOpenBtns.forEach(item =>{
		item.addEventListener('click', (e) => {
			e.preventDefault();
			checkUpdateElemClass(overlay, 'mobile-overlay_show');
		});
	})

	asks.forEach(item => {
		item.addEventListener('click', ()=>{
		asks.forEach(asksItem => {
			asksItem.classList.remove('ask__item_active');
		})
		item.classList.add('ask__item_active');
		});
	});
	
	const munuParentItem = document.querySelectorAll('.mobile-menu__item-parent > .mobile-menu__link');
	const submenuCloseItem = document.querySelectorAll('.submenu-parent-link__arrow');
	const mobileMenu = document.querySelector('.mobile-menu');
	munuParentItem.forEach(item => {
		item.addEventListener('click', (e)=>{
			e.preventDefault();
			let sibling = item.nextElementSibling;
			
			sibling.classList.add('mobiler-menu__submenu_active');
			let siblingHeight = sibling.clientHeight;

			mobileMenu.style.height = siblingHeight + 'px';
			mobileMenu.style.overflow = 'hidden';
		})
	});

	submenuCloseItem.forEach(item =>{
		item.addEventListener('click', (e) =>{

			item.closest('.mobiler-menu__submenu_active').classList.remove('mobiler-menu__submenu_active');
			item.closest('.mobiler-menu__submenu_active').classList.remove('mobiler-menu__submenu_active');
			mobileMenu.style.height = 'auto';
			mobileMenu.style.overflow = 'visible';

		});
	})


}
document.addEventListener("DOMContentLoaded", ready);
