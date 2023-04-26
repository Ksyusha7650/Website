<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$name  = $_POST['ingredient_name'];
$amount = $_POST['amount'];
$response = 0;

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $sql = "insert into ingredients (ingredient_name, amount)
        values (?, ?);";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('si', $name, $amount);
    if($stmt->execute()){
        $result = $link->insert_id;
        print $result;
        $response = 1;
    }
    if ($response === 0) {
        print("Произошла ошибка при выполнении запроса");
    }
}
$link->close();