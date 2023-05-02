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
$register_date = date('Y-m-d H:i:s');

    if ($link === false){
        print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $sql = "insert into account_description (id_acc, name_acc, sex_acc, date_birth_acc, country_acc, city_acc, register_date, image_acc)
        values (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $link->prepare($sql);
        $stmt->bind_param('isssssss', $id, $name, $sex, $date, $country, $city, $register_date, $image);
        if($stmt->execute()){
            $response = 1;
        }
        if ($response === 0) {
            print ($register_date);
            print("Произошла ошибка при выполнении запроса");
        }
        else{
            print("Соединение установлено успешно");
        }
}
    $link->close();