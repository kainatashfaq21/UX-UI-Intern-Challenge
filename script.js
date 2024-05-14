document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup-form").addEventListener("submit", function(event) {
        event.preventDefault();
        // Handle form submission logic here
    });

    document.getElementById("google-btn").addEventListener("click", function() {
        // Redirect or handle Google sign-in logic here
        alert("Continue with Google clicked");
    });

    document.getElementById("tiktok-btn").addEventListener("click", function() {
        // Redirect or handle TikTok sign-in logic here
        alert("Continue with TikTok clicked");
    });

    document.getElementById("facebook-btn").addEventListener("click", function() {
        // Redirect or handle Facebook sign-in logic here
        alert("Continue with Facebook clicked");
    });
});
