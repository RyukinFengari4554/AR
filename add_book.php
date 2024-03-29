<?php
// Database connection
require_once "includes/db.inc.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $title = $_POST['title'];
    $isbn_issn = $_POST['isbn_issn'];
    $call_num = $_POST['call_num'];
    $section = $_POST['section'];
    $description = $_POST['description'];
    $author = $_POST['author'];
    $year = $_POST['year'];
    $genre = $_POST['genre'];
    $availability = $_POST['availability'];

    // SQL query to insert data into the 'books' table
    $sql = "INSERT INTO ar_library.books (title, isbn_issn, call_num, section, description, author, year, genre, availability) 
            VALUES ('$title', '$isbn_issn', '$call_num', '$section', '$description', '$author', '$year', '$genre', '$availability')";

    // Execute the SQL query
    if ($mysqli->query($sql) === TRUE) {
        echo "Book added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $mysqli->error;
    }
} else {
    // Redirect to a different page if accessed directly
    header("Location: index.php");
    exit();
}
?>
