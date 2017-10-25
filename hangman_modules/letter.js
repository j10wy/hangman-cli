function Letter(letter, word) {
	// Store the word passed in index.js
	this.word = word;
	// Store the word passed from Inquirer in index.js
	this.letter = letter;
}

// Log function to help with debugging
Letter.prototype.log = function log(stuffToLog) {
	console.log(`\n${stuffToLog}\n\n`);
	// Return 'this' so I can chain methods in index.js
	// Example: return new Letter(value, word).log("Logging stuff...").validate();
	return this;
};

// Method to determine if the letter is in the word array-like object.
// Each object created by the Word contructor has the word in string and array format
// The inArray method takes the entire Word object searches and updates Word.wordarray and Word.mask
Letter.prototype.inArray = function inArray(word, letter) {
	// The words in ./hangman_modules/words.js are all capitalized
	// Convert the letters to caps
	var letterUppercase = letter.toUpperCase();

	// Set true/false if the letter exists in the array
	var letterExists = word.wordarray.indexOf(letterUppercase) === -1 ? false : true;

	if (letterExists) {
		// Loop though Word.wordarray (each letter in an array) to update Word.mask
		word.wordarray.find((item, index) => {
			if (item === letterUppercase) {
				word.mask[index] = letterUppercase;
			}
		});
	} else {
		// Reduct a point/guess if letter does not exist in Word.wordarray
		word.guesses--;
	}

	// Reset Word.wordCopy each time the entry to Inquirer goes through validation.
	// If not reset each time, the string will continue to grow and throw off the game.
	word.wordCopy = "";
	word.mask.map(item => {
		word.wordCopy += item;
	});

	// Log the remaining guesses and the current state of Word.mask via Word.wordCopy
	console.log(`\nRemaining guesses: ${word.guesses}`);
	console.log(`\n${word.wordCopy}\n`);
	if (word.guesses === 0) {
		// End the game by returning true if/when Word.guesses reaches 0;
		this.log("\nBETTER LUCK NEXT TIME!\n");
		return true;
	} else if (word.word === word.wordCopy) {
		// Return true if/when Word.wordCopy string matches the random word assigned at the time the object was initialized 
		// This will cause Inquirer to exit the prompt and move on to the then statement
		this.log("WINNER!");
		return true;
	} else {
		// If false, continue to guess
		return false;
	}
}

// The validate method will determine if the user can proceed to Inquirer's then call
Letter.prototype.validate = function validateEntry() {
	// The letter (or other entry) from Inquirer prompt
	var entry = this.letter;
	// Create a regex to test if entry is an integer
	var isNum = /\d/.exec(entry);

	if (isNum) {
		// Test for digits first. 
		this.log("Numbers not allowed!");
		return false;
	} else if (entry.toUpperCase() === 'QUIT' || entry.toUpperCase() === 'EXIT') {
		this.log("QUITTER!");
		return true;
	} else if (this.letter.length > 1 || this.letter.length === 0) {
		// if value is not a digit, text if the length is lt 0 or gt 1
		this.log("Enter a single letter");
		return false;
	} else {
		// Letter seems to be a valid entry
		return this.inArray(this.word, this.letter);
	}
}

module.exports = Letter;