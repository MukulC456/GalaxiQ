function submitQuiz(score) {
    const user = auth.currentUser;
    if (user) {
        db.collection("users").doc(user.uid).update({
            score: firebase.firestore.FieldValue.increment(score)
        }).then(() => {
            alert("Quiz score updated!");
        }).catch((error) => {
            console.error("Error updating score: ", error);
        });
    } else {
        alert("You need to log in first.");
    }
}
