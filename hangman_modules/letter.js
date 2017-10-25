function Letter(letter, word) {
	// Store the word passed in index.js
	this.word = word;
	// Store the word passed from Inquirer in index.js
	this.letter = letter;
	// Log function to help with debugging
	this.log = log;
	// Method to determine if the letter is in the word array-like object;
	this.inArray = inArray;
	// The validate method will determine if the user can proceed to Inquirer's then call
	this.validate = validate;
}

function log(stuffToLog) {
	console.log(`\n****** START LOGGER ******`);
	console.log(stuffToLog);
	console.log(`\n****** END LOGGER ******\n`);
	// Return 'this' so I can chain methods in index.js
	// Example: return new Letter(value, word).log("Logging stuff...").validate();
	return this;
};

// Each object created by the Word contructor has the word in string and array format
// The inArray method takes the entire Word object searches and updates Word.wordarray and Word.mask
function inArray(word, letter) {
	var letterUppercase = letter.toUpperCase();
	word.wordarray.find((item, index) => {
		if (item === letterUppercase) {
			word.mask[index] = letterUppercase;
		}
	});

	word.wordCopy = "";
	word.mask.map(item=>{
		word.wordCopy += item;
	});

	console.log(`\n\n${word.wordCopy}\n\n`);
	if (word.word === word.wordCopy) {
		return true;
	} else {
		return false;
	}
}

function validate() {
	// Create a regex to test if entry is a digit
	var regexNum = /\d/;

	if (regexNum.exec(this.letter)) {
		// Test for digits first. 
		this.log("\n\nNumbers not allowed!\n");
		return false;
	} else if (this.letter.length > 1 || this.letter.length === 0) {
		// if value is not a digit, text if the length is lt 0 or gt 1
		this.log("\n\nEnter a single letter\n");
		return false;
	} else {
		// Letter seems to be a valid entry
		// this.log("\nValid entry...\n");
		return this.inArray(this.word, this.letter);
	}
}

module.exports = Letter;