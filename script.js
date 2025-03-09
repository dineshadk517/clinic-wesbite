// Example users with roles
const users = {
    "doctor": { username: "doctor1", password: "1234", role: "doctor" },
    "nurse": { username: "nurse1", password: "1234", role: "nurse" },
    "user": { username: "user1", password: "1234", role: "user" }
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check user credentials
    let userFound = false;
    for (const role in users) {
        if (users[role].username === username && users[role].password === password) {
            alert("Login successful as " + users[role].role);
            window.location.href = "dashboard.html"; // Redirect to dashboard page
            userFound = true;
            break;
        }
    }

    if (!userFound) {
        document.getElementById("message").textContent = "Invalid username or password!";
    }
});

// Forgot Password and Create New Account functionality
document.getElementById("forgot-password").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Password recovery functionality is not implemented yet.");
});

document.getElementById("create-account").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Account creation functionality is not implemented yet.");
});
