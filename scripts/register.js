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
        url: '../php/save_to_db.php',
        data: {"name_acc": $name, "login_acc": $login, "password_acc": $password},
        dataType : 'json'
    })
        .done(function (data) {
            var response = JSON.parse(data)

            if (response === 1) {
                alert("Зарегистрирован!")
            } else {
                alert("Произошла ошибка!");
            }
        });
    }
