var review, counter
$("#button_send_review").click(function () {
    review = $("#review").val()
    getCounter()
    $.get("review.html", function (data) {
        if (counter > 0) {
            var new_review = "#new_review" + (counter - 1)
            $(new_review).append(data)
            $(new_review).attr("id", "new_review" + counter)
        } else {
            $("#reviews").html(data)
            $("#new_review").attr("id", "new_review" + counter)
        }
    })
    setTimeout(function () {
        var name_acc = $(".name")
        var date_acc = $(".date")
        var review_acc = $("#review_acc")
        var image_acc = $(".img")
        $(image_acc).attr("class", "img" + counter);
        $(name_acc).attr("class", "name" + counter);
        $(date_acc).attr("class", "date" + counter);
        $(review_acc).attr("id", "review_acc" + counter);
        var img_source = "../../resources/img/tigers/masha.jpg"
        var img_name = ".img" + counter
        var str_name = ".name" + counter
        var str_date = ".date" + counter
        var str_review = "#review_acc" + counter
        $(img_name).attr("src", img_source)
        $(str_name).html("Машка")
        var date = new Date($.now())
        $(str_date).html(`${date.toDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
        $(str_review).html(review)
        for (let i = 0; i < 3; i++) {
            $(".score-box_review").append("<div class = star </div>")
        }
    }, 1000)
})

function getCounter() {
    counter = 0
    $(".published_review").each(function (index) {
        counter++;
    })
}



