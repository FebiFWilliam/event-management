document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let navBar = document.getElementById("navBar");

    // Dummy authentication check (Replace with actual backend authentication)
    if (email === "admin@example.com" && password === "password123") {
        navBar.classList.remove("hidden"); // Show the navbar with tabs
        document.querySelector(".login-container").style.display = "none"; // Hide login form
    } else {
        alert("Invalid login credentials! Try again.");
    }
});

// Show/Hide Password Toggle
document.getElementById("showPassword").addEventListener("change", function() {
    let passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
});
