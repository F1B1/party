
import Swiper from "swiper";
import { Navigation, Pagination, Parallax, Autoplay, Controller} from "swiper/modules";

document.addEventListener('DOMContentLoaded',()=>{

	const videoPlayer = document.querySelector('.video__wrapper'),
			videoIcon = document.querySelector('.video__icon'),
			videoPoster = document.querySelector('.video__poster');

	videoIcon.addEventListener("click", function(e) {
		videoIcon.style.display = 'none'
		videoPoster.style.display = 'none'

		if(videoPlayer.classList.contains('ready')){
			return
		}
		videoPlayer.classList.add('ready')
		videoPlayer.insertAdjacentHTML('afterbegin', '<iframe class="video__player" src="https://www.youtube.com/embed/HOfdboHvshg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
	});

	//Swiper
	if(innerWidth < 768 ){

		const menuBurger = document.querySelector('.header__info'),
				menuIcon = document.querySelector('.icon-menu');

		menuIcon.addEventListener('click',(e)=>{
			e.preventDefault()
			menuBurger.classList.toggle('active')
			menuIcon.classList.toggle('active')
		})

		const swiperNumber = new Swiper('.entertainment__swiper', {
		modules: [Pagination],
		loop: false,
		observer: true,
		observeParents: true,
		spaceBetween:40,
		watchOverflow: true,
		speed: 1000,
		preloadImages: false,
		parallax: true,
		pagination:{
			el:'.controls-entertainment__dotts',
			clickable: true,
		},
		breakpoints:{
			320:{
				slidesPerView:1
			},
			459:{
				slidesPerView:1.5
			},
			580:{
				slidesPerView:2
			},
			684:{
				slidesPerView:2
			}
		}
			
		});
	}

	const swiperCatalog = new Swiper('.preview-catalog', {
		modules: [Pagination, Navigation, Parallax, Autoplay, Controller],
		loop: false,
		observer: true,
		slidesPerView: 1,
		observeParents: true,
		spaceBetween:40,
		watchOverflow: true,
		speed: 1500,
		preloadImages: false,
		parallax: true,
		allowTouchMove: false,
		autoplay:{
			delay: 6500,
			stopOnLastSlide: false, 
			disableOnInteraction: false,
		},
		pagination: {
			el: '.sub-preview__pagination',
			clickable: false,
			type: 'bullets',
			renderBullet: function (index, className) {
				 return '<div class="sub-preview__column swiper-slide">'+ 
				 				'<span class="' + className + '">' +
				  	 				'<i></i>' + '<b></b>' +  
					 			'</span>' + 
					 			'<div class="sub-preview__item">' + 
									'<h3 class="sub-preview__title">Свинтус NEON</h3>' + 
									'<p class="sub-preview__text">Хрю-киберпанк наступил</p>' + 
									'<div class="sub-preview__avatar"> <img src="../img/catalog/avatar1.png" alt=""> </div>' + 
								'</div>' + 
							'</div>';
			  }
		},
		navigation:{
			nextEl: '.swiper-button-next'
		}
		});
		
		const swiperSubPreview = new Swiper('.sub-preview__columns', {
			modules: [Pagination,  Controller],
			loop: false,
			observer: true,
			slidesPerView:4,
			observeParents: true,
			spaceBetween:40,
			watchOverflow: true,
			speed: 1000,
			preloadImages: false,
			parallax: true,
			navigation:{
				nextEl: '.preview-catalog__button'
			},
			breakpoints:{
				320:{
					slidesPerView:1
				},
				550:{
					slidesPerView:2
				},
				700:{
					slidesPerView:2.2
				},
				900:{
					slidesPerView:3
				},
				1100:{
					slidesPerView:4
				}
			}
				
		});

		swiperCatalog.controller.control = swiperSubPreview
		swiperSubPreview.controller.control = swiperCatalog

		const swiperNews = new Swiper('.news__swiper', {
			modules: [Navigation],
			loop: false,
			observer: true,
			observeParents: true,
			spaceBetween:40,
			watchOverflow: true,
			speed: 1000,
			preloadImages: false,
			parallax: true,
			navigation:{
				nextEl: '.news__button-next',
				prevEl: '.news__button-prev'
			},
			breakpoints:{
				320:{
					slidesPerView:1.1
				},
				550:{
					slidesPerView:1.8
				},
				700:{
					slidesPerView:2.2
				},
				900:{
					slidesPerView:3.2
				},
				1100:{
					slidesPerView:3.5
				}
			}
				
		});

		const swiperFamily = new Swiper('.family__swiper', {
			modules: [Navigation],
			loop: false,
			observer: true,
			observeParents: true,
			spaceBetween:40,
			watchOverflow: true,
			speed: 1000,
			preloadImages: false,
			parallax: true,
			navigation:{
				nextEl: '.family__button-next ',
				prevEl: '.family__button-prev '
			},
			breakpoints:{
				320:{
					slidesPerView:1.1
				},
				550:{
					slidesPerView:1.8
				},
				700:{
					slidesPerView:2.2
				},
				900:{
					slidesPerView:3.2
				},
				1100:{
					slidesPerView:3.5
				}
			}
				
		});

		const swiperSmart = new Swiper('.family__swiper', {
			modules: [Navigation],
			loop: false,
			observer: true,
			observeParents: true,
			spaceBetween:40,
			watchOverflow: true,
			speed: 1000,
			preloadImages: false,
			parallax: true,
			navigation:{
				nextEl: '.smart__button-next ',
				prevEl: '.smart__button-prev '
			},
			breakpoints:{
				320:{
					slidesPerView:1.1
				},
				550:{
					slidesPerView:1.8
				},
				700:{
					slidesPerView:2.2
				},
				900:{
					slidesPerView:3.2
				},
				1100:{
					slidesPerView:3.5
				}
			}
				
		});

		const swiperReview = new Swiper('.review__body', {
			modules: [Navigation, Parallax],
			loop: false,
			observer: true,
			observeParents: true,
			spaceBetween:40,
			slidesPerView:1,
			watchOverflow: true,
			parallax: true,
			speed: 2000,
			preloadImages: false,
			parallax: true,
			navigation:{
				nextEl: '.review__button-next',
				prevEl: '.review__button-prev'
			},
				
		});

	//Spoiler

	const spoilerItems = document.querySelectorAll('.accordion__item');


			spoilerItems.forEach((box) => {
		box.addEventListener("click", boxHandler); 
		});
		
		function boxHandler(e) {
		e.preventDefault(); 
		let currentBox = e.target.closest(".accordion__item"); 
		let currentContent = e.target.nextElementSibling; 
		currentBox.classList.toggle("active"); 
		if (currentBox.classList.contains("active")) {
			currentContent.style.maxHeight = currentContent.scrollHeight + "px"; 
		} else {
			currentContent.style.maxHeight = 0; 
		}
		}
})
