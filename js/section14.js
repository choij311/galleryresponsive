$(function(){
	
	//SUBMIT 버튼 클릭 이벤트 - 전송
	$('#_submit').on({
		click:	function(){
			if($('#_name').val()=='' || $('#_email').val()=='' || $('#_select').val()=='' || $('#_message').val()==''){  //빈칸이 있으면 안보내고
				alert('모든칸 입력 하세요!');
				return false;
			}
			else{  //빈칸이 아니면 보낸다
				contactForm.submit();  //폼전체 내용 전송				
			}
		}
	});
	
	
}); //section14.js