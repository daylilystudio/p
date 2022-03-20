// GoTop
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
let goTopBTN = document.querySelector('.top');
window.addEventListener('scroll', function (e) {
    if (this.window.pageYOffset >= 200) {
        goTopBTN.style.opacity = "1";
    } else {
        goTopBTN.style.opacity = "0";
    }
})
goTopBTN.addEventListener('click', scrollToTop)
//jQuery回頂端
// $('.top').hide();
// $(document).scroll(function(){
// 	if( $(document).scrollTop()>1 ){
// 		$('.top').fadeIn();
// 	}else{
// 		$('.top').fadeOut();
// 	}
// });
// $('.top').click(function(){
// 	$('html,body').animate({'scrollTop' : '0px'} , 800);
// });


//版頭入場動畫
gsap.from(".title__main", {
	duration: 1,
	scale: 1.5,
	y: -300,
	ease: Bounce.easeOut,
});
gsap.from(".title__cafe img", {
	duration: .8,
	scale: 1.5,
	y: 500,
	opacity: 0,
});


// 捲軸滾到時動態
window.sr = new ScrollReveal({
	distance: '80px',
	easing: 'ease-in',
	opacity: 0,
	duration: 800,
	interval: 120,
	mobile: true,
	reset: true,
});
sr.reveal('.title__left img', {
	origin: 'left',
	distance: '500px',
	scale: 1.5,
});
sr.reveal('.title__right img', {
	origin: 'right',
	distance: '500px',
	scale: 1.5,
});
sr.reveal('.block__1 .blockText', {
	origin: 'left',
	distance: '500px',
	scale: 1.5,
});
sr.reveal('.block__1--gift', {
	origin: 'right',
	distance: '500px',
	scale: 1.5,
});
sr.reveal('.block__2 .blockText, .block__2--gift', {
	origin: 'left',
	rotate: { z: 5 },
	distance: '500px',
	scale: 1.5,
});
sr.reveal('.block__3 .blockText, .block__3--gift', {
	origin: 'right',
	rotate: { z: -5 },
	distance: '500px',
	scale: 1.5,
});
sr.reveal('.block__4 .container', {
	origin: 'bottom',
	distance: '500px',
	scale: 1.5,
});


//滑鼠移動視差
const scene = document.getElementById('scene');
const parallax = new Parallax(scene, {
	selector: '.layer'
});


//捲軸往下moto移動
const moto = gsap.timeline({
    scrollTrigger: {
		trigger: ".block__1 .blockText",
		pin: false,   // pin the trigger element while active
		start: "top top", // when the top of the trigger hits the top of the viewport
		end: "+=250px", // end after scrolling 500px beyond the start
		scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
});
// add animations and labels to the timeline
moto
	.addLabel("start")
	.to(".block__1--moto img", { x:-180, y:220 })
	.addLabel("end");