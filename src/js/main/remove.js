//JOBS-SEARCH.HTML
//REMOVE <li class="jobs__criterias-list">
$(document).ready(function(){
    $(document).on('click','.delete-criterias',function(){
        var liElement = $(this).parent().parent();
        liElement.remove(); 
        var liElementId = liElement.attr("id");
        $("#defaultCheck" + liElementId).prop("checked", false);
    })
  });

