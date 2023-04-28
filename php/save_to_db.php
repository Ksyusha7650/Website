<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$login  = $_POST['login_acc'];
$password  = $_POST['password_acc'];
/*$login = "masha";
$password = "123";*/
$response = 0;

if ($link === false) {
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
} else {
    $sql = "select ID_acc
from accounts
where login_acc = '" . $login . "'";
    $stmt = $link->prepare($sql);
    if ($stmt->execute()) {
        $query = $stmt->get_result();
        if (mysqli_num_rows($query) == 0) {
            $sql = "insert into accounts (login_acc, password_acc)
        values (?, ?);";
            $stmt = $link->prepare($sql);
            $stmt->bind_param('ss', $login, $password);
            if ($stmt->execute()) {
                $result = $link->insert_id;
                print $result;
                $response = 1;
            }
        } else {
            printf("login уже есть");
            $response = 1;
        }
    }
}
if ($response === 0) {
    print("Произошла ошибка при выполнении запроса");
}
$link->close();