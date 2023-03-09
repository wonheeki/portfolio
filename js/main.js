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
	FourthSlide();
	
	FirstSlide_m();
	SecondSlide_m();
	ThirdSlide_m();
	FourthSlide_m();
	

});



$(window).on('load', function () {
    setFlowBanner();  
})

function setFlowBanner(){
    const $wrap = $('.flow_banner');
    const $list = $('.flow_banner .list');
    let wrapWidth = ''; //$wrap의 가로 크기
    let listWidth = ''; //$list의 가로 크기
    const speed = 25; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct()

    //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
    let oldWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
    $(window).on('resize', function() {
        let newWChk = window.innerWidth > 1279 ? 'pc' : window.innerWidth > 767 ? 'ta' : 'mo';
        if (newWChk != oldWChk) {
            oldWChk = newWChk;
            flowBannerAct();
        }
    });

    //배너 실행 함수
    function flowBannerAct() {
        //배너 롤링 초기화
        if(wrapWidth != ''){
            $wrap.find('.list').css({ 'animation': 'none' });
            $wrap.find('.list').slice(2).remove();
        }
        wrapWidth = $wrap.width();
        listWidth = $list.width();

        //무한 반복을 위해 리스트를 복제 후 배너에 추가
        if (listWidth < wrapWidth) {
            const listCount = Math.ceil(wrapWidth * 2 / listWidth);
            for (let i = 2; i < listCount; i++) {
                $clone = $clone.clone();
                $wrap.append($clone);
            }
        }
        $wrap.find('.list').css({ 'animation': `${listWidth / speed}s linear infinite flowRolling` }); 
    } 
}


function FirstSlide(){
	const slides = document.querySelector('#slides1'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides1 li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev1'); //이전 버튼
	const next = document.querySelector('#next1'); //다음 버튼
	const slideWidth = 47; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + 'vw';

	function moveSlide(num) {
	  slides.style.left = -num * 48.5 + 'vw';
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
	const slideWidth = 47; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + 'vw';

	function moveSlide(num) {
	  slides.style.left = -num * 48.5 + 'vw';
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
	const slideWidth = 47; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + 'vw';

	function moveSlide(num) {
	  slides.style.left = -num * 48.5 + 'vw';
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


function FourthSlide(){
	const slides = document.querySelector('#slides4'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides4 li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev4'); //이전 버튼
	const next = document.querySelector('#next4'); //다음 버튼
	const slideWidth = 47; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + 'vw';

	function moveSlide(num) {
	  slides.style.left = -num * 48.5 + 'vw';
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


function FirstSlide_m(){
	const slides = document.querySelector('#slides1_m'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides1_m li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev1_m'); //이전 버튼
	const next = document.querySelector('#next1_m'); //다음 버튼
	const slideWidth = 100; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + '%';

	function moveSlide(num) {
	  slides.style.left = -num * 102 + '%';
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

function SecondSlide_m(){
	const slides = document.querySelector('#slides2_m'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides2_m li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev2_m'); //이전 버튼
	const next = document.querySelector('#next2_m'); //다음 버튼
	const slideWidth = 100; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + '%';

	function moveSlide(num) {
	  slides.style.left = -num * 102 + '%';
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

function ThirdSlide_m(){
	const slides = document.querySelector('#slides3_m'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides3_m li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev3_m'); //이전 버튼
	const next = document.querySelector('#next3_m'); //다음 버튼
	const slideWidth = 100; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + '%';

	function moveSlide(num) {
	  slides.style.left = -num * 102 + '%';
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


function FourthSlide_m(){
	const slides = document.querySelector('#slides4_m'); //전체 슬라이드 컨테이너
	const slideImg = document.querySelectorAll('#slides4_m li'); //모든 슬라이드들
	let currentIdx = 0; //현재 슬라이드 index
	const slideCount = slideImg.length; // 슬라이드 개수
	const prev = document.querySelector('#prev4_m'); //이전 버튼
	const next = document.querySelector('#next4_m'); //다음 버튼
	const slideWidth = 100; //한개의 슬라이드 넓이
	const slideMargin = 1.5; //슬라이드간의 margin 값

	//전체 슬라이드 컨테이너 넓이 설정
	slides.style.width = (slideWidth + slideMargin) * slideCount + '%';

	function moveSlide(num) {
	  slides.style.left = -num * 102 + '%';
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
