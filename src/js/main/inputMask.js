
  Inputmask({ alias: "datetime", inputFormat: "dd/mm/yyyy" }).mask(".qwerty");

  $("#phone").inputmask({"mask": "+999 (99) - 999 - 99 - 99"});


  $('#taxid').keypress(function(event){
    
    if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
    event.preventDefault();   
    } 
    if(this.value.length==10) {
      return false;
    }
});
