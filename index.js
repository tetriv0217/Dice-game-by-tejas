var player1 = Math.random();
player1 = player1 * 6 + 1;
player1 = Math.floor(player1);
var randomDiceImage1 = "./images/dice" + player1 + ".png";
var player2 = Math.random();
player2 = player2 * 6 + 1;
player2 = Math.floor(player2);
var randomDiceImage2 = "./images/dice" + player2 + ".png";
console.log(player1 + " " + player2);
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (player1 === player2) {
    document.querySelector(".title").textContent = "Draw!";
}
else if (player1 > player2) {
    document.querySelector(".title").textContent = "🚩Player 1 Wins!";
}
else {
    document.querySelector(".title").textContent = "Player 2 Wins!🚩";
}
