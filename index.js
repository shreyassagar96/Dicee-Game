var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".jpeg";

var randomImageSource = "images/" + randomDiceImage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".jpeg";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

if (randomNumber1 > randomNumber2) {

    document.body.querySelector("h1").innerHTML = "Player 1 Wins"

}
else if (randomNumber2 > randomNumber1) {

    document.body.querySelector("h1").innerHTML = "Player 2 Wins"
}

else {

    document.body.querySelector("h1").innerHTML = "Draw!"
}