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
import { useControls, folder } from "leva";

export default function Hall() {
	// const bedroomRef = useRef();
	// const libraryRef = useRef();
	// const kitchenRef = useRef();

	const { changeRoom } = useGameStore();
	const [hoveredDoor, setHoveredDoor] = useState(null);

	const {
		wall1Px,
		wall1Py,
		wall1Pz,
		wall1Rx,
		wall1Ry,
		wall1Rz,
		wall2Px,
		wall2Py,
		wall2Pz,
		wall2Rx,
		wall2Ry,
		wall2Rz,
		wall3Px,
		wall3Py,
		wall3Pz,
		wall3Rx,
		wall3Ry,
		wall3Rz,
		window1Px,
		window1Py,
		window1Pz,
		window1Rx,
		window1Ry,
		window1Rz,
		window2Px,
		window2Py,
		window2Pz,
		window2Rx,
		window2Ry,
		window2Rz,
	} = useControls({
		Walls: folder({
			// wall 1 Position
			wall1Px: { value: 2.9, min: -10, max: 10, step: 0.01 },
			wall1Py: { value: 0, min: -10, max: 10, step: 0.01 },
			wall1Pz: { value: -2, min: -10, max: 10, step: 0.01 },
			// wall 1 Rotation
			wall1RotationX: { value: 0, min: -3, max: 3, step: 0.01 },
			wall1RotationY: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
			wall1RotationZ: { value: 0, min: -3, max: 3, step: 0.01 },
			// wall 2 Position
			wall2Px: { value: -3, min: -10, max: 10, step: 0.01 },
			wall2Py: { value: 0, min: -10, max: 10, step: 0.01 },
			wall2Pz: { value: 4, min: -10, max: 10, step: 0.01 },
			// wall 2 Rotation
			wall2RotationX: { value: 0, min: -3, max: 3, step: 0.01 },
			wall2RotationY: { value: -Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
			wall2RotationZ: { value: 0, min: -3, max: 3, step: 0.01 },
			// wall 3 Position
			wall3Px: { value: 2.9, min: -10, max: 10, step: 0.01 },
			wall3Py: { value: 2.9, min: -10, max: 10, step: 0.01 },
			wall3Pz: { value: 2.9, min: -10, max: 10, step: 0.01 },
			// wall 3 Rotation
			wall3RotationX: { value: 0, min: -3, max: 3, step: 0.01 },
			wall3RotationY: { value: 0, min: -3, max: 3, step: 0.01 },
			wall3RotationZ: { value: 0, min: -3, max: 3, step: 0.01 },
		}),
	});

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
			<Wall position={[wall1Px, wall1Py, wall1Pz]} scale={3} />
			<Wall
				position={[wall2Px, wall2Py, wall2Pz]}
				scale={3}
				rotation={[wall2Rx, wall2Ry, wall2Rz]}
			/>
			<Wall
				position={[wall3Px, wall3Py, wall3Pz]}
				rotation={[wall3Rx, wall3Ry, wall3Rz]}
				scale={3}
			/>
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
			{/* <TrapDoor position={[3, 0, 2]} />
			<WallTower /> */}
		</>
	);
}
