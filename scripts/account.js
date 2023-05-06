$("#edit_acc").click(function () {
    open("edit_account.html", "_self")
})

$(window).on("load", function () {
    var id_acc = localStorage.getItem("id_account");
    var name_acc = $("#acc_name_title")
    var date_registration = $("#date_registration")
    var sex_acc = $("#acc_sex")
    var date_acc = $("#acc_date")
    var country_acc = $("#acc_country")
    var city_acc = $("#acc_city")
    var image_acc = $("#acc_img")
    getDataFromDB(id_acc, name_acc, date_registration, sex_acc, date_acc, country_acc, city_acc, image_acc);
})


function getDataFromDB($id, $name, $date_r, $sex, $date_a, $country, $city, $image) {
    $.ajax({
        type: "GET",
        url: "../php/get_data_acc.php",
        data: {id_acc: $id},
    })
        .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
                var array = data.split(',')
                $name.text(array[0])
                $sex.text(array[1])
                $date_a.text(array[2])
                $country.text(array[3])
                $city.text(array[4])
                $date_r.text(array[5])
                $image.attr("src", array[6])
            }
        });
}

$("#acc_exit").click(function () {
    localStorage.clear()
    open("login.html", "_self")
})
