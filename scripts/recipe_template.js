
$(window).load(function () {
    var dish_name = $("#dish")
    var dish = $("#dish_textarea")
    var theme = $("#theme")
    var date = $("#date")
    var ingredients = $("#ingredients_textarea")
    get_recipe(dish_name, dish, theme, date)
    get_ingredients(ingredients)
})

function get_ingredients($ingredients) {
        $.ajax({
            type: "GET",
            url: "../php/get_ingredients.php",
            data: {id_recipe: localStorage.getItem("id_recipe")},
        })
            .done(function (data) {
                if (data === "Произошла ошибка при выполнении запроса") {
                    alert("Произошла ошибка!");
                } else {
                    $ingredients.text(data)
                }
            });
}

function get_recipe($name, $dish, $theme, $date) {
    $.ajax({
        type: "GET",
        url: "../php/get_recipe.php",
        data: {id_recipe: localStorage.getItem("id_recipe")},
    })
        .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
                var result = data.split(",")
                $name.text(result[0])
                $dish.text(result[1])
                $date.text(result[2])
                $theme.text(result[3])
            }
        });
}