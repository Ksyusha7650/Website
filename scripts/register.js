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
        register(login.val(), password.val())
    }
    else alert("Некорректные данные, повторите ввод!")
});

function validateEmail($email) {
    var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
var id_new_acc = 0;
function register($login, $password) {
    $.ajax({
        type: "POST",
        url: "../php/save_to_db.php",
        data: {login_acc: $login, password_acc: $password},
    })
        .done(function (data) {
                if (data === "Произошла ошибка при выполнении запроса") {
                    alert("Произошла ошибка!");
                } else {
                    localStorage.setItem("id_account", data)
                    open("register.html", "_self")
                }
            });
        }

    $("#save").click( function () {
        var name_acc = $("#acc_name").val()
        var sex_acc = ( $("#is_female_acc").is(":checked")) ? "ж" : "м"
        var date_acc = $("#date_input").val()
        var country_acc = $("#country").val()
        var city_acc = $("#city").val()
        //alert(name_acc +"\n" + sex_acc + "\n" + date_acc + "\n" + country_acc + "\n" + city_acc)
        send_data_to_db(name_acc, sex_acc, date_acc, country_acc, city_acc)
    })

    $( "#date_input" ).datepicker({
        dateFormat: "yyyy-mm-dd"
    });

    function send_data_to_db($name, $sex, $date, $country, $city) {
        $.ajax({
            type: "POST",
            url: "../php/save_to_db_description.php",
            data: {id_acc: localStorage.getItem("id_account"), name_acc: $name, sex_acc: $sex, date_birth_acc: $date,
                country_acc: $country, city_acc: $city},
        })
            .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
                open("account.html", "_self")
            }
        });
}