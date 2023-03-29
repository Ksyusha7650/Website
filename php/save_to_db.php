<?php

  $link = mysqli_connect("localhost",
        "root",
        "04042002Mm!",
        "web_site_db");


$name  = $_POST['name_acc'];
$login  = $_POST['login_acc'];
$password  = $_POST['password_acc'];
$response = 0;

    if ($link === false){
        print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $sql = "insert into accounts (name_acc, login_acc, password_acc)
        values (?, ?, ?)";
        $stmt   = $link->prepare($sql);
        $stmt->bind_param('sss', $name, $login, $password);
        if($stmt->execute()){
            $response = 1;
        }
        if ($response === 0) {
            print("Произошла ошибка при выполнении запроса");
        }
        else{
            print("Соединение установлено успешно");
        }
}
    $link->close();