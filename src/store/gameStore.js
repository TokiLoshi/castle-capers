import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { ROOM_CLUES } from "../data/roomClues";
import { DIALOG_TEMPLATES } from "../data/dialogs";

export const GAME_CONFIG = {
	victim: "crown",
	rooms: ["bedroom", "hall", "kitchen", "library"],
	suspects: [
		{
			id: "Adventurer",
			name: "Gregory the Great",
			room: "bedroom",
			position: [1.8, 0, 0],
		},
		{
			id: "HoodedAdventurer",
			name: "Sable the Shrouded",
			room: "bedroom",
			position: [-1.8, 0, 0],
		},
		{
			id: "Man",
			name: "Artie the Ordinary",
			room: "library",
			position: [1.8, 0, 1.2],
		},
		{
			id: "Shaun",
			name: "Shaun the Strange",
			room: "library",
			position: [-1.2, 0, -0.2],
		},
		{
			id: "Witch",
			name: "Wendeline the Witch",
			room: "kitchen",
			position: [1.8, 0, 0.1],
		},
		{
			id: "Wizard",
			name: "Dorian the Grey Wizard",
			room: "kitchen",
			position: [-1.8, 0, 0.2],
		},
	],
	weapons: [
		{
			name: "candlestick",
			room: "bedroom",
			description: "something heavy and ornate, glinting in the candle light",
			action: "gripping it tightly",
		},
		{
			name: "chalice",
			room: "bedroom",
			description:
				"a shiny chalice, that appeared to be fizzing from the top, leaving a sticky mess behind it",
			action: "cleaning it carefully",
		},
		{
			name: "sword",
			room: "library",
			description: "something long and sharp that gleamed in the shadows",
			action:
				"taking a stab at the mannequin in the bedroom before disappearing through a hidden trap door",
		},
		{
			name: "chain",
			room: "library",
			description: "heavy metal links that clinked ominously",
			action: "coiling it around in their hands",
		},
		{
			name: "pot",
			room: "kitchen",
			description:
				"a large cooking vessel that seemed to shine more than any piece of crockery should",
			action: "scrubbing it vigorously",
		},
		{
			name: "potions",
			room: "kitchen",
			description:
				"small bottles with swirling and bubbling liquids reflecting in the moonglight",
			action: "vigorously shaking these unknown concoctions",
		},
	],
};

// Need to pull clues from the data/roomClues/ const ROOM CLUES constants
const POSSIBLE_CLUES = {};
const POSSIBLE_DIALOGS = {};

