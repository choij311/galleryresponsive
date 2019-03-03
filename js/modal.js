$(function(){
	var imgNum=25,mimgH=300;
	//모달창 닫기
	$('.modalCloseBt').on({
		click: function(){
			$('html').removeClass('addScroll');
			$('.modal').hide(0);
		}
	});
	
	/*
	//모달창 띄우기1
	$('.galleryImageBt').on({
		click:	function(){
			$('.modal').show(0);
			imgName=$(this).children().attr('src');//나타날 이미지 소스(경로와이미지파일이름)
			$('.modal-image>img').attr('src',imgName);  //모달창 이미지 변경
		}
	});
	//모달창 띄우기2
	$('.galleryTextBt').on({
		click:	function(){
			$('.modal').show(0);
			imgName=$(this).prev().children().attr('src');//나타날 이미지 소스(경로와이미지파일이름)
			$('.modal-image>img').attr('src',imgName);  //모달창 이미지 변경
		}
	});
	*/
		
	//모달창 띄우기3 통합버튼
	$('.galleryImageBt,.galleryTextBt').on({
		click:	function(){
			$('html').addClass('addScroll');
			$('.modal').show(0);
			imgNum=$(this).parent().find('img').attr('src').slice(18,20);//나타날 이미지 소스(경로와이미지파일이름).파일번호
			$('.modal-image>img').attr('src','img/restaurant-img'+imgNum+'.jpg');  //모달창 이미지 변경
			
			mimgH=$('.modal-image').innerHeight()/2;  //600/2=300
			$('.modal-image').css({marginTop:-mimgH});	
		}
	});
	
	//다음 모달 슬라이드
	$('.modalArrowRightBt').on({
		click:	function(){
			imgNum++;
			if(imgNum>32){  //마지막 이미지 번호를 초과하면
				imgNum=25;  //처음 이미지 번호로 셋팅
			}
			$('.modal-image>img').fadeOut(0)
								 .css({opacity:0,transition:'all 1s'})
								 .attr('src','img/restaurant-img'+imgNum+'.jpg')
								 .fadeIn(0)
								 .css({opacity:1,transition:'all 1s'});  //모달창 이미지 변경
		}
	});
	
	//다음 모달 슬라이드
	$('.modalArrowLeftBt').on({
		click:	function(){
			imgNum--;
			if(imgNum<25){ //처음 이미지 번호 미만이면
				imgNum=32; //마지막 이미지 번호로 셋팅
			}
			$('.modal-image>img').fadeOut(0)
								 .css({opacity:0,transition:'all 1s'})
								 .attr('src','img/restaurant-img'+imgNum+'.jpg')
								 .fadeIn(0)
								 .css({opacity:1,transition:'all 1s'});  //모달창 이미지 변경
		}
	});
	
	//이미지 높이를 2로 나누어 마진 탑값을 구해서 이용
	$(window).resize(function(){
		mimgH=$('.modal-image').innerHeight()/2;  
		$('.modal-image').css({marginTop:-mimgH});
	});
	
	
});//modal.js
