// Toggle between Login & Signup forms
function toggleForm() {
    const forms = document.querySelectorAll('.auth-container');
    forms.forEach(form => form.style.display = (form.style.display === 'none') ? 'block' : 'none');
}

// Signup function
function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const name = prompt("Enter your full name:");

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            
            // Store user data in Firestore
            return db.collection("users").doc(user.uid).set({
                name: name,
                email: user.email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("Signup successful! Redirecting...");
            window.location.href = "dashboard.html";  // Redirect after signup
        })
        .catch(error => {
            alert(error.message);
        });
}


// Login function
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login successful! Redirecting...");
            window.location.href = "index.html"; // Redirect after login
        })
        .catch(error => {
            alert(error.message);
        });
}
