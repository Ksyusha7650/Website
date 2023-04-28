<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$login  = $_GET['login'];
$response = 0;

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $sql = "select ID_acc
from accounts
where login_acc = '" . $login . "'";
    $stmt = $link->prepare($sql);
    if(mysqli_stmt_execute($stmt)){
        mysqli_stmt_bind_result($stmt, $col1);
        while (mysqli_stmt_fetch($stmt)) {
            printf("%s\n", $col1);
        }
        $response = 1;
    }
    if ($response === 0) {
        print("Произошла ошибка при выполнении запроса");
    }
}
$link->close();