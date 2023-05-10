<?php

  $link = mysqli_connect("localhost",
        "root",
        "04042002Mm!",
        "web_site_db");

$id =  $_POST['id_acc'];
$name  = $_POST['name_acc'];
$sex  = $_POST['sex_acc'];
$date  = $_POST['date_birth_acc'];
$country  = $_POST['country_acc'];
$city  = $_POST['city_acc'];
$image = $_POST['image_acc'];
$response = 0;

    if ($link === false){
        print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $sql = "update account_description set name_acc = ?, sex_acc = ?, date_birth_acc = ?, country_acc = ?,
        city_acc = ?, image_acc = ? where id_acc = ?";
        $stmt = $link->prepare($sql);
        $stmt->bind_param('ssssssi', $name, $sex, $date, $country, $city, $image, $id);
        if($stmt->execute()){
            $response = 1;
            print($name);
        }
        if ($response === 0) {
            print("Произошла ошибка при выполнении запроса");
        }
        else{
            print("Соединение установлено успешно");
        }
}
    $link->close();