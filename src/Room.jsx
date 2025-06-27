import { Text } from "@react-three/drei";
import { Player } from "./Player";
import Bedroom from "./rooms/bedroom";
import Library from "./rooms/library";
import Kitchen from "./rooms/kitchen";
import Hall from "./rooms/hall";
import Outside from "./rooms/outside";
import { useGameStore, GAME_CONFIG } from "./store/gameStore";
import { ROOM_CLUES } from "./data/roomClues";

export default function Room() {
	// get the clues from the game config
	const { currentClues, gameStarted } = useGameStore();

	if (!gameStarted) {
		console.log("Game not started, returning");
		return null;
	}
	console.log("DEBUGGING!");
	console.log("Current Clues: ", currentClues);
	console.log("Current clues keys: ", Object.keys(currentClues));

	const createClueToRoomMap = () => {
		const clueToRoomMap = {};
		Object.entries(ROOM_CLUES).forEach(([roomName, cluesArray]) => {
			cluesArray.forEach((clue) => {
				clueToRoomMap[clue.id] = roomName;
			});
		});
		console.log("Clue to room map: ", clueToRoomMap);
		return clueToRoomMap;
	};

	const clueToRoomMap = createClueToRoomMap();

	const getCluesForRoom = (roomName) => {
		const roomClues = {};

		Object.entries(currentClues).forEach(([clueId, clue]) => {
			const clueRoom = clueToRoomMap[clueId];
			console.log(`Clue ${clueId} belongs to room: ${clueRoom} `);
			if (clueRoom === roomName) {
				console.log(`Adding clue ${clueId} to ${roomName}`);
				roomClues[clueId] = {
					...clue,
					room: clueRoom,
				};
			}
		});
		return roomClues;
	};

	const bedroomClues = getCluesForRoom("bedroom");
	console.log("Bedroom clues: ", bedroomClues);
	const libraryClues = getCluesForRoom("library");
	console.log("Library Clues: ", libraryClues);
	const kitchenClues = getCluesForRoom("kitchen");
	console.log("Kitchen clues: ", kitchenClues);

	// pass them down as props to the room
	// generate a track of which room is loaded
	// Conditionally render the models based on whether the room is loaded
	const currentRoom = "bedroom";

	console.log("Available rooms in ROOM_CLUES: ", Object.keys(ROOM_CLUES));
	console.log("Current clues count: ", Object.keys(currentClues).length);

	return (
		<>
			<Text
				position={[0, 0.1, 5]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				NORTH (+Z)
			</Text>
			<Text
				position={[0, 0.1, -5]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				SOUTH (-Z)
			</Text>

			<Text
				position={[6, 0.1, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				EAST (+X)
			</Text>
			<Text
				position={[-7, 0.1, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				WEST (-X)
			</Text>
			{currentRoom === "bedroom" && <Bedroom clues={bedroomClues} />}
			{currentRoom === "library" && <Library clues={libraryClues} />}
			{currentRoom === "kitchen" && <Kitchen clues={kitchenClues} />}
			{/* <Bedroom clues={bedroomClues} /> */}
			{/* <Library /> */}
			{/* <Hall /> */}
			{/* <Kitchen /> */}
			{/* <Outside /> */}
		</>
	);
}
