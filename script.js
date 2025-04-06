let credentials = {
    nurse: { username: "nurse", password: "1234" },
    doctor: { username: "doctor", password: "1234" },
    user: { username: "dineshadk", password: "1234" },
    admin: { username: "admin", password: "1234" }
  };
  
  // DOM elements
  const loginSection = document.getElementById("loginSection");
  const resetSection = document.getElementById("resetSection");
  const forgotPasswordLink = document.getElementById("forgotPasswordLink");
  const backToLoginLink = document.getElementById("backToLoginLink");
  const loginForm = document.getElementById("loginForm");
  const resetForm = document.getElementById("resetForm");
  const loginMessage = document.getElementById("loginMessage");
  const resetMessage = document.getElementById("resetMessage");
  
  // Show/hide sections
  forgotPasswordLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginSection.style.display = "none";
    resetSection.style.display = "block";
  });
  
  backToLoginLink.addEventListener("click", function (e) {
    e.preventDefault();
    resetSection.style.display = "none";
    loginSection.style.display = "block";
  });
  
  // Handle login
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginMessage.style.display = "none";
  
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (!role) {
      showMessage(loginMessage, "Please select a role.", "error");
      return;
    }
  
    if (username === credentials[role]?.username && password === credentials[role]?.password) {
      showMessage(loginMessage, `Login successful as ${role}! Redirecting...`, "success");
      setTimeout(() => {
        window.location.href = `${role}-dashboard.html`;
      }, 1000);
    } else {
      showMessage(loginMessage, "Invalid username or password.", "error");
    }
  });
  
  // Handle password reset
  resetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    resetMessage.style.display = "none";
  
    const role = document.getElementById("resetRole").value;
    const username = document.getElementById("resetUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (!role) {
      showMessage(resetMessage, "Please select a role.", "error");
      return;
    }
  
    if (username !== credentials[role]?.username) {
      showMessage(resetMessage, "Username not found for selected role.", "error");
      return;
    }
  
    if (newPassword !== confirmPassword) {
      showMessage(resetMessage, "Passwords do not match.", "error");
      return;
    }
  
    if (newPassword.length < 4) {
      showMessage(resetMessage, "Password must be at least 4 characters.", "error");
      return;
    }
  
    credentials[role].password = newPassword;
    showMessage(resetMessage, "Password updated successfully! You can now login with your new password.", "success");
    resetForm.reset();
  
    setTimeout(() => {
      resetSection.style.display = "none";
      loginSection.style.display = "block";
      loginMessage.style.display = "none";
    }, 3000);
  });
  
  // Show message helper
  function showMessage(element, text, type) {
    element.textContent = text;
    element.className = "message " + type;
    element.style.display = "block";
  }
  