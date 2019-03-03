$(function(){

	$('.mainBt,.logoBt,.nextArrowBt,.mobileBt').on({
		click:	function(){
			x=$(this).attr('href');
			$('html,body').stop().animate({scrollTop:$(x).offset().top},1000);
		}
	});
	
}); //smoothScrolling.js





