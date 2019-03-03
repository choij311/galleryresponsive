$(function(){
	
	$('.section7-content-wrap>li').on({
		mouseenter:	function(){
			$(this).find('.s7Ani').addClass('addClasS7');
			// $(this).children().children('img').addClass('addClasS7');
			// $(this).children().children('i').addClass('addClasS7');
			// $(this).children('ul').addClass('addClasS7');
		},
		mouseleave:	function(){
			$(this).find('.s7Ani').removeClass('addClasS7');
			// $(this).children().children('img').removeClass('addClasS7');
			// $(this).children().children('i').removeClass('addClasS7');
			// $(this).children('ul').removeClass('addClasS7');			
		}
	});
	
	
}); //section7.js