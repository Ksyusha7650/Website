var user = localStorage.getItem("user")
$("#button_search").click(function() {
    alert("hm")
})
$("#button_to_login").click(function() {
    if (user !== null)
        open("../account.html", "_self")
    else
        open("../login.html", "_self")
})

$('#button_to_favourite').click(function() {
    open("../favourites_empty.html", "_self")
})

$('#button_to_add_recepy').click(function() {
    if (user !== null)
        open("../account.html", "_self")
    else
        open("../add_recepy_empty.html", "_self")
})
$("#button_to_about_us").click(function() {
    open("../about_us.html", "_self")
})