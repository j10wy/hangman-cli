function Letter(letter, word) {
	this.word = word;
	this.letter = letter;
	this.log = () => {
		console.log(">>> LETTER.JS | new Letter():", this);
		return true;
	};
	this.validate = () => {
		var regexNum = /\d/;
		console.log(">>>> WORD PASSED TO LETTER:", this.word);
		if (regexNum.exec(this.letter)) {
			console.log("\n\nNumbers not allowed!\n");
			return false;
		} else if (this.letter.length > 1 || this.letter.length === 0) {
			console.log("\n\nEnter a single letter\n");
			return false;
		} else {
			console.log("Thanks!");
			return true;
		}
	}
}

module.exports = Letter;