$("#edit_acc").click(function () {
    open("edit_account.html", "_self")
})

$(window).on("load", function () {
    id_acc = localStorage.getItem("id_acc");
    getDataFromDB(0);
    var name_acc = $("#acc_name").val()
    var sex_acc = ( $("#is_female_acc").is(":checked")) ? "ж" : "м"
    var date_acc = $("#date_input").val()
    var country_acc = $("#country").val()
    var city_acc = $("#city").val()
})

var name_acc, sex_acc, date_acc, city_acc, registration_acc, id_acc

function getDataFromDB($id) {
    $.ajax({
        type: "GET",
        url: "../php/get_data_acc.php",
        data: {id_acc: $id},
    })
        .done(function (data) {
            var response = data
            if (response === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
                id_new_acc = response
                open("register.html", "_self")
            }
        });
}
