// JOBS-SEARCH.HTML
//IF CHECKED AD <li class="jobs__criterias-list"> ELSE REMOVE <li class="jobs__criterias-list">

$(document).ready(function() {
  $(".form-check-input").change(function() {
    var name = $(this).attr("data-name");
    var value = $(this).attr("data-id");
    var $this = $(this);
    if ($this.is(':checked')) {
                  $(".jobs__criterias").append(
                      '<li class="jobs__criterias-list" id = "'+value+'">\n' +
                      '<button class="myBtn">'+ name +
                      '<a class="delete-criterias"><i class="flaticon-cancel"></i></a>\n' +
                      '</button>\n' +
                      '\n' +
                      '</li>'
                  )
    } else  {
      $('#jobs__criterias').find('#'+value).remove();    
      $('#jobs__criterias1').find('#'+value).remove();
      $('#jobs__criterias2').find('#'+value).remove();        
    }
  });
});


