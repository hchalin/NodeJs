/**
 * USER IN/OUT
 *
 * If you’ve worked with JavaScript before, you’re likely familiar with the concept of input/output even if you haven’t heard it called that. At its most abstract, output is any data or feedback that a computer provides (like to a human user), while input is data provided to the computer. When we use console.log() we prompt the computer to output information to the console. In the Node environment, the console is the terminal, and the console.log() method is a “thin wrapper” on the .stdout.write() method of the process object. stdout stands for standard output.
 */
/* EXAMPLE...
process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});
*/


// NUMBER GUESSING GAME, make sure to cd into this folder when testing then cd out

let {testNumber} = require('./game.js');

process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

let playGame = (userInput) => {
  let input = userInput.toString().trim();
	testNumber(input);
};

process.stdin.on('data', playGame)
