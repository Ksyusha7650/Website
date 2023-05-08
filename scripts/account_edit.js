/*function SetPhoto() {
    /!*setTimeout(function (){}, 1000000)
        var img = $(".acc_img")
        var selectedFile = $('#files').get(0).files[0]
        var path = "../php/uploads/" + selectedFile.name
        img.attr('src', path)*!/

    var file = $("#files").files;
    if (file.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            $("#acc_img").attr("src", event.target.result);
        };
        fileReader.readAsDataURL(file[0]);
    }
}*/
function SetPhoto() {
    var file = document.getElementById("files").files
    if (file.length > 0) {
        var fileReader = new FileReader()
        fileReader.onload = function (event) {
            $("#acc_img").attr("src", event.target.result)
        }
        fileReader.readAsDataURL(file[0])
    }
}


/* Get from elements values */
$("#choose_photo").on("submit", function(){
    $.ajax({
        url: '../php/upload.php',
        method: 'post',
        dataType: 'html',
        data: $(this).serialize(),
        success: SetPhoto()
    });
});

$('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});

function send_photo_to_db() {
    $.ajax({
        url: '../php/upload.php',
        method: 'post',
        dataType: 'html',
        data: $(this).serialize(),})
        .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
                return data;
            }
    });
}

$("#save").click( function () {
    uploadFile()
    setTimeout(function () {
        if (file_name === undefined) file_name = $("#image_acc").attr("src")
        var name_acc = $("#acc_name_title").val()
        var sex_acc = ( $("#is_female_acc").is(":checked")) ? "ж" : "м"
        var date_acc = $("#acc_date").val()
        var country_acc = $("#acc_country").val()
        var city_acc = $("#acc_city").val()
        send_data_to_db(name_acc, sex_acc, date_acc, country_acc, city_acc, file_name)
    }, 500)
})

function send_data_to_db($name, $sex, $date, $country, $city, $image) {
    $.ajax({
        type: "POST",
        url: "../php/update_acc_description.php",
        data: {id_acc: localStorage.getItem("id_account"), name_acc: $name, sex_acc: $sex, date_birth_acc: $date,
            country_acc: $country, city_acc: $city, image_acc: $image},
    })
        .done(function (data) {
            if (data === "Произошла ошибка при выполнении запроса") {
                alert("Произошла ошибка!");
            } else {
                open("account.html", "_self")
            }
        });
}
var file_name;
function uploadFile(){
    var input = document.getElementById("files");
    let file = input.files[0];
    if(file !== undefined){
        formData= new FormData();
        if(!!file.type.match(/image.*/)){
            formData.append("image", file);
            $.ajax({
                url: "../php/upload2.php",
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function(){
                    file_name = "../uploads/" + file.name
                }
            });
        }else{
            alert('Not a valid image!');
        }
    }
}

$(window).on("load", function () {
    var id_acc = localStorage.getItem("id_account");
    var name_acc = $("#acc_name_title")
    var date_registration = $("#date_registration")
    var sex_m = $("#is_male_acc")
    var sex_w = $("#is_female_acc")
    var date_acc = $("#acc_date")
    var country_acc = $("#acc_country")
    var city_acc = $("#acc_city")
    var image_acc = $("#acc_img")
    getDataFromDB(id_acc, name_acc, date_registration, sex_m, sex_w, date_acc, country_acc, city_acc, image_acc);
})


function getDataFromDB($id, $name, $date_r, $sex_m, $sex_w, $date_a, $country, $city, $image) {
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
                $name.attr('value', array[0])
                if (array[1] === "ж")
                    $sex_w.attr("checked", true)
                else
                    $sex_m.attr("checked", true)
                $date_a.attr('value',array[2])
                $country.attr('value',array[3])
                $city.attr('value',array[4])
                $date_r.text(array[5])
                $image.attr("src", array[6])
            }
        });
}