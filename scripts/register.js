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
    var res = $("#result");
    if (validateEmail(login.val())) {
        if (!register(login.val(), password.val())) {
            res.html(`<p>Такой логин уже есть.</p>
<button id="reset_button" onclick="reset_password()">Сбросить пароль?</button>`)
        }
    } else res.html("Почта некорректна!")
});

function reset_password() {
    var login = $("[id='email_input']");
        $.ajax({
            type: "GET",
            url: "../php/get_id_acc_by_login.php",
            data: {login: login.val()},
        })
            .done(function (data) {
                if (data === "Произошла ошибка при выполнении запроса") {
                    alert("Произошла ошибка!")
                    return false
                }
                else {
                        localStorage.setItem("id_account", data)
                        open("login_reset.html", "_self")
                }
            });
}

function validateEmail($email) {
    var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
function register($login, $password) {
    $.ajax({
        type: "POST",
        url: "../php/save_to_db.php",
        data: {login_acc: $login, password_acc: $password},
    })
        .done(function (data) {
                if (data === "Произошла ошибка при выполнении запроса") {
                    alert("Произошла ошибка!");
                } else if (data.toString().includes("login уже есть") === true ) {
                    return false;
                }
                else{
                    localStorage.setItem("id_account", data)
                    open("register.html", "_self")
                    return true;
                }
            });
        }

    $("#save").click( function () {

        var image_acc = send_photo_to_db()
        if (image_acc === null) return
        var name_acc = $("#acc_name").val()
        var sex_acc = ( $("#is_female_acc").is(":checked")) ? "ж" : "м"
        var date_acc = $("#date_input").val()
        var country_acc = $("#country").val()
        var city_acc = $("#city").val()
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

function SetPhoto() {
    /*setTimeout(function (){}, 1000000)
        var img = $(".acc_img")
        var selectedFile = $('#files').get(0).files[0]
        var path = "../php/uploads/" + selectedFile.name
        img.attr('src', path)*/

    var file = $("#files").files;
    if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            $("#acc_img").attr("src", event.target.result);
        };
        fileReader.readAsDataURL(file[0]);
    }
}