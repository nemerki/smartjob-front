$(document).ready(function() {

    $('.myRadio-resume').click(function(){
        $('.myRadio-resume').removeClass("myRadio__active");
        $(this).addClass("myRadio__active");
    });

    $('.myRadio-cover').click(function(){
        $('.myRadio-cover').removeClass("myRadio__active");
        $(this).addClass("myRadio__active");
    });

  });

  $(document).ready(function() {
    //This condition will check if form with id 'select-cv__form' is exist then only form reset code will execute.
    if($('#select-cv__form').length>0){
        $('#select-cv__form')[0].reset(); 
    }
});