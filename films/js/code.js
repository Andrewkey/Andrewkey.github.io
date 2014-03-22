(function( $ ){

	$(function(){

		/*
		PopOver
		*/

		$('#popover').popover({content:"<a href=\"#\">Авторизуйтесь на сайте</a> для того, чтобы:<BR><span class=\"myicon-like\"></span>Сохранять понравившиеся фильмы<br><span class=\"myicon-comment\"></span>Комментировать и публиковать рецензии",placement:"top",trigger:'click',html:true});
		$('#popover').click(function(event){
			event.preventDefault();
		});
		//$('#popover').popover("show");
		/*
		
		*/


		/*Film Popover window*/
		$('.sl-img a').popover({content:'<button class=\"btn view\">Cмотреть</button><button class=\"btn trai\"><span class="myicon-trai"></span>Трейлер</button><button class=\"btn look\"><span class="myicon-eye"></span>Следить</button><button class=\"btn queue\"><span class="myicon-queue"></span>В очередь</button><div class="info"><p><strong>Рейтинги:</strong> IMDB: <b>8,2</b>  ARTViD: <b>8,7</b></p><p><strong>Режиссер:</strong> Дмитрий Дьяченко</p><p><strong>Актеры:</strong> Никита Тарасов, Сергей Епишев</p></div><p class="desc">Известный своим не только актерским, но и кулинарным талантом Дмитрий Назаров и харизматичный Дмитрий Нагиев в сериале с говорящим названием «Кухня». Главную роль играет Марк Богатырев, известный зрителям по комедийному боевику «Ненасытные».</p>',title:"<h3>Lorem Ipsum</h3><small>2012, Россия, Комедия</small>",trigger:'click',html:true});
		$('.sl-img a').click(function(event){
			event.preventDefault();
		});

		/*Slider Shadow*/
		$('.sl-slider-left').hide();
		$('.sl-slider-right').hide();
		$('body').on({'scrolling.mouseover': 
				function (e, data) {
					
					$(this).siblings().hide();
					$(this).siblings().hide();
				},
				'scrolling.scroll': 
				function (e, data) {
					$(this).siblings().show();
					$(this).siblings().show();
				}
			 	},
			 	'.scroll, .scroll-old, .scroll-step, .scroll-horizontal, .scroll-button');

		/*Carousel Controls */
		$('#myCarousel').hover(
			function(){
				$('.carousel-nav').animate({'opacity':1});
			},
			function(){
				$('.carousel-nav').animate({'opacity':0});
			});


		/*Arelt Slider To Close*/
		$('#myCarousel .alert .close').on('click.myclose',function(){
			$(this).parent().parent().remove();
			
		});

		/*Seach Field Empty*/
		$('.myicon-cross').on('click.myreset',function(){
			$("#search").val('');
		});

		/*Chosen*/
		$('#imdr-chosen').chosen();
		$('#award-chosen').chosen();
		$('#cash-chosen').chosen();
		$('#search-type').chosen({disable_search_threshold: 10});

		/*Footer switch*/
		$(".switch").on('click.myswitch',function(){
			var ball=$('.myicon-img',this);
			if(ball.hasClass('active'))
			{
				ball.animate({'margin-left':'+=20'});
				
			}
			else{
				ball.animate({'margin-left':'-=20'});
			}
			ball.toggleClass('active');
			$('.yes,.no').toggleClass('switch-dis');
		});

		/*Add more Films*/
		$('.add-more').on('click.myaddmore',function(event){
			AjaxAddRating();
			AjaxAddCashFilm();
			AjaxAddAward();
			event.preventDefault();

		});


		/*Mockup Ajax Function*/
		function AjaxAddRating(){
			var mElem=$('.rating-films');
			$('.rating-content',mElem).last().css({'margin-bottom':'15px'});
			var id='rating_'+($('.rating-content',mElem).length+1);
			console.log(id);
			mElem.append('<div class="rating-content"><div class="rating-img"><img src="temp/m1.jpg"></div><div class="rt-1"><a href="#">Во все тяжкие</a></div><div class="rt-2">Сериалы</div><div class="rt-3">2008, США, Детективы, Триллеры</div><div class="rt-4"><div class="rt-txt">Рейтинг:</div><div class="rt-num">9.4</div><div class="rt-star" id="'+id+'"><input type="hidden" name="val" value="9.4"/></div></div></div>');

			$('#'+id).rating({
				fx: 'float',				
				stars: 10,
				image: 'img/stars.png',				
				readOnly: true
			});

			$('.rating-content',mElem).last().css({'margin-bottom':'0px'});
			
		}
		function AjaxAddCashFilm(){
			var mElem=$('.cash-films');
			$('.rating-content',mElem).last().css({'margin-bottom':'15px'});

			mElem.append('<div class="rating-content"><div class="rating-img"><img src="temp/m2.jpg"></div><div class="rt-1"><a href="#">Во все тяжкие</a></div><div class="rt-2">2008, США, Детективы, Триллеры</div><div class="rt-4"><div>Мировые сборы:</div><div style="padding:3px 0;"><b>$1 200 676</b></div></div></div>');

			$('.rating-content',mElem).last().css({'margin-bottom':'0px'});
		}
		function AjaxAddAward(){
			var mElem=$('.award-films');
			$('.rating-content',mElem).last().css({'margin-bottom':'15px'});
			
			mElem.append('<div class="rating-content"><div class="rating-img"><img src="temp/m3.jpg"></div><div class="rt-1"><a href="#">Во все тяжкие</a></div><div class="rt-2">2008, США, Детективы, Триллеры</div><div class="rt-4"><div>Номинаций: <b>14</b></div><div style="padding:3px 0;">Наград: <b>15</b></div></div></div>');

			$('.rating-content',mElem).last().css({'margin-bottom':'0px'});
		}

	});

})(jQuery);