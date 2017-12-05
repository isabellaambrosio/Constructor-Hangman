var inquirer = require('inquirer');
var Letter = require("./Letter.js");
var word = require("./Word.js");


var currentWord;
// var currentLetter;
var wordArr = ["function", "callback", "string", "constructor", "object", "array", "terminal", "argument", "parameter"];
var guessesLeft;

gameStart();

//guessing letters and comparing results
function guessLetter() {
    if (guessesLeft > 0) {
        inquirer.prompt([{
            "message": "Guess a letter:",
            "name": "letter"

        }]).then(function(userInput) {
            currentWord.exposeLetter(userInput.letter);
            // currentLetter.exposeLetter(userInput.letter);
            if (currentWord.isExposed()) {
                // user won
                // confirm next game
                console.log("");
                console.log("YOU WIN!!!");
                console.log("");
                gameStart();
            }

            //TODO create an if else statemt that does not change guessesLeft when the user input is correct
            // else if (!currentWord.isExposed() && !currentLetter.isExposed()) {
            //     guessesLeft--;
            //     console.log("");
            //     console.log(guessesLeft);
            //     console.log("");
            //     guessLetter();
            // }
            // else if (!currentWord.isExposed() && currentLetter.isExposed()) {
            //     guessLetter();
            // }

            else {
                guessesLeft--;
                console.log("");
                console.log(guessesLeft);
                console.log("");
                guessLetter();
            }
        });
    }
    else {
        gameStart();
    }
}

//starting a new game
function gameStart() {
    inquirer.prompt([{
        type: "list",
        name: "playGame",
        message: "Would you like to play a new game of hangman?",
        choices: ["Yes", "No"]
    }]).then(function(user) {
        if (user.playGame === "Yes") {
            console.log("")
            console.log("Alright, lets get started!");
            console.log("The theme is words that you use on programing");
            console.log("");
            newGame();
        }
        else {
            console.log("");
            console.log("Ok, maybe another time...");
            console.log("");
        }

    });
}

//reseting function
function newGame() {
    guessesLeft = 10;
    currentWord = new word(wordArr[Math.floor((Math.random() * wordArr.length))]);
    // currentLetter = currentWord;
    guessLetter();

}
