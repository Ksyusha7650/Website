var review, counter
$("#button_send_review").click(function () {
    review = $("#review").val()
    getCounter()
    $.get("review.html", function (data) {
        if ($("#new_review0").length) {
            var new_review = "#new_review" + (counter - 1)
            $(new_review).html(data)
            $(new_review).attr("id", "new_review" + counter)
        } else {
            $("#reviews").html(data)
            $("#new_review").attr("id", "new_review" + counter)
        }
    })
    setTimeout(function () {
        $("#image_acc").attr("class", "img" + counter);
        $("#name_acc").attr("class", "name" + counter);
        $("#date_acc").attr("class", "date" + counter);
        $("#review_acc").attr("class", "review_acc review" + counter);
        /* var name_acc = $("#name_acc")
         var counter = 0
         var date_acc = $("#date_acc")
         var review_acc = $("#review_acc")
         var new_review = $("#new_review")
         $('#review').each(function (index) {
             counter++;
             $(name_acc).attr("class", "name" + counter);
             $(date_acc).attr("class", "date" + counter);
             $(review_acc).attr("class", "review_acc review" + counter);
             $(new_review).attr("id", "new_review" + counter)
         })*/
        var img_source = "../../resources/img/tigers/masha.jpg"
        var img_name = ".img" + counter
        var str_name = ".name" + counter
        var str_date = ".date" + counter
        var str_review = ".review" + counter
        $(img_name).attr("src", img_source)
        $(str_name).html("Машка")
        var date = new Date($.now())
        $(str_date).html(`${date.toDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
        $(str_review).html(review)
    }, 500)
})

function getCounter() {
    counter = 0
    $('#published_review').each(function (index) {
        counter++;
    })
}



