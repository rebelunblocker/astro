document.getElementById('search').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let games = document.querySelectorAll('.game-card');

    games.forEach(game => {
        let title = game.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});
