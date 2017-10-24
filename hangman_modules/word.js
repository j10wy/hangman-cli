var words = require("./words");

function Word() {

	this.word = randomWord(words);
	this.mask = [];
	this.udpateWordArray = udpateWordArray;
	this.wordarray = [];

}

// FUNCTIONS

function udpateWordArray() {
	var word = this.word;
	var numberOfLetters = word.length;
	var arr = [];
	
	for (var l = 0; l < numberOfLetters; l++) {
		arr.push(word[l]);
	}

	arr.find((item, index) => {
		if (item === "A") {
			console.log(item, index);
		}
	});
	// @todo should not return true/false/undefined
	return true;
}

function randomWord(arr) {
	var numberOfLetters = arr.length - 1;
	var min = Math.ceil(0);
	var max = Math.floor(numberOfLetters);
	return arr[Math.floor(Math.random() * (max - min + 1)) + min];
}

module.exports = Word;