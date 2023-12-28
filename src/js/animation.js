export function gsapAnimation(){
	gsap.registerPlugin(ScrollTrigger)

	const tlLoader = gsap.timeline()

    function disableScroll() {
        document.body.classList.add('hidden');
    }

    function enableScroll() {
        document.body.classList.remove('hidden');
    }
    

	 if(innerWidth > 992){

		tlLoader
		.set('.loader__item', {yPercent: -100})
		.set('.loader__title', {opacity: 0})
		.to('.loader__item', {
			yPercent: 0,
			duration: .75,
			stagger: 0.5,
		})
		.to('.loader__item',{
			yPercent: 100,
			duration: .75,
			stagger: 0.5,
		})
		.to('.loader__title',{
			opacity: 1,
			duration: 1,
			scale: 1.3,
		})
		.set('.loader__item',{
			yPercent: -100
		})
		.to('.loader__title',{
			opacity: 0,
			duration: 1.5,
			scale: 0.8,
		})
		.to('.loader',{
			yPercent: -100,
			duration: 1,
		}, '-=0.4')

	gsap.from('.subscription__link',{
		scrollTrigger:{
			trigger: '.subscription',
			start: '-300 0',
		},
		y:100,
		autoAlpha:0,
		duration: 1,
	})
	gsap.from('.subscription__item',{
		scrollTrigger:{
			trigger: '.subscription',
			start: '-200 0',
		},
		y:100,
		opacity: 0,
		stagger: 0.2,
		duration: .7,
	})

	const tlWay = gsap.timeline()

	function showWayGsap(selector, x){
		tlWay.from(selector,{
			scrollTrigger:{
				trigger: '.entertainment',
				start: '-200 bottom',
				scrub: 1,
			},
			opacity:0,
			x:x,
			y: 0
		})
	}
	showWayGsap('.way__column-1', -150)
	showWayGsap('.way__column-2', 150)
	showWayGsap('.way__column-3', -150)
	showWayGsap('.way__column-4', 150)

	}   
    tlLoader.eventCallback('onComplete', enableScroll)
    disableScroll(); 
}
