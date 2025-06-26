export function generateDialog(
	murderer,
	murderWeapon,
	murderWeaponDescription,
	murderWeaponAction
) {
	const dialog = {};
	console.log(`Generating dialog with ${murderer} murderWeapon ${murderWeapon} description ${murderWeaponDescription} and ${murderWeaponAction}`)
	// iterate through the dialogs
	// if key is murderer choose a different weapon and blame someone
	// if murderer's name is already in the dialog three times blame someone else
	// otherwise blame murderer with the murderweapon
	// Adjust the testimony to include the murder description and the murder action
	// append dialog copy witht he adjusted testimony

	return dialog;
}

const DIALOG = {
	Adventurer: {
		name: "Gregory the Great",
		dialogSteps: [
			{
				text: "Greeting, I've been waiting for you. Something went awry last night!",
				animation: "wave",
			}
		]
	}
}

const DIALOG_TEMPLATES = {
			{
				text: "{accused} is always skulking about, and I saw them ${action}, it {description}."
				animation: "yes",
				isTestimony: true,
				testimony: {
					title: `${murderer} skulking`,
					description: `Seen ${action} ${description}`,
					accusor: "Gregory the Great",
					accused: "Sable the Shrouded",
					weapon: "candlestick",
				},
			},
			{
				text: "I do hope you catch them before they skulks off. There should only be one adventurer per castle anyway.",
				animation: "jumpIdle",
			},
		],
		Man: [
			{
				text: "It's about time, I've been waiting for you!",
				animation: "wave",
			},
			{
				text: "It's artie again, he's always trying to be ordinary but he's hiding something! Specifically something shiny",
				animation: "swordSlash",
				isTestimony: true,
				testimony: {
					title: "Artie Acting Suspicious",
					description:
						"Artie was spotted with something shiny and suspicious. Gregory has always had his doubts.",
					accusor: "Gregory the Great",
					accused: "Artie the Ordinary",
					weapon: "sword",
				},
			},
			{
				text: "I've always found him suspecious, please don't let him get away",
				animation: "jump",
			},
		],
		Shaun: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Witch: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Wizard: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
	},
	hoodedAdventurer: {
		name: "Sable the Shrouded",
		dialogsByMurderer: {
			dialogsByMurderer: {
				Adventurer: [
					{ text: "", animation: "" },
					{
						text: "",
						animation: "",
						isTestimony: true,
						testimony: {
							title: "",
							description: "",
							accusor: "",
							accused: "",
							weapon: "",
						},
					},
					{
						text: "",
						animation: "",
					},
				],
				Man: [
					{ text: "", animation: "" },
					{
						text: "",
						animation: "",
						isTestimony: true,
						testimony: {
							title: "",
							description: "",
							accusor: "",
							accused: "",
							weapon: "",
						},
					},
					{
						text: "",
						animation: "",
					},
				],
				Shaun: [
					{ text: "", animation: "" },
					{
						text: "",
						animation: "",
						isTestimony: true,
						testimony: {
							title: "",
							description: "",
							accusor: "",
							accused: "",
							weapon: "",
						},
					},
					{
						text: "",
						animation: "",
					},
				],
				Witch: [
					{ text: "", animation: "" },
					{
						text: "",
						animation: "",
						isTestimony: true,
						testimony: {
							title: "",
							description: "",
							accusor: "",
							accused: "",
							weapon: "",
						},
					},
					{
						text: "",
						animation: "",
					},
				],
				Wizard: [
					{ text: "", animation: "" },
					{
						text: "",
						animation: "",
						isTestimony: true,
						testimony: {
							title: "",
							description: "",
							accusor: "",
							accused: "",
							weapon: "",
						},
					},
					{
						text: "",
						animation: "",
					},
				],
			},
		},
	},
	Man: {
		name: "Artie the Ordinary",
		dialogsByMurderer: {
			Adventurer: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			HoodedAdventurer: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			Shaun: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			Witch: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			Wizard: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
		},
	},
	Shaun: {
		name: "Shaun the Strange",
		dialogsByMurderer: {
			Adventurer: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			HoodedAdventurer: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			Man: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			Witch: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
			Wizard: [
				{ text: "", animation: "" },
				{
					text: "",
					animation: "",
					isTestimony: true,
					testimony: {
						title: "",
						description: "",
						accusor: "",
						accused: "",
						weapon: "",
					},
				},
				{
					text: "",
					animation: "",
				},
			],
		},
	},
	Witch: {
		name: "Wendeline the Witch",
		Adventurer: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		HoodedAdventurer: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Man: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Shaun: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Wizard: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
	},
	Wizard: {
		name: "Dorian the Grey Wizard",
		Adventurer: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		HoodedAdventurer: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Man: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Shaun: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
		Witch: [
			{ text: "", animation: "" },
			{
				text: "",
				animation: "",
				isTestimony: true,
				testimony: {
					title: "",
					description: "",
					accusor: "",
					accused: "",
					weapon: "",
				},
			},
			{
				text: "",
				animation: "",
			},
		],
	},
};
