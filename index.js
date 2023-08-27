var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdice = "dice" + randomNumber1 + ".png";
var randomdice1 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomdice);
document.querySelectorAll("img")[1].setAttribute("src", randomdice1);
if (randomNumber1 > randomNumber2) {
    document.getElementById("yo").innerHTML = "Player 1 Wins"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw..!!";
}
