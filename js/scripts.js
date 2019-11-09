$("#createRouteButton").click(function () {
    $("#createRouteModal").modal('toggle');
});
$("#closeRouteButton").click(function () {
    $("#createRouteModal").modal('hide')
});
$("#cancelRouteButton").click(function () {
    $("#createRouteModal").modal('hide')
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
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})