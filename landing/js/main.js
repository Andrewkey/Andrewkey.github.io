
$(function() {
	/* Slow Scrilling */
	$('ul.nav a, .row a').bind('click',function(event){
	var $anchor = $(this);
	$('[data-spy="scroll"]').each(function () {
	var $spy = $(this).scrollspy('refresh')
	});
	$('html, body').stop().animate({
	scrollTop: $($anchor.attr('href')).offset().top-200
	}, 600);
	event.preventDefault();
	});
	
	/*Sub Menu*/
	$(".subnav-fixed.subnav").hide();
	$('.subnav-fixed.subnav li').on('activate',function(){
		if($('.subnav-fixed.subnav li').index(this)!=0)
		$(".subnav-fixed.subnav").show();
		else
		$(".subnav-fixed.subnav").hide();
	});
	
	
	
	

		
	
	
	
	
	
	
});

// Background stretch to fit screen size

