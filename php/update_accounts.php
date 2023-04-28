<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$id = $_POST['id_acc'];
$password = $_POST['password_acc'];
$response = 0;

if ($link === false) {
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
} else {
    $sql = "update accounts set password_acc = ? where ID_acc = ?";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('si', $password, $id);
    if ($stmt->execute()) {
        $response = 1;
    }
}
if ($response === 0) {
    print("Произошла ошибка при выполнении запроса");

}
$link->close();