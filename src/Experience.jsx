import { useControls } from "leva";
import * as THREE from "three";
import {
	GizmoHelper,
	GizmoViewport,
	OrbitControls,
	PerspectiveCamera,
} from "@react-three/drei";
import Room from "./Room";
import { Player } from "./Player";
import Environment from "./Environment";
import { CameraController } from "./CameraController";
import { useEffect, useRef } from "react";
import { cameraPosition } from "three/tsl";
import { FernandoTheFlamingo } from "./characters/AstroFlamingo";
import { Physics } from "@react-three/rapier";
import { useGameStore } from "./store/gameStore";
import { Cactoro } from "./characters/Cactoro";

export default function Experience() {
	// Camera
	const { useCameraController, fov } = useControls("Camera", {
		useCameraController: true,
		// cameraPosition: { value: [5, 5, 5], step: 0.1 },
		// cameraTarget: { value: [0, 0, 0], step: 0.1 },
		fov: { value: 75, min: 10, max: 120 },
	});

	const playerRef = useRef();

	const { initializeGame, gameStarted, currentClues } = useGameStore();

	useEffect(() => {
		if (!gameStarted) {
			console.log("Initializing game...");
			initializeGame();
		}
	}, [gameStarted, initializeGame]);

	useEffect(() => {
		console.log("Current clues: ", currentClues);
	}, [currentClues]);

	return (
		<>
			<Physics>
				<FernandoTheFlamingo ref={playerRef} />
				<Cactoro />
				<PerspectiveCamera
					makeDefault
					position={useCameraController ? undefined : cameraPosition}
					// target={cameraTarget}
					fov={fov}
				/>
				<CameraController target={playerRef} />
				<OrbitControls
					enablePan={true}
					enableZoom={true}
					enableRotat={true}
					minDistance={1}
					maxDistance={50}
				/>
				<GizmoHelper alignment='bottom-right' margin={[80, 80]}>
					<GizmoViewport
						axisColors={["red", "green", "blue"]}
						labelColor='black'
					/>
				</GizmoHelper>
				<Environment />

				<Room />
			</Physics>
		</>
	);
}
