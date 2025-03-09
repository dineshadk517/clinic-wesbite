document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        // Simulate login behavior (real-world, you would send this data to the backend)
        console.log("Username: " + username + ", Password: " + password);
        // Redirect to dashboard or other page after successful login
        window.location.href = '/dashboard';
    } else {
        alert("Please fill in both username and password fields.");
    }
});
