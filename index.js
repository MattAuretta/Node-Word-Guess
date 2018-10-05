// The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

//Require word.js file
var word = require("./word.js")

var inquirer = require("inquirer")

//Array holding words to be guessed
var wordBank = ["gypsy", "kayak", "pixel", "zombie", "haiku", "banjo"];

var guesses = 10;

function runGame() {
    //Math random function to pick a random word
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    console.log("randomWord:");
    console.log(randomWord);
    //Split the random word into an array of each letter
    var randomWordArr = randomWord.split("");
    console.log("randomWordArr:")
    console.log(randomWordArr)
    //Plug random word into word.js constructor
    var gameWord = new word(randomWordArr);
    //Start inquirer prompt
    inquirer.prompt([{
        type: "input",
        message: "Guess a Letter!",
        name: "letter",
    }, ]).then(function (input) {
        gameWord.takeLetter(input.letter);
        // console.log(gameWord.returnString());
        gameWord.returnString();
    })
}

runGame();