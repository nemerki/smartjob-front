$(document).ready(function () {
    // This WILL work because we are listening on the 'document', 
    // for a click on an element with an ID of #test-element
    $(".form__customInput").on("change", function () {
        let fileName = $(this).val().split("\\").pop();
        let parentInp = $(this).parent();
        parentInp.find( ".form__customInpTitle" ).addClass("form__customInpTitle--label");
        parentInp.find( ".form__customLabel" ).css('color', '#686868');

        $(this).siblings(".form__customLabel").addClass("selected").text(fileName);

    });

    $(document).on("click", ".clearValue", function () {
        let parent = $(this).parent();
        let placeholder = parent.find('.form__customInpTitle').text();
        console.log(placeholder);
        parent.find('.form__customInput').val('');
        parent.find('.form__customInpTitle').removeClass("form__customInpTitle--label");
        parent.find( ".form__customLabel" ).css('color', 'transparent');
        parent.find('.form__customLabel').removeClass("selected").text(placeholder);
    });

});