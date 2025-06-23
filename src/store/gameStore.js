import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

const POSSIBLE_CLUES = {
	cage: [
		{
			title: "Mysterious Cage",
			description:
				"An ornate cage sits empty, you wonder what the owners might have used it for.",
			clueType: "evidence",
			isClue: true,
		},
	],
	book: [
		{
			title: "Old book",
			description:
				"You have found the victim's diary. The night before they died they said they were 'scared of her'...",
			clueType: "evidence",
			isClue: true,
		},
	],
	bucket: [
		{
			title: "Congealed bucket",
			description:
				"An iron bucket filled halfway with strange looking liquid. It smells bad, you want to move on.",
			clueType: "mundane",
			isClue: false,
		},
	],
};

const POSSIBLE_DIALOGS = {
	chained: {
		id: "chained",
		name: "Cactoro",
		dialogSteps: [
			{
				text: "Well hello there, stranger!",
				animation: "wave",
			},
			{
				text: "I see you're snooping around looking for clues. Bet you want to know all about last night",
				animation: "yes",
			},
			{
				text: "Well you really should go speak to Col Mustard, he was sneaking around last night draggin a chain around. Not much of a sneak mind he, he made a horrible din.",
				animation: "jumpIdle",
				isTestimony: true,
				testimony: {
					title: "It was Col Mustard",
					description: "Col Mustard was seen sneaking around with a chain",
					accusor: "Cactoro",
					accused: "Col Mustard",
					weapon: "Chain",
				},
			},
			{
				text: "And that's all you'll get out of me!",
				animation: "death",
			},
		],
		hasBeenPlayed: false,
	},
	knived: {
		id: "knived",
		name: "AstroBee",
		dialogSteps: [
			{
				text: "Buzz, buzz, I've been busy watching everything. You certainly took your time finding me!",
				animation: "wave",
			},
			{
				text: "I'm certain it was Sriracha Panda! They were sharpening a knife in the kitchen. Go ask them! I won't say anything else",
				animation: "jump",
				isTestimony: true,
				testimony: {
					title: "It was Sriracha Panda",
					description: "She was in the kitchen sharpening a knife",
					accusor: "AstroBee",
					accused: "Sir Panda",
					weapon: "knife",
				},
			},
			{
				text: "Watch your back detective, there is a murderer out there!",
				animation: "wave",
			},
		],
		hasBeenPlayed: false,
	},
};

export const useGameStore = create(
	subscribeWithSelector((set, get) => ({
		// Game state
		gameStarted: false,
		currentClues: {},
		foundClues: [],
		currentTestimonies: {},
		foundTestimonies: [],
		victims: [],

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
