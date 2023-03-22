/*function SetPhoto() {
    alert("зашли")
    var selectedFile = $('#input_file').get(0).files[0]
    var img = $('#acc_img').get()
    var url = window.URL.createObjectURL(selectedFile)
    window.URL.revokeObjectURL(url)
    img.attr('src', url)
};*/

function SetPhoto() {
    var formData = new FormData();
    formData.append('file', $("#input_file")[0].files[0]);
}
