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
        if (login.val() === "masha@a.com" && password.val() === "123") {
            res.css("color", "black")
            res.html("Входим...")
            setTimeout(function () {
                open("account.html", "_self")
            }, 2000);
        } else res.html("Логин или пароль некорректны.")
    } else res.html("Почта некорректна.")
});
