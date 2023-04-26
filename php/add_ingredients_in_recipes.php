<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$ingredient  = $_POST['id_ingredient'];
$recipe = $_POST['id_recipe'];
$response = 0;

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $sql = "insert into ingredients_in_recipe (id_recipe, id_ingredient)
        values (?, ?);";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('ii', $recipe, $ingredient);
    if($stmt->execute()){
        $response = 1;
    }
    if ($response === 0) {
        print("Произошла ошибка при выполнении запроса");
    }
}
$link->close();