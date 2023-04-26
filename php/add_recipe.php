<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$id  = $_POST['id_acc'];
$name  = $_POST['dish_name'];
$dish = $_POST['dish'];
$date = date('Y-m-d H:i:s');;
$theme = $_POST['theme'];

$response = 0;

if ($link === false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $sql = "insert into recipes (id_acc, recipe_name, date_created, theme)
        values (?, ?, ?, ?);";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('isss', $id,$name, $date, $theme);
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