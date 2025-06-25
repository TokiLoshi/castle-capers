const DIALOG_TEMPLATES = {
	adventurer: {
		name: "Maximillian",
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
	hoodedAdventurer: {},
	Man: {},
	Shaun: {},
	Witch: {},
	Wizard: {},
};
