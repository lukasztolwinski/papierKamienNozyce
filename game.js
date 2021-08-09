const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}


const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = " 0 0 0 4px red";

}


function iaChoice() {
    const aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
    return aiHand;
}

function checkResult(player, ia) {
    if (player === ia) {
        //remis
        return "draw";
    } else if ((player === "papier" && ia === "kamień") || (player === "kamień" && ia === "nożyczki") || (player === "nożyczki" && ia === "papier")) {
        //wygrana
        return "win";
    } else {
        //przegrana
        return "loss";
    }

}

//publikacja wyniku
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś! :)";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrałeś! :(";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis :|";
        document.querySelector('[data-summary="who-win"]').style.color = "blue";
    }


}

function endGame() {
    document.querySelector(`[data-option='${game.playerHand}']`).style.boxShadow = "";
    game.playerHand = "";
}


//funkcja sterująca
function startGame() {
    if (!game.playerHand) return alert("Wybierz dłoń!");

    game.aiHand = iaChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}


hands.forEach(hand => hand.addEventListener("click", handSelection))

document.querySelector(".start").addEventListener("click", startGame)