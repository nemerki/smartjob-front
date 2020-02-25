// POPUP

$(document).ready(function () {
  $("#popup__addResume--show").click(function () {
    $("#popup__addResume").show();
  });
  $("#popupClose").click(function () {
    $("#popup__addResume").hide();
  });
  $("#popup__addResume--cansel").click(function () {
    $("#popup__addResume").hide();
  });
  $("#popupCover--show").click(function () {
    $("#popupCover").show();
  });
  $("#popupCover--close").click(function () {
    $('#coverletterForm')[0].reset();
    $("#popupCover").hide();
  });
  $("#popupCover--cansel").click(function () {
    $('#coverletterForm')[0].reset();
    $("#popupCover").hide();
  });
  // $(document).on('click', ".myResume__addCoverLetter--listIcon",function(){
  //   var letterTitleText = $(this).parent().text();
  //   var letterTitle = $(this).parent();
  //   var letterContect = letterTitle.next().text();
  //   $("input[type=text]#cvName").val(letterTitleText);
  //   $("textarea[type=text]#my__textarea").val(letterContect);
  //   $("textarea#my__textarea").val(letterContect);
  //   $("#popupCover").show();
  // });
  $("#popupCover--close").click(function () {
    $('#coverletterForm')[0].reset();
    $("#popupCover").hide();
  });
  $("#popupApply__show").click(function () {
    $("#popupApply").show();
  });
  $("#popupApply--close").click(function () {
    $("#popupApply").hide();
  });
  $("#coverLetter__new").click(function () {
    $("#popupCover").show();
  });
  $("#remove__letter").click(function () {
    $("#popupRemoveLetter").show();
  });
  $(".popupRemoveLetter__close").click(function () {
    $("#popupRemoveLetter").hide();
  });
  $("#edit__letter").click(function () {
    $(".popupCover").show();
  });
  $("#editPopup__close").click(function () {
    $("popupCover").hide();
  });
  



  // rename cv
  // $(document).on('click', ".rename",function(){

  //   $(".ThertyPopup").fadeToggle( "slow", "linear" );
  //   var primaryDiv = $(this).closest( ".myResume__box" );
  //   var renameParagraf = $(primaryDiv).find(".myResume__title--name");

  //   $(".ThertyPopup__content--btn-link").click(function () {
  //     var inputVal =  $("input[type=text]#renameCv").val();
  //     $(renameParagraf).text(inputVal);
  //     $(".ThertyPopup").hide();
  //   });
  // });
  // $(".ThertyPopup__content--header-icon").click(function(){
  //   $(".ThertyPopup").hide();
  // });


  // remove cv

  // $(document).on('click', ".removeThisResume",function(){

  //   $(".SecondPopup").fadeToggle( "slow", "linear" );
  //   var primaryDiv = $(this).closest( ".myResume__box" );


  //   $(".removeResume").click(function () {

  //     $(primaryDiv).remove();
  //     $(".SecondPopup").hide();
  //   });
  //   $(".SecondPopup__content--header-icon").click(function(){
  //     $(".SecondPopup").hide();
  //   });
  //   $(".closeRemovePopup").click(function(){
  //     $(".SecondPopup").hide();
  //   });
  // });


});