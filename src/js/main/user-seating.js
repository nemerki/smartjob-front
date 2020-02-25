$(document).ready(function () {
    $(".account__edit-link").click(function () {
        $(this).parent().css("display", "none")
                .next().css("display", "block");
    });

    $(".account__cancel").click(function () {
        $(this).parent().parent().css("display", "none")
            .prev().css("display", "flex");
    });

    $(".account__update").click(function () {
        $(this).parent().parent().css("display", "none")
            .prev().css("display", "flex");
    });

    // $(".account__update--1").click(function(){
    //     if($(".account__edit--surname").val() != ""){
    //         $(".account__info--surname").text($(".account__edit--surname").val())
    //     }
    //     else{
    //         $(".account__info--surname").text();
    //     }
    //     if($(".account__edit--name").val() != ""){
    //         $(".account__info--name").text($(".account__edit--name").val())
    //     }
    //     else{
    //         $(".account__info--name").text();
    //     }
    // });

    // $(".account__update--2").click(function(){
    //     if($(".account__edit--email")){
    //         $(".account__info--email").text($(".account__edit--email").val());
    //     }
    // });
});