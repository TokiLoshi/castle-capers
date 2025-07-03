// import { useControls } from "leva";
import * as THREE from "three";
import {
	// GizmoHelper,
	// GizmoViewport,
	// OrbitControls,
	CameraControls,
	Bvh,
} from "@react-three/drei";
import Room from "./Room";
import Environment from "./Environment";
import { useEffect, useRef } from "react";
import { FernandoTheFlamingo } from "./characters/Monsters/AstroFlamingo";
import { useGameStore } from "./store/gameStore";
// import BVHEcctrl, { useEcctrlStore } from "bvhecctrl";
import BVHEcctrl from "bvhecctrl";
import { useFrame } from "@react-three/fiber";
import { button, useControls } from "leva";

export default function Experience() {
	// Camera
	// const { fov } = useControls("Camera", {
	// 	fov: { value: 75, min: 10, max: 120 },
	// });

	const flamingoRef = useRef();
	const cameraRef = useRef();

	// const colliderMeshesArray = useEcctrlStore(
	// 	(state) => state.colliderMeshesArray
	// );

	const { initializeGame, gameStarted, currentRoom } = useGameStore();

	useControls("Character: ", {
		ResetPlayer: button(() => {
			flamingoRef.current?.group?.position.set(0, 0, 0);
			flamingoRef.current?.resetLinvel();
		}),
	});

	useEffect(() => {
		if (!gameStarted) {
			console.log("Initializing game...");
			initializeGame();
		}
	}, [gameStarted, initializeGame]);

	// useEffect(() => {
	// 	console.log("Current clues: ", currentClues);
	// }, [currentClues]);

	useEffect(() => {
		if (flamingoRef.current?.group && currentRoom) {
			const roomSpawnPositions = {
				hall: [0, 0, 0],
				bedroom: [0, 0, 2],
				kitchen: [1, 0, 1],
				library: [0, 0, 2],
			};
			const spawnPos = roomSpawnPositions[currentRoom] || [0, 0, 0];
			flamingoRef.current.group.position.set(...spawnPos);
			flamingoRef.current?.resetLinVel();
			console.log("Moving Fernando");
		}
	}, [currentRoom]);

	useFrame(() => {
		if (flamingoRef.current && flamingoRef.current.group && cameraRef.current) {
			cameraRef.current.moveTo(
				flamingoRef.current.group.position.x,
				flamingoRef.current.group.position.y + 0.3,
				flamingoRef.current.group.position.z + 0.2,
				true
			);
		}
	});

	return (
		<>
			<Bvh>
				<Environment />

				<Room />
				<CameraControls
					ref={cameraRef}
					// colliderMeshes={colliderMeshesArray}
					smoothTime={0.1}
					makeDefault
				/>
				<BVHEcctrl
					ref={flamingoRef}
					debug={false}
					animated={true}
					floatHeight={0.1}
					capsuleHalfHeight={1.0}
					position={[0, 0, 0]}>
					<FernandoTheFlamingo />
				</BVHEcctrl>
			</Bvh>
		</>
	);
}
