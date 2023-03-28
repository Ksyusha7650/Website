<?php
$link = "";
function connect()
{
    $link = mysqli_connect("localhost",
        "root",
        "04042002Mm!",
        "web_site_db");
}

function input_acc($name, $login, $password){
    connect();
    global $link;
    if ($link === false){
        print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
    }
    else {
        $sql = 'insert into accounts set name_acc = ' . $name . ',
                         login_acc=' . $login . ', password_acc=' . $password . '';
        $result = mysqli_query($link, $sql);
        if ($result === false) {
            print("Произошла ошибка при выполнении запроса");
        }
        else
            print("Соединение установлено успешно");
    }
}



