document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username && password) {
        // Simulate an API call for authentication (in real case, use AJAX or fetch)
        console.log('Logging in with:', username, password);
    } else {
        alert('Please fill out both fields.');
    }
});
