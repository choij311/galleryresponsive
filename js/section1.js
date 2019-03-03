$(function(){
	//섹션의 높이를 윈도우내부높이로 설정
	var winH=$(window).innerHeight();		
		$('.winBox').css({height:winH});  //최초 초기값
		
		//반응형(Responsive)-높이,너비가 변경되면 반응하는 resize() 메소드  추가
		$(window).resize(function(){
			winH=$(window).innerHeight();		
			$('.winBox').css({height:winH});  //최초 초기값
		});
	
}); //section1.js