// Require the colors package and set theme options
var colors = require('colors');
var colors_theme = require("./hangman_modules/colors_theme");
colors.setTheme(colors_theme);

// Option to display the word while testing the game
var test = require("./hangman_modules/test")(process.argv);

const Word = require("./hangman_modules/word");
const Letter = require("./hangman_modules/letter");

// Require the Inquirer package and initialize the word variable.
var inquirer = require('inquirer');
var word = null;

function startGame() {
	// Start a game by creating a new instance of Word.
	word = new Word;
	// Update the Word.wordCopy string
	word.mask.map(item => {
		word.wordCopy += item;
	});
	if (test) {
		console.log(`WORD: ${word.word}`);
	}
	// Display the masked letters to the user.
	console.log(`\n${word.wordCopy}\n\n`);

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

// Function to ask the user if they want to play again when the game ends either by win or guesses reach 0.
// This function will not be called if/when user enters 'quit' or 'exit'
function playAgain() {
	inquirer.prompt([{
		type: 'list',
		name: 'playagain',
		message: 'Want to play again?',
		choices: ['Lets do it!', 'Eh... I quit!'],
	}]).then(answers => {
		// Allow the player to start a new game
		if (answers.playagain === 'Lets do it!') {
			startGame();
		} else {
			// Exit to the command line
			return false;
		}
	});
}

// The inital call to startGame
startGame();