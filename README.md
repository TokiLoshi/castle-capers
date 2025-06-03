# Castle Capers a Three.js Journey Challenge

## TODO:

Goal: create a single player exploration game using react three fiber, drei and CCO medival assets.

Game loads. Player can choose a character.

One of the other 6 NPCs become a victim, killed by one of the remaining 5, with one of the 6 possible murder weapons. Player must explore the crime scene of one of 4-5 rooms looking for clues.

the game loops through three phases: day phase, explore rooms, examine objects, talk to NPCs. Evening Phase make accusations or gather more evidence. Wrong accusations cause you to lose credibility, which after three wrong guesses ressults in a gme over. All text-based dialog or AI generated options. During the next day you can find out who else died in the night. You need to find the killer, the room and the murder weapon to win.

Libraries include React, three fiber, zustand, drei, glsl.

MVP start with 3 rooms, randomly assign the solutions, and 5 NPCs.

- [ ] Set up repo and deploy
- [ ] Set up helpers to set the scenes
- [ ] Choose and download assets
- [ ] Set up basic rooms
- [ ] Set up player movement (WASD with AZERTY support)
- [ ] Set up logic to move between rooms
- [ ] Set up character stories
- [ ] Set up possible scenarios
- [ ] Decide on clues
- [ ] Add outline options
- [ ] Add Room exploration
- [ ] Clue Discover - interact with objects, clues (notes, blood, items)
- [ ] Create NPC cards
- [ ] Implement guessing system, where user can choose between NPCs and validate
- [ ] Add journal to review clues and guesses
- [ ] Add time dynamics, changing backgrounds
- [ ] Add game over
- [ ] Add loading screen
- [ ] Add reset
- [ ] Create character selection
- [ ] Add audio
- [ ] Add interfaces
- [ ] Add transition effects with GLSL
- [ ] Add mini map
