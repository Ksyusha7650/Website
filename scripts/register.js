$("#register").click(function () {
    var login = $("[id='email_input']");
    var password = $("[id='password_input']");
    if (login.val() === "") {
        alert("Введи логин");
        login.css("border-color", "red");
        return;
    }
    if (password.val() === "") {
        alert("Введи пароль");
        password.css("border-color", "red");
        return;
    }
    if (validateEmail(login.val())){
        var name = "Лева"
        register(name, login.val(), password.val())
    }
    else alert("Некорректные данные, повторите ввод!")
});

function validateEmail($email) {
    var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

function register($name, $login, $password) {
    $.ajax({
        type: "POST",
        url: "../php/save_to_db.php",
        data: {name_acc: $name, login_acc: $login, password_acc: $password},
    })
        .done(function (data) {
            var response = data

            if (response === "Соединение установлено успешно") {
                open("register.html", "_self")
            } else {
                alert("Произошла ошибка!");
            }
        });
}

    $("#save").click( function () {
        var name_acc = $("#acc_name").val()
        var sex_acc = ( $("#is_female_acc").is(":checked")) ? "женский" : "мужской"
        var date_acc = $("#date_input").val()
        var country_acc = $("#country").val()
        var city_acc = $("#city").val()
        alert(name_acc +"\n" + sex_acc + "\n" + date_acc + "\n" + country_acc + "\n" + city_acc)

        open("account.html", "_self")
    })
