var words = require("./words");

function Word() {

	this.revealed = [];
	this.guesses = null;
	this.word = this.randomWord(words, this);
	this.wordCopy = "";

}

// FUNCTIONS

Word.prototype.randomWord = function randomWord(arr, self) {
	var numberOfWords = arr.length - 1;
	var min = Math.ceil(0);
	var max = Math.floor(numberOfWords);
	var word = arr[Math.floor(Math.random() * (max - min + 1)) + min];
	var wordArray = [];
	var maskArray = [];

	for (var l = 0; l < word.length; l++) {
		wordArray.push(`${word[l]}`);
		maskArray.push(" _ ");
	}

	self.wordarray = wordArray;
	self.mask = maskArray;
	self.guesses = parseInt(word.length);

	return word;
}

module.exports = Word;