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

export const useGameStore = create(
	subscribeWithSelector((set, get) => ({
		// Game state
		gameStarted: false,
		currentClues: {},
		foundClues: [],

		// UI state
		activeClue: null,
		isClueModalOpen: false,
		isNotebookOpen: false,

		initializeGame: () => {
			const clues = {};
			Object.keys(POSSIBLE_CLUES).forEach((objectId) => {
				const possibleClues = POSSIBLE_CLUES[objectId];
				const randomIndex = Math.floor(Math.random() * possibleClues.length);
				clues[objectId] = possibleClues[randomIndex];
			});

			set({
				currentClues: clues,
				gameStarted: true,
				foundClues: [],
				activeClue: null,
				isClueModalOpen: false,
				isNotebookOpen: false,
			});
			console.log("Game initialized with clues: ", clues);
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

		// Close clue modals
		closeClueModal: () => {
			set({
				activeClue: null,
				isClueModalOpen: false,
			});
		},

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

		// Reset game
		resetGame: () => {
			set({
				gameStarted: false,
				currentClues: {},
				foundClues: [],
				activeClue: null,
				isClueModalOpen: false,
				isNotebookOpen: false,
			});
		},
	}))
);
