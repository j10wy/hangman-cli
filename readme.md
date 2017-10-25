
### Commands:

Enter any of the following to play the game
```bash
# Play a regular game
node .
# The word will be displayed when the game starts use this to test the game
node . --test

# Run via NPM scripts
npm run
npm run test
```

### Game Flow

```
                                      +------------------+
                                      | REQUIRE PACKAGES |
                                      | INITIALIZE VARS  |
                                      | IN TEST MODE??   |
                                      +------------------+
                                                |
                                                v
                                      +------------------+
+------------------------------------->    startGame()   <--+
|                               +-----+ Prompt for entry |  |
|                               |     +------------------+  +----------------------+
|                               |                      |    |                      |
|                       +-------v---------+            |    |                      |
|                       |   Valid Entry   +---+   +---------------------------+    |
|            +----------+(a single letter)|   |   |  Number || String v 1     |    |
|            |          +-----------------+   |   | - Warn user               |    |
|            |                                |   |  Prompt for a valid entry | +--v-----------+
| +----------v----------------+               |   |---------------------------+ | QUIT || EXIT |
| |  Incorrect Guess          |  +------------v-----------------------------+   +--------------+
| |  - Decrement # of guesses |  | Correct Guess                            |       |
| |  - Cont. to prompt until  |  | - Update Word.mask && Word.wordCopy      |       |
| |  Word.guesses = 0         |  |   Cont. to prompt until word is revealed |       |
| +---------------------------+  +------------------------------------------+       |
|                           |                     |                                 |
|                           |       +-------------v------------+                    |
|                           |       | Letter.validate === true |                    |
|                           +------->        Prompt user       |                    |
|                                   +--------------------------+                    |
|                                      |                    |                       |
|                               +------v---+      +---------v--------+              |
+-------------------------------+ New Game |      | Exit Node process <--------------+
                                +----------+      +------------------+
```

### Resources