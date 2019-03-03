$(function(){
	var a=[],h=0,s=0,i=0,n=0,imgH=0,winW=0,r=2,c=4,index=0;  //전역변수
		per=600/800;  //이미지파일 실제가로너비와 높이를 확인된 실제 크기. 높이비율=높이/너비  너비비율=너비/높이  
		winW=$(window).innerWidth()/c;  //이미지너비=창너비/4  초기값
		imgH=winW*per; //이미지 높이=이미지너비*0.75(가로크기에대한 세로비율)  초기값
		

		
		
		n=$('.section9-gallery-img-wrap>li').length;  //총 갤러리 갯수
	
		for(i=0;i<8;i++){  //0 1 2 3 4 5 6 7
			a[i]=i;  //a[0]=0,a[1]=1,a[2]=2,a[3]=3,a[4]=4,a[5]=5,a[6]=6,a[7]=7
		}
		
	
	//섹션9
	//메인 버튼 이벤트
	$('.sec9GalleryBt').on({
		click:		function(){
			$('.hBar').removeClass('addAnis9');
			$(this).find('.hBar').addClass('addAnis9');
		}
	});

	//갤러리 이미지 부드럽게 업(Up)/다운(Down) 이벤트
	$('.section9-gallery-img-wrap>li>p').on({
		mouseenter:		function(){
			$(this).addClass('addAnis9');
		},
		mouseleave:		function(){
			$(this).removeClass('addAnis9');
		}
	});

	
	///////////////////////////////////////////////////////////////
	//GALLERY Image
	//첫번째 All 모든 갤러리 이미지 초기값 보이기
	
	allShow(0);
	

	//갤러리 메인버튼 click 이벤트 간소화 배열처리 each()
	$('.sec9GalleryBt').each(function(index){
		$(this).on({
			click:function(){
				allShow(index);
			}
		});
	});
	
	$(window).resize(function(){  //너비 높이 변화가 있을 때 즉각 반응형
		allShow(index);
	});
	
	function allShow(z){
		$('.section9-gallery-img-wrap>li').removeClass('addAnis9');

				if($(window).innerWidth()>1170){
					c=4;
				}
				else if($(window).innerWidth()>1000){
					c=3;
				}
				else if($(window).innerWidth()>500){
					c=2;
				}
				else{
					c=1;
				}
		
		
				winW=$(window).innerWidth()/c;  //이미지너비=창너비/4
				imgH=winW*per; //이미지 높이=이미지너비*0.75(가로크기에대한 세로비율);
			
		
				if(z==0){  //All 첫번째버튼 hide(0)   show(8) : 01234567
					a[0]=0,a[1]=1,a[2]=2,a[3]=3,a[4]=4,a[5]=5,a[6]=6,a[7]=7;
					h=0;  //hide 갯수
					s=8;  //show 갯수	
				}
				else if(z==1){  //두번째버튼  hide(2) : 02  show(6) : 134567
					a[0]=0,a[1]=2; 
					a[2]=1,a[3]=3,a[4]=4,a[5]=5,a[6]=6,a[7]=7;
					h=2;  //hide 갯수
					s=6;  //show 갯수		
				}
				else if(z==2){  //세번째버튼  hide(4) : 0136   show(4) : 2457
					a[0]=0,a[1]=1,a[2]=3,a[3]=6;
					a[4]=2,a[5]=4,a[6]=5,a[7]=7;
					h=4;  //hide 갯수
					s=4;  //show 갯수					
				}
				else if(z==3){  //네번째버튼   hide(4):1345   , show(4):0267
					a[0]=1,a[1]=3,a[2]=4,a[3]=5;
					a[4]=0,a[5]=2,a[6]=6,a[7]=7;
					h=4;  //hide 갯수
					s=4;  //show 갯수					
				}
				else if(z==4){  //다섯번째버튼     hide(3):025  , show(5):13467
					a[0]=0,a[1]=2,a[2]=5;
					a[3]=1,a[4]=3,a[5]=4,a[6]=6,a[7]=7;
					h=3;  //hide 갯수
					s=5;  //show 갯수	
				}
				r=parseInt(s/c+0.9);  //줄수 자리올림		parseInt(5/4+0.9) 1.25+0.9 =2.15		
			
			
			$('.section9-gallery-img-wrap').css({height:imgH*r});//갤러리박스높이 2줄
		
			for(i=0;i<h;i++){
				$('.section9-gallery-img-wrap>li').eq(a[i]).hide(0);			
			}

			k=h-1;
			for(i=0;i<r;i++){
				for(j=0;j<c;j++){
					k++;  //0 1 2 3 4 5 6 7	
					$('.section9-gallery-img-wrap>li').eq(a[k]).show(0).css({width:(100/c)+'%',height:imgH,left:((100/c))*j+'%',top:imgH*i});       
				}
			}
			
		$('.section9-gallery-img-wrap>li').addClass('addAnis9');
	}
	
	
	
	
	
	
	
	
});  //section9.js