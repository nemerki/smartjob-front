//addcv.html

  $(document).ready(function(){
    $(".resume__contact-body").on("click","div", function (event) {   
      var content = $(this).parent().parent();
      var contentId = ('#' + $(content).attr('id'));
      var bodyId = contentId +'Body';
      var formId = contentId +'Form';
      $(bodyId).css("display","none");
      $(formId).css("display","block");
     
      $('.forMyResumeList').click(function(){
        $(this).data('clicked', true);
        $(bodyId).css("display","block");
        $(formId).css("display","none");
      });

    });
  });

  $(document).ready(function(){
    $('#resumeSection').click(function(){
      $('#mySidenav').css("width","250px");
    });
    $('#closeResumeSection').click(function(){
      $('#mySidenav').css("width","0");
    });
  });




  