$(document).ready(function(){
	

	$('.registerTab_allTab .registerTab__content').hide();

	$('.registerTab_allTab .registerTab__content:last-child').show();

	$('.registerTab__btnContainer button').removeClass('registerTab__addColor');

	$('.registerTab__btnContainer button:last-child').addClass('registerTab__addColor');

$(document).on('click','.registerTab__btn',function(){


		let index=$(this).index();

		$('.registerTab__btnContainer button').removeClass('registerTab__addColor');

		$(this).addClass('registerTab__addColor');

		$('form').show();

		$('#userLoginForm').hide();

		$('.registerTab_allTab .registerTab__content').hide();

		$('.registerTab_allTab .registerTab__content').eq(index).fadeIn();


})


$('#userLoginForm').hide();

$('.registerTab__showFormSystem').click(function(e){

	e.preventDefault();

	$(this).parents('form').hide();

	$('#userLoginForm').show();

})



$('.registerTab__showForm').click(function(e){

	e.preventDefault();

	$(this).parents('form').hide();

	$('#userLoginForm').show();

})



$('.registerTab__registerShow').click(function(e){


	e.preventDefault();


	$('form').show();

	$(this).parents('form').hide();


})


})