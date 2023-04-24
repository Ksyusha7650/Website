<?php

$link = mysqli_connect("localhost",
    "root",
    "04042002Mm!",
    "web_site_db");

$id = $_GET['id_acc'];
$response = 0;
$register_date = date('Y-m-d H:i:s');

if ($link === false) {
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
} else {
    $sql = "select name_acc, sex_acc, date_birth_acc, country_acc, city_acc, register_date
from account_description
where ID_acc = ?";
    $stmt = $link->prepare($sql);
    $stmt->bind_param('i', $id);
    if ($stmt->execute()) {
            // output data of each row
            $stmt->fetch();
            $row = $stmt->get_result();
            //print ("123");
            print ("name: ". $row["name_acc"]. " - sex: ". $row["sex_acc"]. " " . $row["country"] . "");
        print ("hdjdhj");
        $response = 1;
    }
    if ($response === 0) {
        print("Произошла ошибка при выполнении запроса");
    }
}
$link->close();
