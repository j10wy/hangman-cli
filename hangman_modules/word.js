var words = require("./words");

function Word() {

	this.revealed = [];
	// @todo End game if 0
	// @body Go to the end game prompt when guesses reach 0
	this.guesses = null;
	this.word = randomWord(words, this);
	this.wordCopy = "";

}

// FUNCTIONS

function randomWord(arr, self) {
	var numberOfWords = arr.length - 1;
	var min = Math.ceil(0);
	var max = Math.floor(numberOfWords);
	var word = arr[Math.floor(Math.random() * (max - min + 1)) + min];
	var wordArray = [];
	var maskArray = [];

	for (var l = 0; l < word.length; l++) {
		wordArray.push(word[l]);
		maskArray.push("_");
	}

	self.wordarray = wordArray;
	self.mask = maskArray;
	self.guesses = parseInt(word.length);

	return word;
}

module.exports = Word;