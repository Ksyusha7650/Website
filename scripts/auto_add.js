$(document).ready(function(){
    $.get("head_site.html", function(data) {
        $("#head_site").html(data);
    });
});

$(document).ready(function () {
    $.get("footer_site.html", function(data) {
        $("footer").html(data)
    })
})