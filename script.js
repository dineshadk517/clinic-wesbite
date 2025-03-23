<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="login-section">
        <h2>Login</h2>
        <form id="loginForm">
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p id="errorMessage" style="color: red; display: none;">Invalid username or password.</p>
    </div>

    <footer>
        <p>&copy; 2025 Clinic. All rights reserved.</p>
    </footer>

    <script>
        const credentials = {
            nurse: { username: "nurse1", password: "1234" },
            doctor: { username: "doctor1", password: "1234" },
            user: { username: "user1", password: "1234" }
        };

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const role = document.querySelector('input[name="role"]:checked')?.value;

            if (!role) {
                alert("Please select a role.");
                return;
            }

            // Check if credentials are valid
            if (username === credentials[role].username && password === credentials[role].password) {
                alert(`Login successful as ${role}!`);
                // Redirect to respective dashboard
                switch (role) {
                    case "nurse":
                        window.location.href = "nurse-dashboard.html";
                        break;
                    case "doctor":
                        window.location.href = "doctor-dashboard.html";
                        break;
                    case "user":
                        window.location.href = "user-dashboard.html";
                        break;
                }
            } else {
                document.getElementById('errorMessage').style.display = 'block';
            }
        });
    </script>

</body>
</html>
