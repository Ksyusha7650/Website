
function apply() {
    var dish_name = $("#dish").val()
    var dish = $("#dish_textarea").val()
    var theme = $("#theme").val()
    var ingredients = $("#ingredients_textarea").val()
    send_recipe_to_db(dish_name, dish, theme)
    var array_of_ingredients = ingredients.split('\n')
    for (let index in array_of_ingredients) {
        var ing_line = array_of_ingredients[index].split('-')
        var name = ing_line[0]
        var amount = ing_line[1]
        send_ingredients_to_db(name, amount)
        setTimeout(this, 500)
        send_ingredients_to_recipe()
    }
    open("recipe_template.html", "_self")
}

function send_ingredients_to_db($name, $amount) {
        $.ajax({
            type: "POST",
            url: "../php/add_ingredients.php",
            data: {id_acc: localStorage.getItem("id_account"), ingredient_name: $name, amount: $amount},
        })
            .done(function (data) {
                if (data === "Произошла ошибка при выполнении запроса") {
                    alert("Произошла ошибка!");
                } else {
                    localStorage.setItem("id_ingredient", data);
                }
            });
}

function send_recipe_to_db($name, $dish, $theme) {
    $.ajax({
        type: "POST",
        url: "../php/add_recipe.php",
        data: {id_acc: localStorage.getItem("id_account"), dish_name: $name, dish: $dish, theme: $theme},
    })
        .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
                localStorage.setItem("id_recipe", data);
            }
        });
}

function send_ingredients_to_recipe() {
        $.ajax({
            type: "POST",
            url: "../php/add_ingredients_in_recipes.php",
            data: {id_ingredient: localStorage.getItem("id_ingredient"),
                id_recipe: localStorage.getItem("id_recipe")},
        })
            .done(function (data) {
                if (data === "Произошла ошибка при выполнении запроса") {
                    alert("Произошла ошибка!");
                }
            });

}