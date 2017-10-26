# Description
A hangman command-line game using constructor functions

### Commands:

Enter any of the following to play the game
```bash
# Play a regular game
node .

# The word will be displayed when the game starts. Use this to test the game.
node . --test

# Run via NPM scripts
# -------------------

# Play a regular game
npm start

# The word will be displayed when the game starts. Use this to test the game.
npm run test
```

### Game Flow

```
                                      +------------------+
                                      | REQUIRE PACKAGES |
                                      | INITIALIZE VARS  |
                                      | (IN TEST MODE?)  |
                                      +------------------+
                                                |
                                                v
                                      +------------------+
+------------------------------------->    startGame()   <--+
|                               +-----+ Prompt for entry |  |
|                               |     +------------------+  +----------------------+
|                               |                           |                      |
|                       +-------v---------+                 |                      |
|                       |   VALID ENTRY   +---+   +---------v-----------------+    |
|            +----------+(a single letter)|   |   |    NUMBER || STRING > 1   |    |
|            |          +-----------------+   |   | - Warn user               |    |
|            |                                |   |  Prompt for a valid entry | +--v-----------+
| +----------v----------------+               |   +---------------------------+ | QUIT || EXIT |
| |     INCORRECT GUESS       |  +------------v-----------------------------+   +--------------+
| |  - Decrement # of guesses |  |            CORRECT GUESS                 |       |
| |  - Cont. to prompt until  |  | - Update Word.mask && Word.wordCopy      |       |
| |  Word.guesses = 0         |  |   Cont. to prompt until word is revealed |       |
| +---------------------------+  +------------------------------------------+       |
|                           |                     |                                 |
|                           |       +-------------v------------+                    |
|                           |       | Letter.validate === true |                    |
|                           +------->       Prompt user...     |                    |
|                                   +--------------------------+                    |
|                                      |                    |                       |
|                               +------v---+      +---------v--------+              |
+-------------------------------+ New Game |      | Exit Node process <-------------+
                                +----------+      +------------------+
```

### Resources
[MDN: Constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) - The only documentation I needed for the homework assignment

[TODO Highlight for VS Code](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight) - Cool VS Code plugin that allows the developer to include @todo in a comment. It highlights the todo in the code comment. Found this really useful when I was working on a feature but needed to update a method or some logic in another module.

[Github Probot TODOs](https://todo.jasonet.co/) - Found this really cool bot for Github that looks for todos in code comments and creates new issues on Github. Not that I needed to track issues in Github but thought it was cool anyway, especially when used with TODO Highlight.

[Github Probots](https://github.com/probot/probot) - More info on Github Probots.

[ASCII Flow](http://asciiflow.com/) - Used this tool to create the diagram above.