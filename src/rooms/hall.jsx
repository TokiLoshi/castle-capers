import { InstancedWall } from "./components/InstancedWall";
import { DoorRound } from "./components/DoorRound";
import { InstancedWindow } from "./components/InstancedWindow";
import { useState } from "react";
import { useGameStore } from "../store/gameStore";
import { useControls, folder } from "leva";

export default function Hall() {
	const { changeRoom } = useGameStore();
	const [hoveredDoor, setHoveredDoor] = useState(null);

	const {
		door1Px,
		door1Py,
		door1Pz,
		door1Rx,
		door1Ry,
		door1Rz,
		door2Px,
		door2Py,
		door2Pz,
		door2Rx,
		door2Ry,
		door2Rz,
		door3Px,
		door3Py,
		door3Pz,
		door3Rx,
		door3Ry,
		door3Rz,
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
		wall4Px,
		wall4Py,
		wall4Pz,
		wall4Rx,
		wall4Ry,
		wall4Rz,
		wall5Px,
		wall5Py,
		wall5Pz,
		wall5Rx,
		wall5Ry,
		wall5Rz,
		wall6Px,
		wall6Py,
		wall6Pz,
		wall6Rx,
		wall6Ry,
		wall6Rz,
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
		Doors: folder(
			{
				// Door 1
				door1Px: { value: 2.9, min: -10, max: 10, step: 0.01 },
				door1Py: { value: 0, min: -10, max: 10, step: 0.01 },
				door1Pz: { value: 1, min: -10, max: 10, step: 0.01 },
				door1Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				door1Ry: { value: -1.5, min: -10, max: 10, step: 0.01 },
				door1Rz: { value: 0, min: -10, max: 10, step: 0.01 },
				door1Scale: { value: 0.5, min: -1, max: 10, step: 0.01 },
				// Door 2
				door2Px: { value: -0.5, min: -10, max: 10, step: 0.01 },
				door2Py: { value: 0, min: -10, max: 10, step: 0.01 },
				door2Pz: { value: -3.5, min: -10, max: 10, step: 0.01 },
				door2Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				door2Ry: { value: 0, min: -10, max: 10, step: 0.01 },
				door2Rz: { value: 0, min: -10, max: 10, step: 0.01 },
				door2Scale: { value: 0.5, min: -1, max: 10, step: 0.01 },
				// Door 3
				door3Px: { value: -3.8, min: -10, max: 10, step: 0.01 },
				door3Py: { value: 0, min: -10, max: 10, step: 0.01 },
				door3Pz: { value: -1.2, min: -10, max: 10, step: 0.01 },
				door3Scale: { value: 0.5, min: -1, max: 10, step: 0.01 },
				door3Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				door3Ry: { value: -4.6, min: -10, max: 10, step: 0.01 },
				door3Rz: { value: 0, min: -10, max: 10, step: 0.01 },
			},
			{ collapsed: true }
		),
		Walls: folder(
			{
				// wall 1 Position
				wall1Px: { value: 3.85, min: -10, max: 10, step: 0.01 },
				wall1Py: { value: 0, min: -10, max: 10, step: 0.01 },
				wall1Pz: { value: -1.9, min: -10, max: 10, step: 0.01 },
				// wall 1 Rotation
				wall1Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				wall1Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				wall1Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// wall 2 Position
				wall2Px: { value: -4.7, min: -10, max: 10, step: 0.01 },
				wall2Py: { value: 0, min: -10, max: 10, step: 0.01 },
				wall2Pz: { value: -2, min: -10, max: 10, step: 0.01 },
				// wall 2 Rotation
				wall2Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				wall2Ry: { value: -Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				wall2Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// wall 3 Position
				wall3Px: { value: -2.4, min: -10, max: 10, step: 0.01 },
				wall3Py: { value: 0, min: -10, max: 10, step: 0.01 },
				wall3Pz: { value: -4, min: -10, max: 10, step: 0.01 },
				// wall 3 Rotation
				wall3Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				wall3Ry: { value: 0, min: -3, max: 3, step: 0.01 },
				wall3Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// wall 4 Position
				wall4Px: { value: 3.85, min: -10, max: 10, step: 0.01 },
				wall4Py: { value: 0, min: -10, max: 10, step: 0.01 },
				wall4Pz: { value: 1.99, min: -10, max: 10, step: 0.01 },
				// wall 4 Rotation
				wall4Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				wall4Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				wall4Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// wall 5 Position
				wall5Px: { value: 3.85, min: -10, max: 10, step: 0.01 },
				wall5Py: { value: 0, min: -10, max: 10, step: 0.01 },
				wall5Pz: { value: 5.9, min: -10, max: 10, step: 0.01 },
				// wall 5 Rotation
				wall5Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				wall5Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				wall5Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// wall 6 Position
				wall6Px: { value: -4.2, min: -10, max: 10, step: 0.01 },
				wall6Py: { value: 0, min: -10, max: 10, step: 0.01 },
				wall6Pz: { value: 5.9, min: -10, max: 10, step: 0.01 },
				// wall 6 Rotation
				wall6Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				wall6Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				wall6Rz: { value: 0, min: -3, max: 3, step: 0.01 },
			},
			{ collapsed: true }
		),
		Windows: folder(
			{
				window1Px: { value: 1.5, min: -10, max: 10, step: 0.01 },
				window1Py: { value: 0, min: -10, max: 10, step: 0.01 },
				window1Pz: { value: -4, min: -10, max: 10, step: 0.01 },
				// window 1 rotation
				window1Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				window1Ry: { value: 0, min: -10, max: 10, step: 0.01 },
				window1Rz: { value: 0, min: -10, max: 10, step: 0.01 },
				// window 2 position
				window2Px: { value: -4.2, min: -20, max: 20, step: 0.01 },
				window2Py: { value: 0, min: -20, max: 20, step: 0.01 },
				window2Pz: { value: 2.0, min: -20, max: 20, step: 0.01 },
				// window 2 rotation
				window2Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				window2Ry: { value: 1.57, min: -10, max: 10, step: 0.01 },
				window2Rz: { value: 0, min: -10, max: 10, step: 0.01 },
			},
			{ collapsed: true }
		),
	});

	const handleDoorClick = (roomName) => {
		changeRoom(roomName);
	};

	const handleDoorHover = (doorName) => {
		setHoveredDoor(doorName);
		document.body.style.cursor = "pointer";
	};

	const handleDoorHoverOut = () => {
		setHoveredDoor(null);
		document.body.style.cursor = "grab";
	};

	return (
		<>
			<InstancedWall
				instances={[
					{
						position: [wall1Px, wall1Py, wall1Pz],
						rotation: [wall1Rx, wall1Ry, wall1Rz],
						scale: 2,
					},
					{
						position: [wall2Px, wall2Py, wall2Pz],
						rotation: [wall2Rx, wall2Ry, wall2Rz],
						scale: 2,
					},
					{
						position: [wall3Px, wall3Py, wall3Pz],
						rotation: [wall3Rx, wall3Ry, wall3Rz],
						scale: 2,
					},
					{
						position: [wall4Px, wall4Py, wall4Pz],
						rotation: [wall4Rx, wall4Ry, wall4Rz],
						scale: 2,
					},
					{
						position: [wall5Px, wall5Py, wall5Pz],
						rotation: [wall5Rx, wall5Ry, wall5Rz],
						scale: 2,
					},
					{
						position: [wall6Px, wall6Py, wall6Pz],
						rotation: [wall6Rx, wall6Ry, wall6Rz],
						scale: 2,
					},
				]}
			/>

			<InstancedWindow
				instances={[
					{
						position: [window1Px, window1Py, window1Pz],
						rotation: [window1Rx, window1Ry, window1Rz],
						scale: 2,
					},
					{
						position: [window2Px, window2Py, window2Pz],
						rotation: [window2Rx, window2Ry, window2Rz],
						scale: 2,
					},
				]}
			/>

			<DoorRound
				position={[door1Px, door1Py, door1Pz]}
				rotation={[door1Rx, door1Ry, door1Rz]}
				onPointerOver={() => handleDoorHover("bedroom")}
				onPointerOut={() => handleDoorHoverOut()}
				onClick={() => handleDoorClick("bedroom")}
				isHovered={hoveredDoor === "bedroom"}
				scale={3}
			/>

			<DoorRound
				position={[door2Px, door2Py, door2Pz]}
				rotation={[door2Rx, door2Ry, door2Rz]}
				onPointerOver={() => handleDoorHover("library")}
				onPointerOut={() => handleDoorHoverOut()}
				onClick={() => handleDoorClick("library")}
				isHovered={hoveredDoor === "library"}
				scale={3}
			/>

			<DoorRound
				position={[door3Px, door3Py, door3Pz]}
				rotation={[door3Rx, door3Ry, door3Rz]}
				onPointerOver={() => handleDoorHover("kitchen")}
				onPointerOut={() => handleDoorHoverOut()}
				onClick={() => handleDoorClick("kitchen")}
				isHovered={hoveredDoor === "kitchen"}
				scale={3}
			/>

			<mesh position={[0, 1, 4]} visible={false}>
				<boxGeometry args={[8, 3, 0.2]} />
				<meshBasicMaterial transparent opacity={0} />
			</mesh>
		</>
	);
}