export const useGameStore = create(
	subscribeWithSelector((set, get) => ({
		// Game state
		gameStarted: false,
		currentClues: {},
		foundClues: [],
		currentTestimonies: {},
		foundTestimonies: [],
		victims: [],
		murderer: null,
		murderWeapon: null,

		// Game navigation
		currentRoom: "hall",
		previousRoom: null,

		// UI state
		activeClue: null,
		activeTestimony: null,
		isClueModalOpen: false,
		isNotebookOpen: false,
		isTestimonyPanelOpen: false,
		isSolvePanelOpen: false,
		showInstructions: true,

		// Dialog state
		currentDialogs: {},
		activeDialog: null,
		isDialogOpen: false,
		currentDialogIndex: 0,
		dialogHasEnded: false,

		// Solution state
		guessesRemaining: 3,
		gameEnded: false,
		gameWon: false,
		gameLost: false,
		currentGuess: {
			murderer: null,
			weapon: null,
		},
		guessHistory: [],

		hideInstructions: () => {
			set({
				showInstructions: false,
			});
		},

		showInstructionsModal: () => {
			set({ showInstructions: true });
		},

		changeRoom: (newRoom) => {
			const { currentRoom } = get();
			set({
				previousRoom: currentRoom,
				currentRoom: newRoom,
			});
		},

		goBacktToHall: () => {
			const { currentRoom } = get();
			set({
				previousRoom: currentRoom,
				currentRoom: "hall",
			});
		},

		getCurrentRoom: () => {
			const { currentRoom } = get();
			return currentRoom;
		},

		initializeGame: () => {
			const murderer =
				GAME_CONFIG.suspects[
					Math.floor(Math.random() * GAME_CONFIG.suspects.length)
				];
			const murderWeapon =
				GAME_CONFIG.weapons[
					Math.floor(Math.random() * GAME_CONFIG.weapons.length)
				];

			const clues = getCluesForMurderer(murderer.id);
			const dialogs = generateDialog(murderer.id, murderWeapon.name);

			// Initialize Clues
			// Object.keys(POSSIBLE_CLUES).forEach((objectId) => {
			// 	const possibleClues = POSSIBLE_CLUES[objectId];
			// 	const randomClueIndex = Math.floor(
			// 		Math.random() * possibleClues.length
			// 	);
			// 	clues[objectId] = possibleClues[randomClueIndex];
			// });

			// // Initalize Dialogs
			// Object.keys(POSSIBLE_DIALOGS).forEach((npcId) => {
			// 	dialogs[npcId] = {
			// 		...POSSIBLE_DIALOGS[npcId],
			// 		hasBeenPlayed: false,
			// 	};
			// });

			set({
				currentClues: clues,
				currentDialogs: dialogs,
				murderer: murderer.id,
				murderWeapon: murderWeapon.name,
				isDialogOpen: false,
				currentDialogIndex: 0,
				activeDialog: null,
				dialogHasEnded: false,
				gameStarted: true,
				foundClues: [],
				foundTestimonies: [],
				activeClue: null,
				activeTestimony: null,
				isClueModalOpen: false,
				isNotebookOpen: false,
				isTestimonyPanelOpen: false,
				isSolvePanelOpen: false,
			});
		},

		interactWithObject: (objectId) => {
			const { currentClues, foundClues } = get();
			const clue = currentClues[objectId];

			if (!clue) {
				return;
			}

			// Is this clue found?
			const alreadyFound = foundClues.some(
				(found) => found.objectId === objectId
			);

			if (alreadyFound) {
				set({
					activeClue: { ...clue, objectId, alreadyFound: true },
					isClueModalOpen: true,
				});
			} else {
				// New clue found
				if (clue.isClue) {
					set({
						foundClues: [
							...foundClues,
							{ ...clue, objectId, foundAt: Date.now() },
						],
						activeClue: { ...clue, objectId, alreadyFound: false },
						isClueModalOpen: true,
					});
				} else {
					set({
						activeClue: { ...clue, objectId, alreadyFound: false },
						isClueModalOpen: true,
					});
				}
			}
		},

		interactWithNPC: (npcId) => {
			const { currentDialogs } = get();
			const npcDialog = currentDialogs[npcId];

			if (!npcDialog) {
				return;
			}

			// Start the dialog
			set({
				activeDialog: {
					npcId,
					npcName: npcDialog.name,
					dialogSteps: npcDialog.dialogSteps,
					hasBeenPlayed: npcDialog.hasBeenPlayed,
				},
				isDialogOpen: true,
				currentDialogIndex: 0,
				dialogHasEnded: false,
			});
		},

		handleNextDialog: () => {
			const { currentDialogIndex, activeDialog } = get();

			if (!activeDialog) return;

			const currentStep = activeDialog.dialogSteps[currentDialogIndex];
			if (currentStep.isTestimony) {
				const { foundTestimonies } = get();
				const alreadyFound = foundTestimonies.some(
					(found) => found.testimonyId === activeDialog.npcId
				);

				if (!alreadyFound) {
					set({
						foundTestimonies: [
							...foundTestimonies,
							{
								...currentStep.testimony,
								testimonyId: activeDialog.npcId,
								foundAt: Date.now(),
							},
						],
					});
				}
			}

			const nextIndex = currentDialogIndex + 1;
			const isLastStep = nextIndex >= activeDialog.dialogSteps.length;

			if (isLastStep) {
				const { currentDialogs } = get();
				set({
					currentDialogs: {
						...currentDialogs,
						[activeDialog.npcId]: {
							...currentDialogs[activeDialog.npcId],
							hasBeenPlayed: true,
						},
					},
					dialogHasEnded: true,
				});
			} else {
				set({
					currentDialogIndex: nextIndex,
					dialogHasEnded: nextIndex === activeDialog.dialogSteps.length - 1,
				});
			}
		},

		closeDialog: () => {
			set({
				activeDialog: null,
				isDialogOpen: false,
				currentDialogIndex: 0,
				dialogHasEnded: false,
			});
		},

		getCurrentDialogStep: () => {
			const { activeDialog, currentDialogIndex } = get();

			if (!activeDialog || !activeDialog.dialogSteps) return;
			return activeDialog.dialogSteps[currentDialogIndex];
		},

		getNPCAnimation: (npcId) => {
			const { activeDialog, currentDialogIndex, isDialogOpen } = get();

			if (isDialogOpen && activeDialog && activeDialog.npcId === npcId) {
				const currentStep = activeDialog.dialogSteps[currentDialogIndex];
				return currentStep?.animation || "idle";
			}

			return "idle";
		},

		getNPCDialogStatus: (npcId) => {
			const { currentDialogs } = get();
			const npcDialog = currentDialogs[npcId];

			return {
				hasDialog: !!npcDialog,
				hasBeenPlayed: npcDialog?.hasBeenPlayed || false,
				canInteract: !!npcDialog,
				name: npcDialog?.name || "Unknown",
			};
		},

		// Close clue modals
		closeClueModal: () => {
			set({
				activeClue: null,
				isClueModalOpen: false,
			});
		},

		// Handle Notebook modal
		openNotebook: () => {
			const { foundClues } = get();
			set({ isNotebookOpen: true });
			return foundClues;
		},

		closeNotebook: () => {
			set({
				isNotebookOpen: false,
			});
		},

		// Handle Testimoney modal
		openTestimonyModal: () => {
			const { testimonies } = get();
			set({
				isTestimonyPanelOpen: true,
			});
			return testimonies;
		},

		closeTestimonyPanel: () => {
			set({
				isTestimonyPanelOpen: false,
			});
		},

		// Handle Solve Panel
		openSolvePanel: () => {
			const solution = "No solutions yet";
			set({
				isSolvePanelOpen: true,
			});
			return solution;
		},

		closeSolvePanel: () => {
			set({
				isSolvePanelOpen: false,
			});
		},

		updateCurrentGuess: (field, value) => {
			const { currentGuess } = get();
			set({
				currentGuess: {
					...currentGuess,
					[field]: value,
				},
			});
		},

		// Check player's guess
		checkSolution: (guessedMurderer, guessedWeapon) => {
			const { murderer, murderWeapon, guessesRemaining } = get();
			const isCorrect =
				guessedMurderer === murderer && guessedWeapon === murderWeapon;
			const newGuessesRemaining = guessesRemaining - 1;
			set({
				guessesRemaining: newGuessesRemaining,
				gameEnded: isCorrect || newGuessesRemaining <= 0,
				gameWon: isCorrect,
				gameLost: !isCorrect && newGuessesRemaining <= 0,
				currentGuess: {
					murderer: guessedMurderer,
					weapon: guessedWeapon,
				},
			});
			return isCorrect;
		},

		// Get clue status for an object
		getObjectStatus: (objectId) => {
			const { currentClues, foundClues } = get();
			const clue = currentClues[objectId];
			const isFound = foundClues.some((found) => found.objectId === objectId);

			return {
				hasClue: !!clue,
				isClue: clue?.isClue || false,
				isFound,
				clue,
			};
		},

		getTestimonyStatus: (testimonyId) => {
			const { currentTestimonies, foundTestimonies } = get();
			const testimony = currentTestimonies[testimonyId];
			const isFound = foundTestimonies.some((found) => {
				found.testimonyId === testimonyId;
			});
			return {
				hasTestimony: !!testimony,
				isFound,
				testimony,
			};
		},

		// Reset game
		resetGame: () => {
			set({
				gameStarted: false,
				gameEnded: false,
				gameWon: false,
				currentClues: {},
				foundClues: [],
				currentTestimonies: {},
				foundTestimonies: {},
				murderer: null,
				murderWeapon: null,
				activeClue: null,
				activeTestimony: null,
				isClueModalOpen: false,
				isNotebookOpen: false,
				isTestimonyPanelOpen: false,
				isSolvePanelOpen: false,
				currentDialogs: {},
				activeDialog: null,
				isDialogOpen: false,
				currentDialogIndex: 0,
				dialogHasEnded: false,
				guessesRemaining: 3,
				currentRoom: "hall",
			});
		},
		getGameState: () => {
			const { murderer, murderWeapon, foundClues, foundTestimonies } = get();
			return {
				murderer,
				murderWeapon,
				cluesFound: foundClues.length,
				testimoniesFound: foundTestimonies.length,
			};
		},
	}))
);

