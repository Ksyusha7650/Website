function SetPhoto() {
    var selectedFile = $('#input_file').get(0).files[0]
    var img = $(".acc_img")
    var url = window.URL.createObjectURL(selectedFile)
    window.URL.revokeObjectURL(url)
    img.attr('src', url)
};
/*function SetPhoto() {
    var formData = new FormData();
    formData.append('file', $("#input_file")[0].files[0]);
}*/

$('input[type="checkbox"]').on('change', function() {
    $('input[type="checkbox"]').not(this).prop('checked', false);
});

$("#save").click( function () {
    var name_acc = $("#acc_name").val()
    var sex_acc = ( $("#is_female_acc").is(":checked")) ? "женский" : "мужской"
    var date_acc = $("#date_input").val()
    var country_acc = $("#country").val()
    var city_acc = $("#city").val()
    alert(name_acc +"\n" + sex_acc + "\n" + date_acc + "\n" + country_acc + "\n" + city_acc)
    open("login.html", "_self")
})