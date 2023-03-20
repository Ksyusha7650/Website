$("#register").click(function() {
    var login = $("[id='email_input']").val();
    var password = $("[id='password_input']").val();
    if (login==="")
        $("[id='email_input']").borderColor = "red"
    if (login==="a@a" && password==="123")
    alert("Вход успешен");
    else alert("Ошибка! Повтори ввод!")
});