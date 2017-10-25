/*
	@todo require Colors package
	@body Use require package to colorize the terminal output
*/

const Word = require("./hangman_modules/word");
const Letter = require("./hangman_modules/letter");

var inquirer = require('inquirer');
var word = null;

function startGame() {
	word = new Word;
	console.log(word);
	inquirer.prompt([{
		type: 'input',
		name: 'letter',
		message: "Guess a letter",
		validate: function (value) {
			return new Letter(value, word).validate();
		}
	}]).then(() => {
		playAgain();
	});
}

function playAgain() {
	inquirer.prompt([{
		type:'list',
		name: 'playagain',
		message:'Want to play again?',
		choices: ['Lets do it!', 'Eh... I quit!'],
	}]).then(answers =>{
		if (answers.playagain === 'Lets do it!') {
			startGame();
		} else {
			return false;
		}
	});
}

startGame();