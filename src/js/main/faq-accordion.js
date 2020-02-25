var acc = document.getElementsByClassName("acardion__btn");
var pluse = document.getElementsByClassName("acardion__plus");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("acardion__active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";

    } else {

      panel.style.display = "block";
    }

  });
}


$(".acardion__btn").click(function () {
  $(this).find($(".acardion__btn--icon")).toggleClass('flaticon-plus').toggleClass('flaticon-minus-symbol acardion__btn--icon-white');
})