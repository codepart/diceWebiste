var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var newImage1 = "images/dice" + randomNum1 + ".png";
var newImage2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".dice .img1").src = newImage1;
document.querySelector(".dice .img2").src = newImage2;

if (randomNum1 > randomNum2) {
  document.querySelector("h1").textContent = "🧡 Player 1 Wins!";
}
else if (randomNum1 < randomNum2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🧡";
} else {
  document.querySelector("h1").textContent = "Tie! Draw again!";
}
