$(window).on("load", function () {
    get_recipes()
})
var button
var array
function get_recipes() {
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
    var list = $("#recipes_list")
    for (let i = 0; i < array.length - 1; i++) {
        var row = array[i].split(",")
        var id = row[0]
        list.append('<li><a id='+id+' href="recipe_template.html" onclick="set_id('+id+')"></a></li>');
        $("#" + id).text(row[1])
    }
}

function set_id($id) {
    localStorage.setItem("id_recipe", $id)
}

function open_add () {
    open("add_recipe.html", "_self")
}