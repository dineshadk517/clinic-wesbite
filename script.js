// Simple Login Simulation with Role-based Redirection

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Example users with roles
    const users = {
        "doctor": { username: "doctor1", password: "1234", role: "doctor" },
        "nurse": { username: "nurse1", password: "1234", role: "nurse" },
        "user": { username: "user1", password: "1234", role: "user" }
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match any user
    let foundUser = null;
    for (let key in users) {
        if (users[key].username === username && users[key].password === password) {
            foundUser = users[key];
            break;
        }
    }

    if (foundUser) {
        // Redirect based on role
        if (foundUser.role === "doctor") {
            window.location.href = "doctor_dashboard.html";
        } else if (foundUser.role === "nurse") {
            window.location.href = "nurse_dashboard.html";
        } else {
            window.location.href = "user_dashboard.html";
        }
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Debugging: Log the inputs
    console.log("Role:", role);
    console.log("Username:", username);
    console.log("Password:", password);

    // Check if role is selected
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
        // Show error message
        document.getElementById('errorMessage').style.display = 'block';
    }
});