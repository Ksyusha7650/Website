<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$id  = $_GET['id_acc'];
$response = 0;

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $sql = "select id_recipe, recipe_name, date_created, theme
from recipes
where id_acc = ?;";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('i', $id);
    if(mysqli_stmt_execute($stmt)){
        mysqli_stmt_bind_result($stmt, $col1, $col2, $col3, $col4);
        while (mysqli_stmt_fetch($stmt)) {
            printf("%s,name: %s date created: %s theme: %s\n", $col1, $col2, $col3, $col4);
        }
        $response = 1;
    }
    if ($response === 0) {
        print("Произошла ошибка при выполнении запроса");
    }
}
$link->close();