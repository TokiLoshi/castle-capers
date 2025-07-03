import { Text } from "@react-three/drei";
import { Player } from "./Player";
import Bedroom from "./rooms/bedroom";
import Library from "./rooms/library";
import Kitchen from "./rooms/kitchen";
import Hall from "./rooms/hall";
import Outside from "./rooms/outside";
import { useGameStore, GAME_CONFIG } from "./store/gameStore";
import { ROOM_CLUES } from "./data/roomClues";
import Adventurer from "./characters/testimonies/Adventurer";
import HoodedAdventurer from "./characters/testimonies/HoodedAdventurer";
import Man from "./characters/testimonies/Man";
import Shaun from "./characters/testimonies/Shaun";
import Witch from "./characters/testimonies/Witch";
import Wizard from "./characters/testimonies/Wizard";
import GameOver from "./modals/GameOverModal";
import { StaticCollider } from "bvhecctrl";

export default function Room() {
	// get the clues from the game config
	const { currentClues, gameStarted, currentRoom } = useGameStore();

	if (!gameStarted) {
		return null;
	}

	const createClueToRoomMap = () => {
		const clueToRoomMap = {};
		Object.entries(ROOM_CLUES).forEach(([roomName, cluesArray]) => {
			cluesArray.forEach((clue) => {
				clueToRoomMap[clue.id] = roomName;
			});
		});
		return clueToRoomMap;
	};

	const clueToRoomMap = createClueToRoomMap();

	const getCluesForRoom = (roomName) => {
		const roomClues = {};

		Object.entries(currentClues).forEach(([clueId, clue]) => {
			const clueRoom = clueToRoomMap[clueId];
			if (clueRoom === roomName) {
				roomClues[clueId] = {
					...clue,
					room: clueRoom,
				};
			}
		});
		return roomClues;
	};

	const bedroomClues = getCluesForRoom("bedroom");
	const libraryClues = getCluesForRoom("library");
	const kitchenClues = getCluesForRoom("kitchen");

	return (
		<>
			{currentRoom === "bedroom" && (
				<>
					<StaticCollider>
						<Bedroom clues={bedroomClues} />
						<Adventurer position={[2.8, 0, 1]} />
						<HoodedAdventurer position={[-3.8, 0, -1]} />
					</StaticCollider>
				</>
			)}

			{currentRoom === "kitchen" && (
				<>
					<StaticCollider>
						<Kitchen clues={kitchenClues} />
						<Man position={[-4.7, 0, 1.2]} rotation={[0, -0.3, 0]} />
						<Shaun position={[2.8, 0, 1.5]} rotation={[0, -0.7, 0]} />
					</StaticCollider>
				</>
			)}
			{currentRoom === "library" && (
				<>
					<StaticCollider>
						<Library clues={libraryClues} />
						<Witch position={[0.8, 0, -3.1]} rotation={[0, -0.5, 0]} />
						<Wizard position={[-4.8, 0, -3.1]} rotation={[0, 0.7, 0]} />
					</StaticCollider>
				</>
			)}

			{currentRoom === "hall" && (
				<>
					<StaticCollider>
						<Hall />
					</StaticCollider>
				</>
			)}
		</>
	);
}
