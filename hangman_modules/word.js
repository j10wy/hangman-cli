var words = require("./words");

function Word() {

	this.revealed = [];
	this.word = randomWord(words, this);

}

// FUNCTIONS

function updateMask() {
	// @todo update the mask when user enters Inquirer validation check
}

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

	return word;
}

module.exports = Word;