export const ALL_ROOMS = ["bedroom", "hall", "kitchen", "library"];

export const ROOM_CLUES = {
	bedroom: [
		{
			id: "bed1",
			title: "Exploding Feathers",
			description:
				"There are feathers everywhere. You wonder if the assailent stabbed the pillows and chased the victim. Someone left in a hurry and didn't make the bed, or clean up. What a mess...",
			murderers: ["Adventurer", "HoodedAdventurer"],
			clueType: "evidence",
			isClue: true,
		},
		{
			id: "bucket",
			title: "Congealed Bucket",
			description:
				"An iron bucket filled halfway with strange looking liquid. It smells bad, you want to move on.",
			clueType: "evidence",
			murderers: ["Man", "Witch"],
			isClue: true,
		},
		{
			id: "bottle",
			title: "Lonely Looking Bottle",
			description:
				"This bottle looks like it was part of a set, there might be one missing. You make a note to keep an eye out for broken glass.",
			clueType: "evidence",
			murderers: ["Wizard", "Shaun"],
			isClue: true,
		},
		{
			id: "Dairy",
			title: "Victim's Diary",
			description:
				"You open the book and it appears you have found the victims' diary. You open to the entry from last night, it reads: 'I hope she doesn't come back, everyone is afaid of her.'",
			clueType: "evidence",
			murderers: ["Adventurer", "Man"],
			isClue: true,
		},
		{
			id: "candlestick",
			title: "Marked Candlestick",
			description:
				"The candlestick appears to be grubby, marked with some red gooey stains, you reach out and touch it. It feels sticky, you pull your hand away, and hope whatever you touched was raspberry jam.",
			clueType: "evidence",
			murderers: ["HoodedAdventurer", "Wizard"],
			isClue: true,
		},
		{
			id: "cage",
			title: "Mysterious Cage",
			description:
				"An ornate cage sits empty, you wonder what the owners might have used it for.",
			clueType: "evidence",
			murderers: ["Witch", "Shaun"],
			isClue: true,
		},
		{
			id: "books",
			title: "Old book",
			description:
				"You don't have time to read, you have a murderer to catch! But you can see there is a log of finances, it appears the victim was in serious debt.",
			clueType: "evidence",
			murderers: ["Adventurers", "Witch"],
			isClue: true,
		},
		{
			id: "figure",
			title: "Training Pell",
			description:
				"You recall this thing is called a pell, you think to yourself how strange to have a training object in the bedroom, perhaps the victim was training for self-defence. Despite seeing sword marks in the pell, you don't see a sword anywhere in sight.",
			clueType: "evidence",
			murderers: ["Adventurer", "Man"],
			isClue: true,
		},
		{
			id: "chalice",
			title: "Strong Smelling Chalice",
			description:
				"Only a little liquid remains. It smells foul... What strange taste these humans have, it was either poisoned or had been fermenting for a long time.",
			clueType: "evidence",
			murderers: ["Wizard", "Shaun"],
			isClue: true,
		},
	],
	kitchen: [
		{
			id: "pourkegs",
			title: "Empty Pour Kegs",
			description:
				"They smell faintly of brewed apples and cinnamon, nothing like the other things you've smelled in this castle.",
			clueType: "evidence",
			murderers: ["Adventurer", "HoodedAdventurer"],
			isClue: true,
		},
		{
			id: "potions",
			title: "Possible Poison",
			description:
				"You recognize most of the smells, except one. You recoil, could it have been poison?",
			clueType: "evidence",
			murderers: ["Man", "Witch"],
			isClue: true,
		},
		{
			id: "standing-keg",
			title: "Filled with carrots",
			description:
				"You've never seen so many carrots before. You're surprised the inhabitants haven't turned orange, after all Flamingos are pink because of their diet.",
			clueType: "evidence",
			murderers: ["Wizard, Shaun"],
			isClue: true,
		},
		{
			id: "couldron",
			title: "Dusty Cauldron",
			description:
				"It's soot stained and still warm to the touch. Whoever was cooking must have some dust on them.",
			clueType: "evidence",
			murderers: ["Adventurer", "Man"],
			isClue: true,
		},
		{
			id: "Wooden Bucket",
			title: "Carrot Top Grave Yard",
			description:
				"It's full of carrot tops, and a herb, you know you've smelled that somewhere here already",
			clueType: "evidence",
			murderers: ["Hooded Adventurer"],
			isClue: true,
		},
		{
			id: "Sack",
			title: "Sack of Seeds",
			description:
				"It's full of carrot seeds, but you notice a hole a the back. This would be the perfect place to stash a murder weapon.",
			clueType: "evidence",
			murderers: ["Witch", "Shaun"],
			isClue: true,
		},
		{
			id: "Mug",
			title: "Dirty Mug",
			description:
				"It's been recently used, whoever used it didn't bother washing up",
			clueType: "evidence",
			murderers: ["Adventurer", "Witch"],
			isClue: true,
		},
		{
			id: "Fork",
			title: "Pointy Fork",
			description:
				"You tap the prongs, they're surprisingly sharp. Someone could probably do damage if they really wanted to.",
			clueType: "evidence",
			murderers: ["HoodedAdventurer", "Man"],
			isClue: true,
		},
		{
			id: "VegetableCrate",
			title: "Deceptive Veggie Crate",
			description:
				"You look past the carrots and discover a hidden drawer, the perfect place to hide the murder weapon. The kitchen is a dangerous place, you think.",
			clueType: "evidence",
			murderers: ["Wizard, Shaun"],
			isClue: true,
		},
	],
	library: [
		{
			id: "Bookstand",
			title: "Guest List",
			description:
				"You've discovered the guest list from last night. It has 'Shaun the Strange', 'Dorian the Grey Wizard', 'Artie the Ordinary', 'Sable the Hooded', 'Sable the Shrouded', and 'Wendeline the Witch'",
			clueType: "evidence",
			murderers: ["Adventurer", "HoodedAdventurer"],
			isClue: true,
		},
		{
			id: "Chain",
			title: "Suspicious Chain",
			description:
				"It looks heavy, and like it's been recently disturbed, someone wasn't done cleaning it.",
			clueType: "evidence",
			murderers: ["Man", "Witch"],
			isClue: true,
		},
		{
			id: "Scroll",
			title: "Secret Letter",
			description:
				"You're surprised to see it is for you. It reads, 'Dear Detective, thank you for traveling so far. If you've found this it is too late. I don't trust her, but I also don't trust any of them, maybe Shaun but probably not. Please find my murderer and avenge me.",
			clueType: "evidence",
			murderers: ["Wizard", "Shaun"],
			isClue: true,
		},
		{
			id: "Crate",
			title: "Solid Wooden Crate",
			description:
				"You try to open it but it appears locked. Fine, you think, keep your secrets.",
			clueType: "evidence",
			murderers: ["Adventurer", "Man"],
			isClue: true,
		},
		{
			id: "Anvil",
			title: "Well Used Anvil",
			description:
				"It's well used, possibly for sharpening a sword, you notice some steel filings on the floor nearby...",
			clueType: "evidence",
			murderers: ["HoodedAdventurer", "Wizard"],
			isClue: true,
		},
		{
			id: "Sword",
			title: "Recently Sharpened Sword",
			description:
				"It's sharp, and was recently being cleaned, but whoever was cleaning it must have been interrupted...",
			clueType: "evidence",
			murderers: ["Witch", "Shaun"],
			isClue: true,
		},
		{
			id: "potions",
			title: "Polyjuice or Polish",
			description:
				"You open it hoping for a pleasant aroma, you are disappointed. You've found cleaning agent for metal, possibly a form of polish.",
			clueType: "evidence",
			murderers: ["Adventurer", "Witch"],
			isClue: true,
		},
		{
			id: "Flag",
			title: "Decorated Flag",
			description:
				"An ornate flag with the crown's crest. You can tell the victim was proud of this place.",
			clueType: "evidence",
			murderers: ["HoodedAdventurer", "Man"],
			isClue: true,
		},
		{
			id: "Aromatic Pot",
			title:
				"It's filled to the brim with dried herbs, flowers, and dust. You sneeze.",
			description: "",
			clueType: "evidence",
			murderers: ["Wizard", "Shaun"],
			isClue: true,
		},
	],
};
