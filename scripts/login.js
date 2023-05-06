$("#enter").click(function () {
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
    var res = $("#result");
    if (validateEmail(login.val())) {
        get_id_acc(login.val(), password.val())
            setTimeout(function () {
                if (result) {
                    res.css("color", "black")
                    res.html("Входим...")
                    setTimeout(function () {
                        open("account.html", "_self")
                    }, 2000)
                }
                else res.html("Неправильный логин или пароль!")
           }, 100);
    } else res.html("Почта некорректна!")
});

var result;

function get_id_acc($login, $password){
    $.ajax({
        type: "GET",
        url: "../php/get_id_acc.php",
        data: {login: $login, password:$password},
    })
        .done(function (data) {
                if (data === "Произошла ошибка при выполнении запроса") {
                    alert("Произошла ошибка!")
                    result = false
                }
                else {
                    if (data === "") {
                        result = false
                    }
                    else {
                        localStorage.setItem("id_account", data)
                        result = true
                    }
                }
            });
}
