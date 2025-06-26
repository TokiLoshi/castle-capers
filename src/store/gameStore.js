import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { ROOM_CLUES } from "../data/roomClues";
import { DIALOG_TEMPLATES } from "../data/dialogs";

const GAME_CONFIG = {
	victim: "crown",
	rooms: ["bedroom", "hall", "kitchen", "library"],
	suspects: [
		{
			id: "Adventurer",
			name: "Gregory The Great",
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
				"taking a stab at the manequin in the bedroom before disappointed through a hidden trap door",
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
				"small bottles with swirling and bubbling liquids reflecting in teh moonglight",
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

		// UI state
		activeClue: null,
		activeTestimony: null,
		isClueModalOpen: false,
		isNotebookOpen: false,
		isTestimonyPanelOpen: false,
		isSolvePanelOpen: false,

		// Dialog state
		currentDialogs: {},
		activeDialog: null,
		isDialogOpen: false,
		currentDialogIndex: 0,
		dialogHasEnded: false,

		initializeGame: () => {
			const clues = {};
			const dialogs = {};
			const murderer =
				GAME_CONFIG.suspects[
					Math.floor(Math.random() * GAME_CONFIG.suspects.length)
				];
			const murderWeapon =
				GAME_CONFIG.weapons[
					Math.floor(Math.random() * GAME_CONFIG.weapons.length)
				];

			console.log(
				`Initizing game, murderer selected: ${murderer}, murderWeapon selected: ${murderWeapon}`
			);
			console.log(
				`User must solve the puzzle by guessing ${murderer} with a ${murderWeapon}`
			);

			// Initialize Clues
			Object.keys(POSSIBLE_CLUES).forEach((objectId) => {
				const possibleClues = POSSIBLE_CLUES[objectId];
				const randomClueIndex = Math.floor(
					Math.random() * possibleClues.length
				);
				clues[objectId] = possibleClues[randomClueIndex];
			});

			// Initalize Dialogs
			Object.keys(POSSIBLE_DIALOGS).forEach((npcId) => {
				dialogs[npcId] = {
					...POSSIBLE_DIALOGS[npcId],
					hasBeenPlayed: false,
				};
			});

			set({
				currentClues: clues,
				currentDialogs: dialogs,
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
			console.log("Game initialized with clues: ", clues);
			console.log("Game initiatied with dialogs", dialogs);
		},

		interactWithObject: (objectId) => {
			const { currentClues, foundClues } = get();
			const clue = currentClues[objectId];

			if (!clue) {
				console.log(`No clue data for object: ${objectId}`);
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
					console.log(`New clue found: ${clue.title}`);
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
			console.log("Current dialog: ", npcDialog);

			if (!npcDialog) {
				console.log(`No dialog data for npc: ${npcId}`);
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
			console.log(`A dialog has been started with ${npcDialog.name}`);
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
					console.log(`New testimony found: ${currentStep.testimony.title}`);
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
				currentClues: {},
				foundClues: [],
				currentTestimonies: {},
				foundTestimonies: {},
				activeClue: null,
				activeTestimony: null,
				isClueModalOpen: false,
				isNotebookOpen: false,
				isTestimonyPanelOpen: false,
			});
		},
	}))
);
