$(function(){
	
	var test =$('.content');

	var testTop = test.offset().top-100;

	$(window).scroll(function(){
		var num = $(window).scrollTop();
		if(testTop<num){
			$(".header").fadeIn();
			$(".header").css({"position":"fixed","top":"0","width":"100%","height": "5em",
				"background-color": "black" , "z-index": "10"});
		}else{
			$(".header").fadeOut();
			$(".header").css({"position":"fixed","top":"0","width":"100%","height": "5em",
				"background-color": "black" , "z-index": "10"});
		}
		
	});
	
	FirstSlide();
	SecondSlide();
	ThirdSlide();
	
	
		
});

function FirstSlide(){
	const slides = document.querySelector('#slides1'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides1 li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev1'); //이전 버튼
	const next = document.querySelector('#next1'); //다음 버튼
	const slideWidth = 1000; //한개의 슬라이드 넓이
	const slideMargin = 100; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

	function moveSlide(num) {
	  slides.style.left = -num * 736 + 'px';
	  currentIdx = num;
	}
	prev.addEventListener('click', function () {
	  if (currentIdx !== 0) moveSlide(currentIdx - 1);
	});
	next.addEventListener('click', function () {
	  if (currentIdx !== slideCount - 1) {
	    moveSlide(currentIdx + 1);
	  }
	});
}

function SecondSlide(){
	const slides = document.querySelector('#slides2'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides2 li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev2'); //이전 버튼
	const next = document.querySelector('#next2'); //다음 버튼
	const slideWidth = 1000; //한개의 슬라이드 넓이
	const slideMargin = 100; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

	function moveSlide(num) {
	  slides.style.left = -num * 736 + 'px';
	  currentIdx = num;
	}
	prev.addEventListener('click', function () {
	  if (currentIdx !== 0) moveSlide(currentIdx - 1);
	});
	next.addEventListener('click', function () {
	  if (currentIdx !== slideCount - 1) {
	    moveSlide(currentIdx + 1);
	  }
	});
}

function ThirdSlide(){
	const slides = document.querySelector('#slides3'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides3 li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev3'); //이전 버튼
	const next = document.querySelector('#next3'); //다음 버튼
	const slideWidth = 1000; //한개의 슬라이드 넓이
	const slideMargin = 100; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

	function moveSlide(num) {
	  slides.style.left = -num * 736 + 'px';
	  currentIdx = num;
	}
	prev.addEventListener('click', function () {
	  if (currentIdx !== 0) moveSlide(currentIdx - 1);
	});
	next.addEventListener('click', function () {
	  if (currentIdx !== slideCount - 1) {
	    moveSlide(currentIdx + 1);
	  }
	});
}

/*$('.btn').click(function(event){
	event.preventDefault();
	x = $(this).attr("href");
	
			$("html, body").stop().animate({scrollTop:$(x).offset().top-130}, 1000, "easeInOutExpo");
});*/


