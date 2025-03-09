<?php
session_start();
if ($_SESSION['role'] != 'user') {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>User Dashboard</h1>
        <nav>
            <ul>
                <li><a href="login.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <section class="dashboard">
        <h2>Welcome, <?php echo $_SESSION['username']; ?>!</h2>
        <p>As a user, you can book appointments, view your medical history, and more.</p>
    </section>
</body>
</html>
