// Hashing the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Storing the hashed password in the database
$query = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
$conn->query($query);
 