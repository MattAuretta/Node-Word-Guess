// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

var letter = require("./letter.js")

// var test = new letter("a");
// test.checkGuess("b")
// console.log(test.correct);
// test.checkGuess("a");
// console.log(test.correct)

wordConstructor = function (arr) {
    // An array of new Letter objects representing the letters of the underlying word
    this.arr = arr,
        this.returnString = function () {
            // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
            console.log(arr)
            for (var i = 0; i < arr.length; i++) {
                var eachLetter = arr[i];
                var displayLetters = new letter(eachLetter)
                console.log(displayLetters.returnLetter());
            }
        },
        this.takeLetter = function (x) {
            // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
            for (var i = 0; i < arr.length; i++) {
                var eachLetter = arr[i];
                var testLetter = new letter(eachLetter)
                testLetter.checkGuess(x);
            }
        }
}

module.exports = wordConstructor