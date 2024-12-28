document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Input values
    const fullName = document.getElementById("full-name").value.trim();
    const position = document.getElementById("position").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone-number").value.trim();
    const country = document.getElementById("country").value.trim();
    const city = document.getElementById("city").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validation
    if (!fullName) return alert("Full Name is required.");
    if (!position) return alert("Position is required.");
    if (!email.match(/\S+@\S+\.\S+/)) return alert("Enter a valid email.");
    if (!phone.match(/^\d{10}$/))
      return alert("Enter a valid 10-digit phone number.");
    if (!country) return alert("Country is required.");
    if (!city) return alert("City is required.");
    if (password.length < 6)
      return alert("Password must be at least 6 characters.");
    if (password !== confirmPassword) return alert("Passwords do not match.");
    if (!gender) return alert("Please select your gender.");

    // Success message
    alert("Registration successful!");
  });
