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
import BVHEcctrl, { useEcctrlStore } from "bvhecctrl";
import { useFrame } from "@react-three/fiber";
import { button, useControls } from "leva";

export default function Experience() {
	// Camera
	// const { fov } = useControls("Camera", {
	// 	fov: { value: 75, min: 10, max: 120 },
	// });

	const flamingoRef = useRef();
	const cameraRef = useRef();

	const colliderMeshesArray = useEcctrlStore(
		(state) => state.colliderMeshesArray
	);

	const { initializeGame, gameStarted, currentClues } = useGameStore();

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

	useEffect(() => {
		console.log("Current clues: ", currentClues);
	}, [currentClues]);

	useFrame(() => {
		if (flamingoRef.current?.group && cameraRef.current) {
			const flamingo = flamingoRef.current.group.position;
			cameraRef.current.moveTo(flamingo.x, flamingo.y, flamingo.z, true);
		}
	});

	return (
		<>
			<Bvh>
				<Environment />

				<Room />
				{/* <CameraController
					ref={cameraControlsRef}
					enablePan={false}
					enableZoom={true}
					enableRotate={true}
					minDistance={2}
					maxDistance={20}
					// fov={fov}
				/> */}
				<CameraControls
					ref={cameraRef}
					colliderMeshes={colliderMeshesArray}
					smoothTime={0.1}
					makeDefault
				/>
				<BVHEcctrl
					ref={flamingoRef}
					debug={false}
					animated={true}
					position={[0, 1, 0]}>
					<FernandoTheFlamingo />
				</BVHEcctrl>
			</Bvh>
		</>
	);
}
