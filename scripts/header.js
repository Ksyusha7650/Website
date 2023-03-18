$(document).ready(function(){
    $.get("head_site.html", function(data) {
        $("#head_site").html(data);
    });
});