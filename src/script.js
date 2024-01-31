document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const createAccountBtn = document.querySelector('.btn-create-account');
    let password_valid;

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Add an input event listener to both password & confirm-password fields
    password.addEventListener('input', function() {
        // Check if the passwords are filled in and match
        if (password.value && confirmPassword.value) {
            if (password.value === confirmPassword.value) {
                // Passwords match, provide feedback to the user
                password_valid = true;
                document.getElementById('password').classList.remove('error');
                document.getElementById('confirm-password').classList.remove('error');
                document.getElementById("no-match").style.display = 'none';
            } else {
                // Passwords do not match, provide feedback to the user
                password_valid = false;
                document.getElementById('password').classList.add('error');
                document.getElementById('confirm-password').classList.add('error');
                document.getElementById("no-match").style.display = 'inline';
            }
        }
    });

    confirmPassword.addEventListener('input', function() {
        // Check if the passwords are filled in and match
        if (password.value && confirmPassword.value) {
            if (password.value === confirmPassword.value) {
                // Passwords match, provide feedback to the user
                password_valid = true;
                document.getElementById('password').classList.remove('error');
                document.getElementById('confirm-password').classList.remove('error');
                document.getElementById("no-match").style.display = 'none';
            } else {
                // Passwords do not match, provide feedback to the user
                password_valid = false;
                document.getElementById('password').classList.add('error');
                document.getElementById('confirm-password').classList.add('error');
                document.getElementById("no-match").style.display = 'inline';
            }
        }
    });

    createAccountBtn.addEventListener('click', function() {
        // Perform form validation here if needed

        // Check if the form & password is valid before submitting & redirecting
        if (form.checkValidity() && password_valid) {
            // Retrieve form data
            const formData = new FormData(form);
            
            // Convert form data to JSON
            const jsonData = JSON.stringify(Object.fromEntries(formData));
            
            // log formData to console
            console.log(jsonData);
            
            // redirect to registration successful page
            window.location.replace("./submit_registration.html");

            // Add code here to: Send data to the server & handle response/errors
       }
    });
  });
