var playerName1 = prompt("Enter the name of first player:- ");
var playerName2 = prompt("Enter the name of Second player:- ");
var player1 = Math.random();
player1 = player1 * 6 + 1;
player1 = Math.floor(player1);
var randomDiceImage1 = "./images/dice" + player1 + ".png";
var player2 = Math.random();
player2 = player2 * 6 + 1;
player2 = Math.floor(player2);
var randomDiceImage2 = "./images/dice" + player2 + ".png";
console.log(player1 + " " + player2);
document.querySelectorAll("p")[0].innerHTML=playerName1;
document.querySelectorAll("p")[1].innerHTML=playerName2;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (player1 === player2) {
    document.querySelector(".title").textContent = "Draw!";
}
else if (player1 > player2) {
    document.querySelector(".title").textContent = "🚩"+playerName1+" Wins!";
}
else {
    document.querySelector(".title").textContent = "🚩"+playerName2+" Wins!";
}
