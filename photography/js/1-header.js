jQuery(function($){
	
	$(document).ready(function() {
		
		if (!(cur_page_data.pageid == 1 || cur_page_data.pagename == "home")){
			$('.banner').css({'z-index':'999999','min-height':'0vh','height':'54.88px','padding' :'0'});
			$('.banner_content,.banner_btn').css('display','none');	
			$('.header').css({'background':'rgba(0, 0, 0, 0.75) none repeat scroll 0 0','box-shadow' :'0 2px 8px 0 rgba(50, 50, 50, 0.08)','padding-top':'10px'});
		}
		
		if (($(window).width() < 909) && (!(cur_page_data.pageid == 1 || cur_page_data.pagename == "home"))){
			$('.banner').css('height','64px');
		}
		
	}); 
		
});
