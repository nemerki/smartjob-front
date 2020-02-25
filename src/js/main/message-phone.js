let selector = '.messages__list--box a';

$(selector).on('click', function(){
   
    $(this).addClass('message__active');
    $(".messages__list").css("display", "none");
    $(".messages__inner").css("display", "block");
});
$(document).on('click','.messages__back', function(){
    $('.messages__inner').css("display", "none");
    $('.messages__list').css("display", "block");
    $(selector).removeClass('message__active');

});