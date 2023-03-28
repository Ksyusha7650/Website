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
        alert("Зарегистрирован!")
        all()
    }
    else alert("Некорректные данные, повторите ввод!")
});

function validateEmail($email) {
    var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

function all()
{
    // Ajax config
    $.ajax({
        type: "POST",
        url: 'save_to_db.php',
        success: function (response) {//once the request successfully process to the server side it will return result here

            // Parse the json result
            response = JSON.parse(response);

            var html = "";
            // Check if there is available records
            if(response.length) {
                html += '<div class="list-group">';
                // Loop the parsed JSON
                $.each(response, function(key,value) {
                    // Our employee list template
                    html += '<a href="#" class="list-group-item list-group-item-action">';
                    html += "<p>" + value.first_name +' '+ value.last_name + " <span class='list-email'>(" + value.email + ")</span>" + "</p>";
                    html += "<p class='list-address'>" + value.address + "</p>";
                    html += '</a>';
                });
                html += '</div>';
            } else {
                html += '<div class="alert alert-warning">';
                html += 'No records found!';
                html += '</div>';
            }



            // Insert the HTML Template and display all employee records
            $("#employees-list").html(html);
        }
    });
}