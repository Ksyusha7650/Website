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
    var name_acc = $("#acc_name").val()
    var sex_acc = ( $("#is_female_acc").is(":checked")) ? "женский" : "мужской"
    var date_acc = $("#date_input").val()
    var country_acc = $("#country").val()
    var city_acc = $("#city").val()
    var image_path = send_photo_to_db()
    if (image_path === null) return
    //изменить данные с помощью пхп
    open("login.html", "_self")
})