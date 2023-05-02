<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$id = $_GET['id_acc'];
$response = 0;

if ($link === false) {
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
} else {
    $sql = "select name_acc, sex_acc, date_birth_acc, country_acc, city_acc, register_date, image_acc
from account_description
where ID_acc = ?";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('i', $id);
    if(mysqli_stmt_execute($stmt)){
        mysqli_stmt_bind_result($stmt, $col1, $col2, $col3, $col4, $col5, $col6, $col7);
        while (mysqli_stmt_fetch($stmt)) {
            printf("%s,%s,%s,%s,%s,%s,%s\n", $col1, $col2, $col3, $col4, $col5, $col6, $col7);
        }
        $response = 1;
    }
    if ($response === 0) {
        print("Произошла ошибка при выполнении запроса");
    }
}
$link->close();
