let Word = require("./hangman_modules/word");
let Letter = require("./hangman_modules/letter");
var inquirer = require('inquirer');

function startGame() {
	inquirer.prompt([{
		type: 'input',
		name: 'letter',
		message: "Enter letter",
		validate: function (value) {
			return new Letter(value).log();
		}
	}]).then(function (answers) {
		console.log("ANSWER:",answers);
		startGame();
	});
}

startGame();
