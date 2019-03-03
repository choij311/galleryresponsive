$(function(){
	var s=[]  //s0=0,s1=0,s2=0;  //슬라이드별 실행 안한 상태를 표시
		s[0]=0,s[1]=0,s[2]=0;
		s[0]=1;  //초기값 첫번째 슬라이드 화면에 실행함. 필수
		
		//4초간격으로 Next 슬라이드 자동실행 타이머설정(setInterval(함수 괄호없이 함수이름만,4000))
		
		//setInterval(prevSlide,4000);  //4초후에 실행
		//setInterval(nextSlide,4000);  //4초후에 실행
		
		//터치이벤트
		$('.section10-slide-wrap').on({  //슬라이드를 감싸는 부모박스 터치이벤트
			swipeleft:	function(){ //우측에서 좌측으로 터치이벤트 Next Slide
				nextSlide();
			},
			swiperight:	function(){ //좌측에서 우측으로 터치이벤트 Prev Slide
				prevSlide();
			}			
		});
		
		
		
		//우 화살버튼 클릭이벤트(Next슬라이드)
		$('.arrowRightBt').on({
			click:	function(){
				nextSlide();
			}
		});
		
		//좌 화살버튼 클릭이벤트(Prev슬라이드)
		$('.arrowLeftBt').on({
			click:	function(){
				prevSlide();
			}
		});
		
		
		//다음실행할함수	우측에서 좌측으로이동
		function nextSlide(){
			if(s[0]==1){ //첫번째 슬라이드가 실행 중이면
				s10NextSlide1(); //두번째 슬라이드 실행
			}
		    else if(s[1]==1){ //두번째 슬라이드가 실행 중이면
				s10NextSlide2(); //세번째 슬라이드 실행
			}
			else if(s[2]==1){ //세번째 슬라이드가 실행 중이면
			//	s10NextSlide0(); //첫번째 슬라이드 실행
			}
		} 
		
		//이전슬라이드 좌측에서 우측으로이동
		function prevSlide(){
			if(s[0]==1){ //첫번째 슬라이드가 실행 중이면
				//s10PrevSlide2(); //세번째 슬라이드 실행
			}
		    else if(s[1]==1){ //두번째 슬라이드가 실행 중이면
				s10PrevSlide0(); //첫번째 슬라이드 실행
			}
		    else if(s[2]==1){ //세번째 슬라이드가 실행 중이면
				s10PrevSlide1(); //두번째 슬라이드 실행
			}
		} 
			
		
	//1단계 - 1번슬라이드 ~ 3번슬라이드 함수 만들기 실행하기
	function s10NextSlide0(){
		s[0]=1,s[1]=0,s[2]=0;
		$('.sec10Slide').eq(2).stop().animate({left:  '0%'},0).animate({left:'-100%'},800);		
		$('.sec10Slide').eq(0).stop().animate({left:'100%'},0).animate({left:   '0%'},800);
		$('.sec10Slide').eq(1).stop().animate({left:'200%'},0).animate({left: '100%'},800);
	}
	
	function s10NextSlide1(){
		s[0]=0,s[1]=1,s[2]=0;
		$('.sec10Slide').eq(0).stop().animate({left:  '0%'},0).animate({left:'-100%'},800);		
		$('.sec10Slide').eq(1).stop().animate({left:'100%'},0).animate({left:   '0%'},800);
		$('.sec10Slide').eq(2).stop().animate({left:'200%'},0).animate({left: '100%'},800);
	}
	
		
	function s10NextSlide2(){
		s[0]=0,s[1]=0,s[2]=1;
		$('.sec10Slide').eq(1).stop().animate({left:  '0%'},0).animate({left:'-100%'},800);		
		$('.sec10Slide').eq(2).stop().animate({left:'100%'},0).animate({left:   '0%'},800);
		$('.sec10Slide').eq(0).stop().animate({left:'200%'},0).animate({left: '100%'},800);
	}
	
	//이전슬라이드(Preview)
	function s10PrevSlide2(){
		s[0]=0,s[1]=0,s[2]=1;
		$('.sec10Slide').eq(0).stop().animate({left:   '0%'},0).animate({left: '100%'},800);		
		$('.sec10Slide').eq(2).stop().animate({left:'-100%'},0).animate({left:   '0%'},800);
		$('.sec10Slide').eq(1).stop().animate({left:'-200%'},0).animate({left:'-100%'},800);
	}
	
	function s10PrevSlide1(){
		s[0]=0,s[1]=1,s[2]=0;
		$('.sec10Slide').eq(2).stop().animate({left:   '0%'},0).animate({left: '100%'},800);		
		$('.sec10Slide').eq(1).stop().animate({left:'-100%'},0).animate({left:   '0%'},800);
		$('.sec10Slide').eq(0).stop().animate({left:'-200%'},0).animate({left:'-100%'},800);
	}
	
	function s10PrevSlide0(){
		s[0]=1,s[1]=0,s[2]=0;
		$('.sec10Slide').eq(1).stop().animate({left:   '0%'},0).animate({left: '100%'},800);		
		$('.sec10Slide').eq(0).stop().animate({left:'-100%'},0).animate({left:   '0%'},800);
		$('.sec10Slide').eq(2).stop().animate({left:'-200%'},0).animate({left:'-100%'},800);
	}
	
	
	
	
	
	
});  //section10.js