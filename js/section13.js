$(function(){
	var a=b=c=d=0;
	//카운트
	
	id0=setInterval(countFn0,12.8205128205128);	
	function countFn0(){
		a++;
		if(a<=780){   //10초에 끝낼려면 몇초간격으로 함수를 호출 0.0128205128205128 = 10/780
			$('.countNum').eq(0).text(a);	
		}
		else{
			clearInterval(id0);	
		}
	}
		
	id1=setInterval(countFn1,10.1317122593718);	
	function countFn1(){
		b++;
		if(b<=987){  //0.0101317122593718 = 10/987 
			$('.countNum').eq(1).text(b);
		}
		else{
			clearInterval(id1);
		}
	
	}

	id2=setInterval(countFn2,28.5714285714286);	
	function countFn2(){
		c++;
		if(c<=350){ //0.0285714285714286
			$('.countNum').eq(2).text(c);
		}
		else{
			clearInterval(id2);	
		}
	}

	id3=setInterval(countFn3,60.2409638554217);	
	function countFn3(){
		d++;
		if(d<=166){  //0.0602409638554217
			$('.countNum').eq(3).text(d);
		}
		else{
			clearInterval(id3);				
		}
	}
	
	
});   //section13.js