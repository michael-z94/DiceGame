var randomNumber1 = Math.random(); // generating random number
randomNumber1 = randomNumber1 * 6; // generating random number 0 - 5
randomNumber1 = Math.ceil(randomNumber1); // generating random number 1-6

var randomDiceImamge = "dice" + randomNumber1 + ".png"; //it creates text array with the name of the dice image, all images are called like this: dice1.png ; dice2.png etc

var randomImageSource = "images/" + randomDiceImamge; //it creates text array with the adress of the dice image

var image1 = document.querySelectorAll("img")[0]; //it chooses first image (we have two images in the file, in array it is [0, 1]) All means it check in every "img" type of file in whole document

image1.setAttribute("src", randomImageSource); //setAttribute changes source of the image to randomly created source of the image

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.ceil(randomNumber2);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"; //here querySelector is without any All, which means we choose exact only one h1 we have in whole file. In order to change text using querySelector we use command innerHTML
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🏆 Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}