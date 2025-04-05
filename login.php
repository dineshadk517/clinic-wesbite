<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Password</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      padding: 0;
      margin: 0;
    }
    .container {
      max-width: 400px;
      background: white;
      margin: 60px auto;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      padding: 12px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 12px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .success-message {
      color: green;
      margin-top: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Reset Password</h2>
    <form id="resetForm">
      <input type="email" id="email" placeholder="Enter your registered email" required />
      <button type="submit">Send Reset Link</button>
    </form>
    <p class="success-message" id="successMsg" style="display:none;">
      ✅ A reset link has been sent to your email!
    </p>
  </div>

  <script>
    document.getElementById("resetForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;

      // Simulate email being sent
      if (email) {
        document.getElementById("successMsg").style.display = "block";
        // In a real app, you’d make a POST request to the backend here.
      }
    });
  </script>
</body>
</html>
