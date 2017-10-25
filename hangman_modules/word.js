// Require the array of words
var words = require("./words");

// Basic setup for Word constructor
function Word() {

	this.revealed = [];
	this.guesses = null;
	this.word = this.randomWord(words, this);
	this.wordCopy = "";

}

// Adding methods to the prototype

// Choose a random word and set Word.wordarray, Word.mask, Word.guesses
Word.prototype.randomWord = function randomWord(arr, self) {
	// Choose a random word
	var numberOfWords = arr.length - 1;
	var min = Math.ceil(0);
	var max = Math.floor(numberOfWords);
	var word = arr[Math.floor(Math.random() * (max - min + 1)) + min];

	// Set empty arrays that will be assigned to Word.wordarray and Word.mask
	var wordArray = [];
	var maskArray = [];

	// Update the arrays
	for (var l = 0; l < word.length; l++) {
		wordArray.push(`${word[l]}`);
		maskArray.push(" _ ");
	}

	// Update the Word constuctor
	self.wordarray = wordArray;
	self.mask = maskArray;
	self.guesses = parseInt(word.length);

	// Finally, return the word to Word.word
	return word;
}

module.exports = Word;