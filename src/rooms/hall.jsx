// import Crown from "../characters/Victim/Crown";
// import Wizard from "../characters/testimonies/Wizard";
import { Wall } from "./components/Wall";
import { ArchDoor } from "./components/ArchDoor";
import { DoorRound } from "./components/DoorRound";
import { TrapDoor } from "./components/TrapDoor";
import { Window } from "./components/Window";
import { WallTower } from "./components/WallTower";
import { useState } from "react";
import { useGameStore } from "../store/gameStore";

export default function Hall() {
	// const bedroomRef = useRef();
	// const libraryRef = useRef();
	// const kitchenRef = useRef();

	const { changeRoom } = useGameStore();
	const [hoveredDoor, setHoveredDoor] = useState(null);

	const handleDoorClick = (roomName) => {
		console.log(`Clicked door to ${roomName}`);
		changeRoom(roomName);
	};

	const handleDoorHover = (doorName) => {
		setHoveredDoor(doorName);
		console.log(`Hovered over: ${doorName}`);
		document.body.style.cursor = "pointer";
	};

	const handleDoorHoverOut = () => {
		setHoveredDoor(null);
		console.log("Hovered out");
		document.body.style.cursor = "grab";
	};

	return (
		<>
			<Wall position={[2, 0, -2]} scale={4} />
			<Window position={[-4, 0, -2]} />
			<ArchDoor position={[-2, 0, 3]} />
			<DoorRound
				position={[2, 0, 3]}
				onPointerOver={() => handleDoorHover("bedroom")}
				onPointerOut={() => handleDoorHoverOut()}
				onClick={() => handleDoorClick("bedroom")}
				isHovered={hoveredDoor === "bedroom"}
			/>
			<DoorRound
				position={[2, 0, 5]}
				onPointerOver={() => handleDoorHover("library")}
				onPointerOut={() => handleDoorHoverOut()}
				onClick={() => handleDoorClick("library")}
				isHovered={hoveredDoor === "library"}
			/>
			<DoorRound
				position={[2, 0, 7]}
				onPointerOver={() => handleDoorHover("kitchen")}
				onPointerOut={() => handleDoorHoverOut()}
				onClick={() => handleDoorClick("kitchen")}
				isHovered={hoveredDoor === "kitchen"}
			/>
			<TrapDoor position={[3, 0, 2]} />
			<WallTower />
		</>
	);
}
