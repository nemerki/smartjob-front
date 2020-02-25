//addCv
$(document).ready(function() {
  $("#blockIfCheked").change(function() {
    var $this = $(this);
    if ($this.is(':checked')) {
      $(".disabled").attr('style', 'display:block');
    } else  {
      $(".disabled").attr('style', 'display:none');
    }
  });
});

$(document).ready(function() {
  $("#d-noneIfCheked").change(function() {
    var $this = $(this);
    if ($this.is(':checked')) {
      $("#endDate").parent().attr('style', 'display:none');
    } else  {
      $("#endDate").parent().attr('style', 'display:block');
    }
  });
});

$(document).ready(function() {
  $("#minorDetails").change(function() {
    var $this = $(this);
    if ($this.is(':checked')) {
      $(".minor-details").attr('style', 'display:block');
      $( "#majorDetails" ).prop( "disabled", true );
    } else  {
      $(".minor-details").attr('style', 'display:none');
      $( "#majorDetails" ).prop( "disabled", false );
    }
  });
});

$(document).ready(function() {
  $("#majorDetails").change(function() {
    var $this = $(this);
    if ($this.is(':checked')) {
      $(".major-details").attr('style', 'display:block');
      $( "#minorDetails" ).prop( "disabled", true );
    } else  {
      $(".major-details").attr('style', 'display:none');
      $( "#minorDetails" ).prop( "disabled", false );
    }
  });
});

$(document).ready(function() {
  $("#stillStaying").change(function() {
    var $this = $(this);
    if ($this.is(':checked')) {
      $(".stillStaying").attr('style', 'display:none');
      $( "#dropout" ).prop( "disabled", true );
    } else  {
      $(".stillStaying").attr('style', 'display:block');
      $( "#dropout" ).prop( "disabled", false );
    }
  });
});
$(document).ready(function() {
  $("#dropout").change(function() {
    var $this = $(this);
    if ($this.is(':checked')) {
      $(".stillStaying").attr('style', 'display:none');
      $(".endDate").attr('style', 'display:none');
      $("#dropoutBlock").addClass("d-block");
      $( "#stillStaying" ).prop( "disabled", true );
    } else  {
      $(".stillStaying").attr('style', 'display:block');
      $(".endDate").attr('style', 'display:block');
      $("#dropoutBlock").removeClass("d-block");
      $( "#stillStaying" ).prop( "disabled", false );
    }
  });
});

$(document).ready(function() {
  $("#dropouthighSchool").change(function() {
    var $this = $(this);
    if ($this.is(':checked')) {
      $(".endDateSchool").attr('style', 'display:none');
      $( "#highSchoolContinue" ).prop( "disabled", true );
    } else  {
      $(".endDateSchool").attr('style', 'display:block');
      $( "#highSchoolContinue" ).prop( "disabled", false );
    }
  });
});

$(document).ready(function() {
  $("#advancedLevel").change(function() {
    var $this = $(this);
    var level = $(".js-example-placeholder-single30").select2();
    level.val("Advanced").trigger("change");
  
  });
});

$(document).ready(function() {
  $('#woman').click(function(){
    $(".ifWoman").addClass('d-none');
  });
  $('#man').click(function(){
    $(".ifWoman").removeClass('d-none');
  });
});



// $("input:radio").change(function () {
//   if () {
//     $("#otherGendInp").removeClass('d-none');
//   }
//   else {
//     $("#otherGendInp").addClass('d-none');
//   }
// });