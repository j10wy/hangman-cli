/*
	@todo require Colors package
	@body Use require package to colorize the terminal output
*/

const Word = require("./hangman_modules/word");
const Letter = require("./hangman_modules/letter");

var inquirer = require('inquirer');
var word = null;

function startGame() {
	// Start a game by creating a new instance of Word.
	word = new Word;
	// Update the Word.wordCopy string
	word.mask.map(item => {
		word.wordCopy += item;
	});
	// Display the masked letters to the user.
	console.log(`\n\n${word.wordCopy}\n\n`);

	// Ask the user to guess a letter.
	// This will continue to loop (return false) until the word has been fully revealed.
	inquirer.prompt([{
		type: 'input',
		name: 'entry',
		message: "Guess a letter",
		validate: function (value) {
			// Initialize a new Letter, call the validate method.
			// Letter.validate checks if entry is 0 or > 1 in lenght, an integer, exit/quit.
			// If entry is a single letter, it will determine if the letter is in the word.
			// If the guess is incorrect, Letter.validate() will deincrement the # of guesses
			// Word.validate() returns trye when the word is fully revealed.
			return new Letter(value, word).validate();
		}
	}]).then(answers => {
		var entry = answers.entry;
		var isQuitter = entry.toUpperCase() === 'QUIT' || entry.toUpperCase() === 'EXIT';
		
		if (isQuitter) {
			// End the game, exit to the command line.
			return false;
		} else {
			// Ask the user if they want to play again or quit.
			playAgain();
		}

	});
}

function playAgain() {
	inquirer.prompt([{
		type: 'list',
		name: 'playagain',
		message: 'Want to play again?',
		choices: ['Lets do it!', 'Eh... I quit!'],
	}]).then(answers => {
		if (answers.playagain === 'Lets do it!') {
			startGame();
		} else {
			return false;
		}
	});
}

startGame();