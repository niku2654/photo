// Define the correct password
const correctPassword = "Vishakha"; // Change this to your desired password

// Function to validate the entered password
function validatePassword() {
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Check if the password is correct
    if (passwordInput === correctPassword) {
        // Redirect to the album (index.html) after successful password validation
        window.location.href = "photo.html"; // Redirect to index.html
        return false; // Prevent form submission (default behavior)
    } else {
        // Show an error message if the password is incorrect
        errorMessage.textContent = "Incorrect password. Please try again.";
        return false;
    }
}
