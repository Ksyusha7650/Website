var heart = $(".favourite")

heart.click(function () {
    if (heart.attr("id") === "unchecked") {
        heart.attr("id", "checked")
        heart.attr("src", "../../resources/img/heart_filled.png")
    } else {
        heart.attr("id", "unchecked")
        heart.attr("src", "../../resources/img/heart.png")
    }
})

heart.on({
    mouseenter: function () {
        if (heart.attr("id") === "unchecked")
            heart.attr("src", "../../resources/img/heart_filled.png")
    },
    mouseleave: function () {
        if (heart.attr("id") === "unchecked")
            heart.attr("src", "../../resources/img/heart.png")
    }
})