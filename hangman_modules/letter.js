function Letter(letter) {
	this.letter = letter;
	this.log = () => {
		console.log("Letter:", this.letter);
		return true;
	};
}

module.exports = Letter;