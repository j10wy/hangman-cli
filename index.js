let Word = require("./hangman_modules/word");
let Letter = require("./hangman_modules/letter");
var inquirer = require('inquirer');

var word = new Word();

function startGame() {
	inquirer.prompt([{
		type: 'input',
		name: 'letter',
		message: "Enter a letter",
		validate: function (value) {
			return new Letter(value, word).log("Something").validate();
		}
	}]).then(function (answers) {
		console.log(">>> INDEX.JS | .then(answers):",answers);
		startGame();
	});
}

startGame();
