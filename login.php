<?php
// Include the database connection
include('includes/db_connection.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query to check if user exists and validate credentials
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($conn, $query);
    
    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        session_start();
        $_SESSION['username'] = $user['username'];
        $_SESSION['role'] = $user['role'];

        if ($user['role'] == 'user') {
            header('Location: user_dashboard.php');
        } elseif ($user['role'] == 'doctor') {
            header('Location: doctor_dashboard.php');
        } elseif ($user['role'] == 'nurse') {
            header('Location: nurse_dashboard.php');
        }
    } else {
        $error = "Invalid credentials!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>Clinic Login</h1>
    </header>
    <section class="login-form">
        <form action="login.php" method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
            <?php if (isset($error)) { echo "<p class='error'>$error</p>"; } ?>
        </form>
    </section>
</body>
</html>
