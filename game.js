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

//funkcja sterująca
function startGame() {
    if (!game.playerHand) return alert("Wybierz dłoń!");

    game.aiHand = iaChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
}


hands.forEach(hand => hand.addEventListener("click", handSelection))

document.querySelector(".start").addEventListener("click", startGame)