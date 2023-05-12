<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$id  = $_GET['id_recipe'];
$response = 0;

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $sql = "select ingredient_name, amount
from ingredients i
join ingredients_in_recipe r on i.id_ingredient = r.id_ingredient
where id_recipe = ?;";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('i', $id);
    if(mysqli_stmt_execute($stmt)){
        mysqli_stmt_bind_result($stmt, $col1, $col2);
        while (mysqli_stmt_fetch($stmt)) {
            printf("%s - %s\n", $col1, $col2);
        }
        $response = 1;
    }
    if ($response === 0) {
        print("Произошла ошибка при выполнении запроса");
    }
}
$link->close();