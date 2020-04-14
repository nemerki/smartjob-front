 
  $(document).ready(function(){
	$("#toAdd").on("click","a", function (event) {
				var liElements = $(this).parent();
				var icon = $(liElements).children("i");
				icon.removeClass('flaticon-add').addClass('flaticon-tick');
        $("#myResume").append(liElements);
		//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
		//забираем идентификатор бока с атрибута href
				var linkId = $(this).attr('href');
				var btnId = linkId +'Btn';
				
				var firstView = linkId +'FirstView';
				var form = linkId +'Form';
				var body = linkId +'Body';
				$(form).css("display","block");
				if ( $(linkId).is('.initiallyHidden') ) {
					//do something it does have the protected class!
					$(linkId).removeClass('d-none');
					$(body).addClass('d-none');
				}
				
				$(btnId).removeClass('d-none');
				$('.forMyResumeList').addClass('d-none');
					
				if ($(linkId).has( firstView )) {
					$(firstView).addClass('d-none');
				} 
								
				var linkId  = $(this).attr('href'),
			
		//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(linkId).offset().top;
				 top = top - 100;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
		$(btnId).click(function(){
			$(this).data('clicked', true);
			
			icon.removeClass('flaticon-tick').addClass('flaticon-add');
			$("#toAdd").prepend(liElements);
			if ($(linkId).has( firstView )) {
				$(firstView).removeClass('d-none');
			} 
			if ( $(linkId).is('.initiallyHidden') ) {
				$(linkId).addClass('d-none');
				$(body).removeClass('d-none');
			}
			$(form).css("display","none");
		});
	});
});

 
$(document).ready(function(){
	$("#toAddd").on("click","a", function (event) {
				var liElementss = $(this).parent();
				var icons	=	$(liElementss).children("i");
				icons.removeClass('flaticon-add').addClass('flaticon-tick');
        $("#myResumee").append(liElementss);
		//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
		//забираем идентификатор бока с атрибута href
				var linkIdd = $(this).attr('href');
				var btnIdd = linkIdd +'Btn';
				
				var firstVieww = linkIdd +'FirstView';
				var formm = linkIdd +'Form';
				var bodyy = linkIdd +'Body';
				$(formm).css("display","block");
				if ( $(linkIdd).is('.initiallyHidden') ) {
					//do something it does have the protected class!
					$(linkIdd).removeClass('d-none');
					$(bodyy).addClass('d-none');
				}
				
				$(btnIdd).removeClass('d-none');
				$('.forMyResumeList').addClass('d-none');
					
				if ($(linkIdd).has( firstVieww )) {
					$(firstVieww).addClass('d-none');
				} 
								
				var linkIdd  = $(this).attr('href'),
			
		//узнаем высоту от начала страницы до блока на который ссылается якорь
				topp = $(linkIdd).offset().top;
				 topp = topp - 100; 
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: topp}, 1500);
		$(btnIdd).click(function(){
			$(this).data('clicked', true);
			
			icons.removeClass('flaticon-tick').addClass('flaticon-add');
			$("#toAdd").prepend(liElementss);
			if ($(linkIdd).has( firstVieww )) {
				$(firstVieww).removeClass('d-none');
			} 
			if ( $(linkIdd).is('.initiallyHidden') ) {
				$(linkIdd).addClass('d-none');
				$(bodyy).removeClass('d-none');
			}
			$(formm).css("display","none");
		});
	});

});


$(document).ready(function(){
	$("#myResume").on("click","a", function (event) {   
		//отменяем стандартную обработку нажатия по ссылке
				event.preventDefault();
		//забираем идентификатор бока с атрибута href
				var linkId  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(linkId).offset().top;
				 top = top - 100;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
		
	});

});

