$(document).ready(function () {

    
  
});
$(document).ready(function(){

    // Initialize Select2
    $('#sel_users').select2();
  
    // Set option selected onchange
    $('#selectCV').change(function(){
      
        let selectResume = $(this).val();
        if (selectResume != 0){
            $('.viewCV').css("display", "block");
        }
        else{
            $('.viewCV').css("display", "none");
        }
  
    });
  });