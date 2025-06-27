// export function generateDialog(
// 	murderer,
// 	murderWeapon,
// 	murderWeaponDescription,
// 	murderWeaponAction
// ) {
// 	const dialog = {};
// 	console.log(
// 		`Generating dialog with ${murderer} murderWeapon ${murderWeapon} description ${murderWeaponDescription} and ${murderWeaponAction}`
// 	);
// 	// iterate through the dialogs
// 	// if key is murderer choose a different weapon and blame someone
// 	// if murderer's name is already in the dialog three times blame someone else
// 	// otherwise blame murderer with the murderweapon
// 	// Adjust the testimony to include the murder description and the murder action
// 	// append dialog copy witht he adjusted testimony

// 	return dialog;
// }

export const DIALOG_TEMPLATES = {
	Adventurer: {
		name: "Gregory the Great",
		dialogSteps: [
			{
				text: "Greeting, I've been waiting for you. Something went awry last night!",
				animation: "wave",
			},
			{
				text: "{accused} is always skulking about, and I saw them {action}, it {description}.",
				animation: "gunShoot",
				isTestimony: true,
				testimony: {
					title: "Someone was skulking",
					description: "Seen {action} {description}",
					accusor: "Gregory the Great",
					accused: "{accused}",
					weapon: "{weapon}",
				},
			},
			{
				text: "I do hope you catch them before they skulks off. There should only be one adventurer per castle anyway.",
				animation: "kickRight",
			},
		],
	},
	HoodedAdventurer: {
		name: "Sable the Shrouded",
		dialogSteps: [
			{
				text: "You have traveled far, I sense, I can tell you seek truth in darkness...",
				animation: "yes",
			},
			{
				text: "I can help you on your quest for truth. I saw {accused} in the shadows. The {description} {action} tells me they are the guilty.",
				animation: "swordSlash",
				isTestimony: true,
				testimony: {
					title: "Spotted in the shadows",
					description: "{accused} with {description}, {action}",
					accusor: "Sable the Shrouded",
					accused: "{accused}",
					weapon: "{weapon}",
				},
			},
			{
				text: "Allow me to recuse myself, I have important business to achieve and you have a murderer to catch.",
				animation: "roll",
			},
		],
	},
	Man: {
		name: "Artie the Ordinary",
		dialogSteps: [
			{
				text: "Oh good, they've sent the authorities. It's been so scary having a murderer on the loose.",
				animation: "standing",
			},
			{
				text: "I saw {description}, {accused} was {action}. Suspicious indeed...",
				animation: "jump",
				isTestimony: true,
				testimony: {
					title: "Ordinary man's account",
					description: "{accused} {action} {description}",
					accusor: "Artie the Ordinary",
					accused: "{accused}",
					weapon: "{weapon}",
				},
			},
			{
				text: "I do hope you give this your most immediate attention. We deserve to feel safe.",
				animation: "sitting",
			},
		],
	},
	Shaun: {
		name: "Shaun the Strange",
		dialogSteps: [
			{
				text: "Oh Detective, you startled me! I'm quite exciteable so I carry around this mace with me, we are going through dark times in the castle.",
				animation: "duck",
			},
			{
				text: "Last night was so creepy! {accused} was {action}, I noticed {description}",
				animation: "punch",
				isTestimony: true,
				testimony: {
					title: "Strange saw something strange",
					description: "{accused} {action} {description}",
					accusor: "Shaun the Strange",
					accused: "{accused}",
					weapon: "{weapon}",
				},
			},
			{
				text: "Be careful detective, malicious forces are at work.",
				animation: "wave",
			},
		],
	},
	Witch: {
		name: "Wendeline the Witch",
		dialogSteps: [
			{
				text: "My crystal ball predicted you were due at any moment",
				animation: "interact",
			},
			{
				text: "Last night my visions reveald {accused} to me. In my minds eye I saw {description}. When I opened my eyes I saw {accused} {action}",

				animation: "punchLeft",
				isTestimony: true,
				testimony: {
					title: "Mystical Vision",
					description:
						"Wendeline's spirits showed {accused} with {descrption} while {action}",
					accusor: "Wendeline the Witch",
					accused: "{accused}",
					weapon: "{weapon}",
				},
			},
			{
				text: "Please catch them before there is another victim",
				animation: "death",
			},
		],
	},
	Wizard: {
		name: "Dorian the Gray Wizard",
		dialogSteps: [
			{
				text: "Ah yes strange one, you're hear to solve the case. Allow me to paint you a picture of last night",
				animation: "pickup",
			},
			{
				text: "Imagine this scenario. {accused} {action} and {description}. Can you imagine!? That is just what I saw",
				animation: "receiveHit",
				isTestimony: true,
				testimony: {
					title: "Picture of Last night's Events",
					description:
						"Scrying revealed {accused} {description}, they were {action}",
					accusor: "Dorian the Gray Wizard",
					accused: "{accused}",
					weapon: "{weapon}",
				},
			},
			{
				text: "The truth is magic, detective. We could all use a little bit of magic right now.",
				animation: "spell1",
			},
		],
	},
};
