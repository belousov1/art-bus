$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
});

$(document).ready(function() {
	$('.spolier__title').click(function(event){
		if($('.block__slider').hasClass('one')){
			$('.spolier__title').not($(this)).removeClass('active');
			$('.spolier__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

$(document).ready(function(){
	$("#js-btn").on("click",function(e){
		e.preventDefault();
		let top = $("#content").offset().top;
		$("hnml,body").animate({
			screenTop: top
		}, 500)
	});
});
console.log(top);

let animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
	window.addEventListener('scroll',animOnscroll);
	function animOnscroll(){
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;



			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight -  window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset  + animItemHeight)){
				animItem.classList.add('_active');
			}else{
				if(!animItem.classList.contains('_anim-no-hide')){

					animItem.classList.remove('_active');
				}
			}

		}
	}

	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {top:rect.top + scrollTop, left: rect.left + screenLeft}
	}

	setTimeout(() => {
		animOnscroll();
		
	}, 500);

}

// let popupLinks = document.querySelectorAll('.popup-link');
// let body = document.querySelector('body');
// let lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const  timeout = 800;

// if(popupLinks.length > 0) {
// 	for (let index = 0; index < popupLinks.length; index++){
// 		const popupLink = popupLinks[index];
// 		popupLink.addEventListener("click",function(e){
// 			const popupName = popupLink.getAttribute('href').replace('#', '');
// 			const curentPopup = document.getElementById(popupName);
// 			popupOpen(curentPopup);
// 			e.preventDefault();
// 		});
// 	}
// }

// 	const popupCloseIcon = document.querySelectorAll('.close-popup');
// 	if(popupCloseIcon.length > 0){
// 		for(let index = 0; index < popupCloseIcon.length; index++){
// 			const el = popupCloseIcon[index];
// 			el.addEventListener('click', function(e){
// 				popupClose(el.closest('.popup'));
// 				e.preventDefault();
// 			});
// 		}
// 	}

// function popupOpen(curentPopup) {
// 	if (curentPopup && unlock) {
// 		const popupActive = document.querySelector('.popup.open');
// 		if (popupActive) {
// 			popupClose(popupActive, false);
// 		} else {
// 			bodyLock();
// 		}
// 		curentPopup.classList.add('open');
// 		curentPopup.addEventListener("click", function (e) {
// 			if (!e.target.closest('.popup__content')) {
// 				popupClose(e.target.closest('.popup'));
// 			};
// 		}
// 		)
// 	}
// }