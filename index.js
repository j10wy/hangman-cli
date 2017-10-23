let Word = require("./hangman_modules/word");
let Letter = require("./hangman_modules/letter");
var inquirer = require('inquirer');

// inquirer.prompt([{
// 	type:'input',
// 	name:'letter',
// 	message:"Enter letter"
// }]).then(function (answers) {
// 	console.log(answers)
// });

var a = new Word();
console.log(a);