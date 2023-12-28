import { gsapAnimation } from "./animation";
import './modules/lazyload.min';

gsapAnimation()

import Swiper from "swiper";
import { Navigation, Pagination, Parallax, Autoplay, Controller, Mousewheel} from "swiper/modules";

document.addEventListener('DOMContentLoaded',()=>{

	//Modal
	
	const video = document.querySelector('.video')
	const preview = document.querySelector('.video__poster')
	const modal = document.querySelector('.video-modal')

	modal.addEventListener('click',(e)=>{
		if(e.target === modal || e.target.getAttribute('data-close') === ''){
			modal.classList.remove('show')
			stopVideo();
		}
	})

	function stopVideo() {
		const iframe = video.querySelector('iframe');
		if (iframe) {
			iframe.src = ''
			video.classList.remove('ready')
			document.body.classList.remove('hidden')
		}
	}

	preview.addEventListener("click", function(e) {
		if(video.classList.contains('ready')){
			return
		}

		modal.classList.add('show')

		video.classList.add('ready')

		document.body.classList.add('hidden')

		let src = video.dataset.src

		video.insertAdjacentHTML('afterbegin', '<iframe src=" ' + src + '  " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
	});
	

	//Swiper
	if(innerWidth < 768 ){

		const menuBurger = document.querySelector('.header__info'),
				menuIcon = document.querySelector('.icon-menu');

		menuIcon.addEventListener('click',(e)=>{
			e.preventDefault()
			menuBurger.classList.toggle('active')
			menuIcon.classList.toggle('active')
			document.body.classList.toggle('hidden')
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
									'<div class="sub-preview__avatar"> <img src="img/catalog/avatar1.png" alt=""> </div>' + 
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


		function swiperSection(swiper,prev, next){
			const swiperFamily = new Swiper(`${swiper}`, {
				modules: [Navigation, Mousewheel],
				loop: false,
				observer: true,
				observeParents: true,
				spaceBetween:40,
				watchOverflow: true,
				speed: 1000,
				preloadImages: false,
				navigation:{
					nextEl: `${next}`,
					prevEl: `${prev}`
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
				},
				
				mousewheel: true
			});
		}
		
		swiperSection('.family__swiper', '.family__button-prev', '.family__button-next')
		swiperSection('.news__swiper', '.news__button-prev', '.news__button-next')
		swiperSection('.smart__swiper', '.smart__button-prev', '.smart__button-next')

		const swiperReview = new Swiper('.review__body', {
			
			modules: [Navigation, Parallax],
			loop: false,
			observer: true,
			observeParents: true,
			spaceBetween:40,
			slidesPerView:1,
			watchOverflow: true,
			parallax: true,
			speed: 500,
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
