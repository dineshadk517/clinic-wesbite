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