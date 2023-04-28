var user = localStorage.getItem("id_account")
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
    if (user !== null)
        open("../favourites.html", "_self")
    else
        open("../favourites_empty.html", "_self")
})

$('#button_to_add_recipe').click(function() {
    if (user !== null)
        open("../add_recipe.html", "_self")
    else
        open("../add_recipe_empty.html", "_self")
})
$("#button_to_about_us").click(function() {
    open("../about_us.html", "_self")
})