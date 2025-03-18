db.collection("users").orderBy("score", "desc").limit(10).get()
    .then((querySnapshot) => {
        const leaderboard = document.getElementById("leaderboard");
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const listItem = document.createElement("li");
            listItem.textContent = `${data.email} - ${data.score} pts`;
            leaderboard.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error("Error fetching leaderboard: ", error);
    });
