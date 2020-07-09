jQuery(function($){
	
	 if(cur_page_data.pageid == 1){
		$('.header').css('width','90%');	
	} 
	
	var $window = $(window),
	$body = $('body');		
		
	// SCROLLTO THE TOP
	// Show or hide the sticky footer button
	$window.scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.top').fadeIn(200);
		}else{
			$('.top').fadeOut(200);
			}
	});	 
		
	// Animate the scroll to top
	$('.top').click(function(event) {
		event.preventDefault();
	
		$('html, body').animate({scrollTop: 0}, 300);
	});
	
});

