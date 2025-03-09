// Example user data
const users = {
    doctor1: { username: "doctor1", password: "1234", role: "doctor" },
    nurse1: { username: "nurse1", password: "1234", role: "nurse" }
};

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");

    // Check if the user exists
    let userFound = false;
    for (const key in users) {
        if (users[key].username === username && users[key].password === password) {
            userFound = true;
            // Redirect to the dashboard based on user role
            window.location.href = "dashboard.html";
            break;
        }
    }

    // Show message if login failed
    if (!userFound) {
        messageDiv.textContent = "Invalid username or password!";
    }
});
