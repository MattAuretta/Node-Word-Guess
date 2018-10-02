// The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

//Require word.js file
var word = require("./word.js")

//Array holding words to be guessed
var wordBank = ["gypsy", "kayak", "pixel", "zombie", "haiku", "banjo"];
//Math random function to pick a random word
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
console.log(randomWord);
//Split the random word into an array of each letter
var randomWordArr = randomWord.split("");
console.log(randomWordArr)
//Plug random word into word.js constructor
var game = new word(randomWordArr);
game.returnString();
game.takeLetter("a")