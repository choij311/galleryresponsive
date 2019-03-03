$(function(){
	
	//배경이미지가 들어있는 세칸에 마우스 오버시 동작
	$('.section6-bg-box').on({
		mouseenter:	function(){
			$(this).find('.section6-in-cap-box').addClass('addClassS6-in-cap');
		},
		mouseleave:	function(){
			$(this).find('.section6-in-cap-box').removeClass('addClassS6-in-cap');
		}
	});
	
	
	
});//section6.js