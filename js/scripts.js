$("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});
$("#reserveButton").click(function () {
    $("#reserveModal").modal('toggle');
});
$("#closeReserve").click(function () {
    $("#reserveModal").modal('hide')
});
$("#cancelReserve").click(function () {
    $("#reserveModal").modal('hide')
});
$("#loginButton").click(function () {
    $("#loginModal").modal('toggle');
});
$("#closeLogin").click(function () {
    $("#loginModal").modal('hide')
});
$("#cancelLogin").click(function () {
    $("#loginModal").modal('hide')
});