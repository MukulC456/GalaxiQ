auth.onAuthStateChanged(user => {
    if (user) {
        db.collection("users").doc(user.uid).get()
            .then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    document.getElementById("welcome-message").innerText = `Welcome, ${userData.name}!`;
                }
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    } else {
        window.location.href = "auth.html";  // Redirect to login page if not logged in
    }
});
