// fucntion to test if --test is entered on the command line
function test(cl_args) {
	// Set default status to false 
	let testStatus = false;
	// Loop through process.argv, searching for '--test'
	cl_args.find(item => {
		// convert each item in process.argv to lowercase incase user enters --TEST
		let itemLowerCase = item.toLowerCase();
		if (itemLowerCase === '--test') {
			// Set testStatus to true if found in process.argv
			testStatus = true;
		}
	});
	// Return the value 
	return testStatus;
}

module.exports = test;