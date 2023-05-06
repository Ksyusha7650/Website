<?php
// Get reference to uploaded image

/*$image_file = $_POST[$_FILES["files"]["id"]];*/

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
print($target_file);
// Image not defined, let's exit
if (!isset($image_file)) {
    die('No file uploaded.');
}

// Move the temp image file to the images/ directory
move_uploaded_file(
// Temp image location
    $image_file["tmp_name"],

    // New image location, __DIR__ is the location of the current PHP file
    __DIR__ . "/uploads/" . $image_file["name"]
);
print(__DIR__ . "/uploads/" . $image_file["name"]);