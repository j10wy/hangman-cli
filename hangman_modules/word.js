var words = require("./words");

function Word() {

	this.word = randomWord(words);
	this.displayWord = displayWord;

}

// FUNCTIONS

function displayWord() {
	var length = this.word.length;
	var dashes = "";
	(function __(numberOfDashes) {
		for (var _ = 0; _ < length; _++) {
			dashes += "_";
		}
	}(length));
	console.log(dashes);
}

function randomWord(arr) {
	var numberOfLetters = arr.length - 1;
	var min = Math.ceil(0);
	var max = Math.floor(numberOfLetters);
	return arr[Math.floor(Math.random() * (max - min + 1)) + min];
}

module.exports = Word;