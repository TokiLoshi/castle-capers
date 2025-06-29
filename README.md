# 🏰 Castle Capers a Three.js Journey Challenge

#### Goal:

create a simple single player exploration game using React Three Fiber, Drei, Zustand, (maybe GLSL) and CCO game assets. It's your regular murder mystery inspired by the Cluedo game created by Anthony E. Pratt in 1943, but with a 3D twist. The player must figure out whodunnit before the player gets them, or kills someone else!

#### 🎮 Game Loop Overview

- Player chooses a character to play
- One of the six NPCs becomes a victim murdered with one of six possible weapons by the remaining NPCs
- Player exlores the castle rooms, gathers clues and makes accusations.

- Game phases:
  - Day: Explore rooms, examine objects, interact with NPCs.
  - Evening: Review journal, make an accusation or search again.
  - Night: Consequences
- Incorrect accusations cost credibility. Three wrong guesses and it's Game Over!
- Solve the mystery before the third night ends or perish. (Correctly identify the killer, murder weapon and crime scen )

#### 🔧 Tech Stack

- React Three Fiber
- Drei
- Zustand
- GLSL (maybe)
- React Spring
- Leva
- Perf

## 🚧 TODO:

Done:

- [x] Create 3 basic rooms (Throne Room (victim's room), Library, Bedroom, Dining Room)
- [x] Set up repo and deploy
- [x] Choose and download CCO assets
- [x] Basic scene construction to replicate as base across components (lighting, camera, fov)
- [x] Install and configure helpers for scene setup
- [x] Split code into logical components
- [x] Get basic WASD movement working
- [x] Fix camera to follow player properly
- [x] Implement WASD movement that supports AZERTY layouts (first person movement)
- [x] Enable object hover and interaction
- [x] Enable NPC interactions
- [x] Basic UI Element
- [x] NPC dialogue system
- [x] Evidence collection feedback
- [x] Journal UI to track clues and guesses and inventory
- [x] Display clues (notes, blood, items) - maybe text that describes the object and whether or not they've found a clue

To do

- [ ] Game loop implementation
- [ ] Win loss conditions
- [ ] Add navigation between rooms
- [ ] Room transition system
- [ ] Bound players to room and use raycasting
- [ ] NPC outline on hover
- [ ] Create simple corridor/hallway system
- [ ] Implement room transitions
- [ ] Basic collision detection
- [ ] Add Zustand state and create room switching
- [ ] Write character stories
- [ ] Design 6 characters and brief backstories
- [ ] Choose 6 weapons
- [ ] Define room, weapon and killer solution permutations
- [ ] Set up random scenario generator
- [ ] Add clue logic per room/weapon/character
- [ ] Create NPC cards
- [ ] Add NPCs and animations
- [ ] Guessing system to accuse NPCs (3 strikes and it's game over )

#### 🔂 Game Loop

- [ ] Implement time-based loop (Day -> Evening -> Night)
- [ ] Add lighting / shader effects for day progression
- [ ] Build win/ loss conditions and screen transition
- [ ] Add loading screen and reset option
- [ ] Character selection at the start of the game
- [ ] UI for time interface countdown

#### ⚡️ Optimizations

- [ ] Optimize performances and moniter using perf
- [ ] Hide leva options

#### 🎬 Credits and Attribution and Inspiration

- [ ] Add model credits and CCO licensing
- [ ] Add walkthrough, inspiration and libraries to README
- [ ] Reference tutorials used

#### 🧹 Polish

- [ ] Add ambient background audio and controls
- [ ] Character selection screen
- [ ] Add sound effects e.g footsteps, door creaks, whispers
- [ ] Improve journal, dialogue and time interfaces
- [ ] Add transition effects with GLSL
- [ ] Add mini map
- [ ] Squash bugs
- [ ] Clude difficulty tuning
- [ ] Playtest, get feedback and iterate

#### 🙆‍♀️ Stretch Goals:

- [ ] Torchlight and shadows using pointlight and drei
- [ ] Include inspriation, tutorial references
- [ ] Add Red Herring clues to throw the user off

NPC Ideas:

- Col Mustard Mayo the Third
- Miss Scarlett Purple
- Mrs Gray Bird
- Reverend Lime Green
- Professor Plum stead

Room Ideas:

- Great Hall
- Private Chamers
- Dungeon
- Courtyard
- Library
- Kitchen

Performance Tagets:

- 60fps on mid range
- 5MBB download size
- less than 3 second load time

Tracking Asset Credits:
Room Assets
FantasyPropsMegaKit by [Quaternius](https://quaternius.com/packs/fantasypropsmegakit.html) CC0

Character Assets
Panda by [Quaternius](https://poly.pizza/m/q1uJ28Hs8T) CC0
Characters Shaun by [Quaternius](https://poly.pizza/m/eJFT9MxzOM) CC0
Zombie by [Quaternius](https://poly.pizza/m/VlXjG0N8Eg) CC0
Mako by [Quaternius](https://poly.pizza/m/2urczqZ9Xf)
Animated Platformer Character by [Quaternius](https://poly.pizza/m/kKtL4zvS3n)
Cactoro by [Quaternius](https://poly.pizza/m/IGn9lhdama)
Demon by [Quaternius](https://poly.pizza/m/LnfIziKv4o)
Fish by [Quaternius](https://poly.pizza/m/ypEYhCImAB)
Ninja by [Quaternius](https://poly.pizza/m/xGYmeDpfTu)
Astronaut by [Quaternius](https://poly.pizza/m/zbtPq4dOJL)
Astronaut by [Quaternius](https://poly.pizza/m/OgeSH89Nmx)
Astronaut by [Quaternius](https://poly.pizza/m/0D54W8yfrA)
Wall by [Quaternius](https://poly.pizza/m/CkF171SeTV)
Window Bars by [Quaternius](https://poly.pizza/m/mvTeQA5aBn)
Wall Towers Door Seco by [Quaternius](https://poly.pizza/m/5d80r2XX3O)
Arch Door by [Quaternius](https://poly.pizza/m/MVVMLXOfg1)
Trap Door by [Quaternius](https://poly.pizza/m/PALqVBff9b)
Door Round by [Quaternius](https://poly.pizza/m/4lNptAwxpV)

More appropriate models
Victim:
King by [Quaternius](https://poly.pizza/m/I1gTjmuK2m)

Possible Players:

1. Witch by Quaternius [CC-BY](https://creativecommons.org/licenses/by/3.0/) via [Poly Pizza](https://poly.pizza/m/QBEOV9ZUT8)
2. Adventurer by [oQuaternius](https://poly.pizza/m/5EGWBMpuXq)
3. Hooded Adventurer by [Quaternius](https://poly.pizza/m/5EGWBMpuXq)
4. Man by Quaternius (https://poly.pizza/m/fjHyMd5Wxw)
5. Animated Wizard by Quaternius [CC-BY] via Poly Pizza

Your character: Fernando

Stylized Wood Planks 002 Wooden Textures: https://3dtextures.me/2024/07/19/stylized-wood-planks-002/
created by João Paulo
