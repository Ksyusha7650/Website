$(window).on("load", function () {
    setTimeout(get_favourites, 500)

})

var array
function get_favourites() {
    $.ajax({
        type:"GET",
        url: "../php/get_recipes.php",
        data: {id_acc: localStorage.getItem("id_account")}
    })
        .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
               array = data.split("\n")
                set_list()
            }
        })
}

function set_list(){
    var list = $("#favourites_list")
    for (const el in array) {
        var row = array[el].split(",")
        var id = row[0]
        list.append('<li> <a id='+id+' href="recipe_template.html" onclick="set_id('+id+')"></a></li>');
        $("#" + id).text(row[1])
    }
}

function set_id($id) {
    localStorage.setItem("id_recipe", $id)
}