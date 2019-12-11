$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

    $(".list__row").on('click', function () {
        $(this).siblings().slideToggle("slow");
        $(this).find('p').slideToggle("slow");
    })
});