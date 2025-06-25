const DIALOG_TEMPLATES = {
	Adventurer: {
		name: "Max",
		// dialogsByMurderer: {
		// 	Witch: [
		// 		{
		// 			text: "Greetings, detective! I've been expecting you.",
		// 			animation: "wave",
		// 		},
		// 		{
		// 			text: "Last night was chaos, but I saw something suspicious that might help you...",
		// 			animation: "idle",
		// 		},
		// 		{
		// 			text: "There was a hooded figure skulking around the kitchen. They were acting strange. My witchy senses are certain they were involved!",
		// 			animation: "swordSlash",
		// 			isTestimony: true,
		// 			testimony: {
		// 				title: "Suspicious Hooded Figure",
		// 				description: "There was a suspicious hooded figure skulking near the kitchen",
		// 				accusor: "Max",
		// 				accused: "HoodedAdventurer",
		// 				weapon: "Unknown",
		// 			},
		// 			{

		// 			text: "",
		// 			animation: "idleSword",
		// 			}
		// 				],
		// 						hasBeenPlayed: false,
		// 		}

		// }
	},
	hoodedAdventurer: {},
	Man: {},
	Shaun: {},
	Witch: {},
	Wizard: {},
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
