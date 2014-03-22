


(function( $ ){
	
	 var menu=$('.menu').jScrollPane();
	 var api = menu.data('jsp');
	$(window).load(function(){
		$('<li class="line"></li>').insertBefore('.dl-back');
		
	});
	
	$(function(){


		
		 $('#accordion2').on('shown', function (data) {
	       $('.accordion-toggle').removeClass('minus');
	       $(data.target).siblings('.accordion-heading').find('.accordion-toggle').addClass('minus');
	    });

		 $('#accordion2').on('hide', function (data) {
	        $('.accordion-toggle').removeClass('minus');
	    });


		$(window).on('resize.newsGrid',function(event){
			
			api.reinitialise();
			 $('.share-block').hide();
			if($(window).width()>767)
			{
				$('.menu-container').removeClass('menu-open');
				$('.menu-container').css({'left':0});
				$('.menu-container').removeAttr('style');
			}
			else{

			}
		});
		
		$('#dl-menu').dlmenu({
			animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
		});
		
		$('.show-btn').on('click.show',function(){
			
			$('.menu-container').animate({left:0},'slow').addClass('menu-open');
			$('body').addClass('hidden-body');

			return false;
		});

		$('.hide-btn').on('click.hide',function(){
			
			$('.menu-container').animate({left:'-100%'},'slow').removeClass('menu-open');
			$('body').removeClass('hidden-body');
			return false;
		});



		/*$(window).scroll(function() {
			/*
	    var bh = $(window).height();
	    var st = $(window).scrollTop();
	    var el = $('.menu');
	    var eh = el.height();
	    var dif=parseInt($('.menu').height())-$(window).height()+60;
	  
	    if ( st >= (dif + eh) - bh ) {
	        //fix the positon and leave the green bar in the viewport
	        if(dif>0){
		        el.css({
		            position: 'fixed',
		           	top:-dif,
		            bottom: 0
		        });
	    	}
	    }
	    else {
	        // return element to normal flow
	        el.removeAttr("style");
	    }
			
	});*/




	});

})(jQuery);

