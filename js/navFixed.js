$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=30){ //다른조건(30이상이면) 
			$('.addnav').addClass('addFixed');    //클래스 추가
		}
		else{
			$('.addnav').removeClass('addFixed');  //클래스 제거
		}
	});

	//3줄 모바일버튼 클릭이벤트	서브메뉴 
	$('.mobile-3lineBt').on({
		click:	function(){
			$('.mobileMenu-wrap').toggleClass('addClassMobileSub');
			$('.mobile-3line-box>li').toggleClass('addMobile3line');
		}
	});
	
	//3줄 모바일버튼 클릭이벤트	서브메뉴 초기화
	$(window).resize(function(){
		if($(window).innerWidth()>1140){
			$('.mobileMenu-wrap').removeClass('addClassMobileSub');
			$('.mobile-3line-box>li').removeClass('addMobile3line');
		}
	});
	
	$('.mobileBt').on({
		click:function(){
			$('.mobileMenu-wrap').removeClass('addClassMobileSub');
			$('.mobile-3line-box>li').removeClass('addMobile3line');
		}
	});
	
	
	
});  //navFixed.js




