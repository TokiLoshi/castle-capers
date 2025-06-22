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

const POSSIBLE_TESTIMONIES = {
	chained: [
		{
			title: "It was Col Mustard",
			description:
				"I saw him sneaking around last night, he was dragging a chain around",
			accusor: "Shaun",
			accused: "Col Mustard",
			weapon: "chain",
		},
	],
	knived: [
		{
			title: "It was Siriacha Panda",
			description:
				"I saw her in the library polishing a sushi knife she was muttering about the lateness of the hour",
			accusor: "AstroBee",
			accused: "Sir Panda",
			weapon: "knife",
		},
	],
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

		initializeGame: () => {
			const clues = {};
			const testimonies = {};

			Object.keys(POSSIBLE_CLUES).forEach((objectId) => {
				const possibleClues = POSSIBLE_CLUES[objectId];
				const randomClueIndex = Math.floor(
					Math.random() * possibleClues.length
				);
				clues[objectId] = possibleClues[randomClueIndex];
			});

			Object.keys(POSSIBLE_TESTIMONIES).forEach((testimonyId) => {
				const possibleTestimonies = POSSIBLE_TESTIMONIES[testimonyId];
				const randomTestimonyIndex = Math.floor(
					Math.random() * possibleTestimonies.length
				);
				testimonies[testimonyId] = possibleTestimonies[randomTestimonyIndex];
			});

			set({
				currentClues: clues,
				currentTestimony: testimonies,
				gameStarted: true,
				foundClues: [],
				foundTestimonies: [],
				activeClue: null,
				activeTestimony: null,
				isClueModalOpen: false,
				isNotebookOpen: false,
				isTestimonyPanelOpen: false,
			});
			console.log("Game initialized with clues: ", clues);
			console.log("Game initiatied with testimonies", testimonies);
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

		interactWithNPC: (testimonyId) => {
			const { currentTestimonies, foundTestimonies } = get();
			console.log("Current testimony: ", currentTestimonies);
			const testimony = currentTestimonies[testimonyId];

			if (!testimony) {
				console.log(`No testimony data for NPC: ${testimony}`);
				return;
			}

			const alreadyFound = foundTestimonies.some(
				(found) => found.testimonyId === testimonyId
			);

			if (alreadyFound) {
				set({
					activeTestimony: { ...testimony, testimonyId, alreadyFound: true },
					isTestimonyPanelOpen: true,
				});
			} else {
				set({
					foundTestimonies: [
						...foundTestimonies,
						{ ...testimony, testimonyId, foundAt: Date.now() },
					],
					activeTestimony: { ...testimony, testimonyId, alreadyFound: false },
					isTestimonyPanelOpen: true,
				});
				console.log(`New testimony found: ${testimony.title}`);
			}
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
