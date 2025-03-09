<?php
session_start();
if ($_SESSION['role'] != 'doctor') {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Doctor Dashboard</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>Doctor Dashboard</h1>
        <nav>
            <ul>
                <li><a href="login.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <section class="dashboard">
        <h2>Welcome, Dr. <?php echo $_SESSION['username']; ?>!</h2>
        <p>As a doctor, you can view patient records, schedule appointments, and manage your daily tasks.</p>
    </section>
</body>
</html>
