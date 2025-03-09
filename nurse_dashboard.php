<?php
session_start();
if ($_SESSION['role'] != 'nurse') {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nurse Dashboard</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>Nurse Dashboard</h1>
        <nav>
            <ul>
                <li><a href="login.php">Logout</a></li>
            </ul>
        </nav>
    </header>
    <section class="dashboard">
        <h2>Welcome, Nurse <?php echo $_SESSION['username']; ?>!</h2>
        <p>As a nurse, you can manage patient care, monitor vital signs, and assist in the treatment process.</p>
    </section>
</body>
</html>
