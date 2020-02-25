//LANGUAGE DROPDOWN
var dropdownButton = document.querySelector('.lang-toggle');
var drMenuItem = document.querySelectorAll('.dropdown-item');
drMenuItem.forEach(function(item) {
    item.addEventListener("click", function(e) {
        dropdownButton.innerText = e.target.innerText;
    });
});
// Range