function getSuspectById(id) {
	const suspect = GAME_CONFIG.suspects.find((s) => s.id === id);
	return suspect;
}

function getWeaponByName(name) {
	const weapon = GAME_CONFIG.weapons.find((w) => w.name === name);
	return weapon;
}

// Murderer selects random scapegoat and murder weapon
function getRandomScapegoat(murderer, allSuspects) {
	const availableScapegoats = allSuspects.filter(
		(suspect) => suspect.id !== murderer
	);
	const scapeGoat =
		availableScapegoats[Math.floor(Math.random() * availableScapegoats.length)];

	return scapeGoat;
}

function getScapegoatWeapon(murderWeapon, allWeapons) {
	const availableWeapons = allWeapons.filter(
		(weapon) => weapon.name !== murderWeapon
	);
	const scapegoatWeapon =
		availableWeapons[Math.floor(Math.random() * availableWeapons.length)];
	return scapegoatWeapon;
}

// Generate the dialog
export function generateDialog(murderer, murderWeapon) {
	const dialogs = {};
	const murderWeaponData = getWeaponByName(murderWeapon);
	const murderData = getSuspectById(murderer);

	const allSuspects = GAME_CONFIG.suspects;
	const allWeapons = GAME_CONFIG.weapons;

	// Track accusations so we don't blame one person too much
	const accusationCount = {};
	Object.keys(DIALOG_TEMPLATES).forEach((characterId) => {
		const characterDialog = DIALOG_TEMPLATES[characterId];
		const characterData = getSuspectById(characterId);

		const dialogSteps = JSON.parse(JSON.stringify(characterDialog.dialogSteps));

		let accused, weapon, weaponData, isDeflection;

		// if the character is the murderer deflect the blame
		if (characterId === murderer) {
			const scapegoat = getRandomScapegoat(murderer, allSuspects);
			const scapeWeapon = getScapegoatWeapon(murderWeapon, allWeapons);

			accused = scapegoat.name;
			weapon = scapeWeapon.name;
			weaponData = scapeWeapon;
			isDeflection = true;
			accusationCount[scapegoat.id] = (accusationCount[scapegoat.id] || 0) + 1;
		} else {
			if (accusationCount[murderer] >= 3) {
				const scapegoat = getRandomScapegoat(murderer, allSuspects);
				const scapeWeapon = getScapegoatWeapon(murderWeapon, allWeapons);
				accused = scapegoat.name;
				weapon = scapeWeapon.name;
				weaponData = scapeWeapon;
				isDeflection = true;
				accusationCount[accused.id] = (accusationCount[accused] || 0) + 1;
			} else {
				accused = murderData.name;
				weapon = murderWeapon;
				weaponData = murderWeaponData;
				isDeflection = false;
				accusationCount[murderer] = (accusationCount[murderer] || 0) + 1;
			}
		}
		dialogSteps.forEach((step) => {
			// update text
			if (step.text) {
				step.text = step.text
					.replace(/{accused}/g, accused)
					.replace(/{action}/g, weaponData.action)
					.replace(/{description}/g, weaponData.description)
					.replace(/{weapon}/g, weapon);
			}
			// Handle testimony
			if (step.isTestimony && step.testimony) {
				step.testimony.title = step.testimony.title
					.replace(/{accused}/g, accused)
					.replace(/{action}/g, weaponData.action)
					.replace(/{description}/g, weaponData.description)
					.replace(/{weapon}/g, weapon);

				step.testimony.description = step.testimony.description
					.replace(/{accused}/g, accused)
					.replace(/{action}/g, weaponData.action)
					.replace(/{description}/g, weaponData.description)
					.replace(/{weapon}/g, weapon);

				step.testimony.accused = accused;
				step.testimony.weapon = weapon;
				step.testimony.isDeflection = isDeflection;
			}
		});

		dialogs[characterId] = {
			name: characterData.name,
			dialogSteps: dialogSteps,
			hasBeenPlayed: false,
		};
	});
	return dialogs;
}

function getCluesForMurderer(murderer) {
	const selectedClues = {};

	Object.keys(ROOM_CLUES).forEach((room) => {
		const applicableClues = ROOM_CLUES[room].filter((clue) => {
			return clue.murderers && clue.murderers.includes(murderer);
		});

		const shuffledClues = [...applicableClues].sort(() => 0.5 - Math.random());
		const clueForRoom = shuffledClues.slice(0, 3);

		clueForRoom.forEach((clue) => {
			selectedClues[clue.id] = clue;
		});
	});
	return selectedClues;
}
