var review, counter, counterStars
$("#button_send_review").click(function () {
    review = $("#review").val()
    getCounter()
    getCountStars()
    if (counterStars === 0){
        alert("Выбери оценку")
        return;
    }
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
        var star_acc = $(".num_star")
        $(image_acc).attr("class", "img" + counter);
        $(name_acc).attr("class", "name" + counter);
        $(date_acc).attr("class", "date" + counter);
        $(review_acc).attr("id", "review_acc" + counter);
        $(star_acc).attr("class", "num_star" + counter);
        var img_source = "../../resources/img/tigers/masha.jpg"
        var img_name = ".img" + counter
        var str_name = ".name" + counter
        var str_date = ".date" + counter
        var str_review = "#review_acc" + counter
        var str_num_stars = ".num_star" + counter
        $(img_name).attr("src", img_source)
        $(str_name).html("Машка")
        var date = new Date($.now())
        $(str_date).html(`${date.toDateString()} ` + fixDigit(`${date.getHours()}`) + `:`
            + fixDigit(`${date.getMinutes()}`) + `:` + fixDigit(`${date.getSeconds()}`))
        $(str_review).html(review)
        $(str_num_stars).html(counterStars)
        clear()
    }, 100)
})

function fixDigit(val) {
    return val.toString().length === 1 ? "0" + val : val;
}

function getCounter() {
    counter = 0
    $(".published_review").each(function (index) {
        counter++;
    })
}

function getCountStars() {
    counterStars = 0
    for (let i = 1; i <= 5; i++) {
        var name_star = ".score_" + i
        var star = $(name_star)
        if (!star.prop('disabled')) counterStars++
    }
}

$(window).on("load", clear)

function clear() {
    $("#review").val('')
    for (let i = 1; i <= 5; i++) {
        var name_star = ".score_" + i
        var star = $(name_star)
        star.css("background", "url(\"../../resources/img/star.png\") no-repeat")
        star.prop('disabled', true);
    }
}

var star = $(".star")

star.click(function () {
    var id_star = this.className.charAt(this.className.length - 1)
    for (let i = 1; i <= 5; i++) {
        var name_star = ".score_" + i
        var star = $(name_star)
        if (i <= id_star) {
            star.css("background", "url(\"../../resources/img/star_filled.png\") no-repeat")
            star.prop('disabled', false);
        } else {
            star.css("background", "url(\"../../resources/img/star.png\") no-repeat")
            star.prop('disabled', true);
        }
    }
})

star.on({
    mouseenter: function () {
        var id_star = this.className.charAt(this.className.length - 1)
        for (let i = 1; i <= 5; i++) {
            var name_star = ".score_" + i
            var star = $(name_star)
            if (i <= id_star)
                star.css("background", "url(\"../../resources/img/star_filled.png\") no-repeat")
            else
                star.css("background", "url(\"../../resources/img/star.png\") no-repeat")
        }
    },
    mouseleave: function () {
        for (let i = 1; i <= 5; i++) {
            var name_star = ".score_" + i
            var star = $(name_star)
            var bg = (star.prop('disabled')) ? "url(\"../../resources/img/star.png\") no-repeat" :
                "url(\"../../resources/img/star_filled.png\") no-repeat";
            star.css("background", bg)
        }
    }
})


