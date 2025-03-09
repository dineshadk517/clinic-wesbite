<?php
$servername = "localhost";
$username = "root"; // default XAMPP username
$password = ""; // default XAMPP password
$dbname = "clinic_db"; // your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
