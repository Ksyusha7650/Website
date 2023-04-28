$("#reset_button").click(function () {
    var id = localStorage.getItem("id_account")
    var password = $("[id='password_input']");
    if (password.val() === "") {
        alert("Введи пароль");
        password.css("border-color", "red");
        return;
    }
    var res = $("#result");
    set_new_password_acc(id, password.val())
        res.html("Пароль обновлен! Заходим в аккаунт...")
        open("account.html", "_self")
       /* setTimeout(
            function () {
                open("account.html", "_self")
            },
            1500
        )*/
});

function set_new_password_acc($id, $password) {
    $.ajax({
        type: "POST",
        url: "../php/update_accounts.php",
        data: {id_acc: $id, password_acc: $password},
    })
        .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!")
                return false
            }
            return true
        });
}
