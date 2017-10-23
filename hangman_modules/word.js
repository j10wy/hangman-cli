var words = require("./words");

function Word() {
	
	this.word = randomWord(words);
	this.log = () => {
		console.log(this.word);
	}

}

function randomWord (arr) {
    var numberOfLetters = arr.length - 1;
    var min = Math.ceil(0);
    var max = Math.floor(numberOfLetters);
    return arr[Math.floor(Math.random() * (max - min + 1)) + min];
}

module.exports = Word;