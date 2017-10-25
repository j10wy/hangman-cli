/*
	@todo require Colors package
	@body Use require package to colorize the terminal output
*/

let Word = require("./hangman_modules/word");
let Letter = require("./hangman_modules/letter");
var inquirer = require('inquirer');

var word = null;

function startGame() {
	word = new Word;
	inquirer.prompt([{
		type: 'input',
		name: 'letter',
		message: "Enter a letter",
		validate: function (value) {
			return new Letter(value, word).validate();
		}
	}]).then(answers => {
		console.log("\n\nYou win!\n\n".toUpperCase());
	});
}

// @todo Create Inquirer prompt to play again
// function playAgain() {
// 	inquirer.prompt([{}]).then()
// }

startGame();