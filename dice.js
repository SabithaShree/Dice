var player1 = Math.floor(Math.random()*6 + 1);

var player2 = Math.floor(Math.random()*6 + 1);

document.getElementById("player-1").setAttribute("src", "images/dice" + player1 + ".png");

document.getElementById("player-2").setAttribute("src", "images/dice" + player2 + ".png");

var win = (player1 > player2) ? 1 : (player1 < player2) ? 2 : 0;

if(win != 0)
{
    document.querySelector("h1").innerText = "Player " + win +" Wins !";
}
else
{
  document.querySelector("h1").innerText = "Match draw !";
}
