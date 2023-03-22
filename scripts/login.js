$("#enter").click(function() {
    var login = $("[id='email_input']");
    var password = $("[id='password_input']");
    if (login.val()===""){
        alert("Введи логин");
        login.css("border-color", "red");
        return;
    }
    if (password.val()===""){
        alert("Введи пароль");
        password.css("border-color", "red");
        return;
    }
    if (validateEmail(login.val())) {
        if (login.val() === "a@a.com" && password.val() === "123")
            alert("Вход успешен!");
        else alert("Такой аккаун не найден!")
    }
    else alert("Некорректные данные, повторите ввод!")
});

$("#register").click(function() {
    var login = $("[id='email_input']");
    var password = $("[id='password_input']");
    if (login.val()===""){
        alert("Введи логин");
        login.css("border-color", "red");
        return;
    }
    if (password.val()===""){
        alert("Введи пароль");
        password.css("border-color", "red");
        return;
    }
    if (validateEmail(login.val()))
        alert("Зарегистрирован!");
    else alert("Некорректные данные, повторите ввод!")
});

function validateEmail($email) {
    var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
