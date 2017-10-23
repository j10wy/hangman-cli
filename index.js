let Word = require("./hangman_modules/word");
let Letter = require("./hangman_modules/letter");
var inquirer = require('inquirer');

var word = new Word();

function startGame() {
	inquirer.prompt([{
		type: 'input',
		name: 'letter',
		message: "Enter letter",
		validate: function (value) {
			return new Letter(value, word).validate();
		}
	}]).then(function (answers) {
		console.log(">>> INDEX.JS | .then(answers):",answers);
		startGame();
	});
}

startGame();
