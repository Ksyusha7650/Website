var review
$("#button_send_review").click(function () {
    review = $("#review").val()
    $.get("review.html", function (data) {
        $("#reviews").html(data)
    })

    var counter = 1;

    var name_acc = $("#name_acc")
    var date_acc = $("#date_acc")
    var review_acc = $("#review_acc")
    /*$('#review').each(function (index) {
        $(name_acc).attr("class", 'name' + index);
        $(date_acc).attr("class", 'date' + index);
        $(review_acc).attr("class", 'review' + index);
        counter++;
    })*/
    var str_name = '.name' + counter
    var str_date = ".date" + counter
    var str_review = ".review" + counter
    var obj = $(str_name)
    obj.html("Машка")
    var date = new Date($.now())
  //  $(str_date).html(date.getFullYear())
  //  $(str_review).html(review)
})



