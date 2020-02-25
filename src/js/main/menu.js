//NAVBAR MOBILE VERSION
$( document ).ready(function() {
    $( "#openHeader" ).click(function() {
        $("#sideMenu").css("width", "80%");
        $("body").css("background-color", "rgba(0,0,0,0.5)");

      });
      $( "#closeHeader" ).click(function() {
        $("#sideMenu").css("width", "0");
        $("body").css("background-color", "unset");
      });
});

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("nav__side--link-active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}



