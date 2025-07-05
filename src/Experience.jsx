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
			flamingoRef.current?.resetLinVel();
		}),
	});

	useEffect(() => {
		if (!gameStarted) {
			initializeGame();
		}
	}, [gameStarted, initializeGame]);

	useEffect(() => {
		if (flamingoRef.current?.group && currentRoom) {
			const roomSpawnPositions = {
				hall: [0, 1, 1],
				bedroom: [0, 1, 1],
				kitchen: [0, 1, 1],
				library: [0, 1, -1.5],
			};
			const spawnPos = roomSpawnPositions[currentRoom] || [0, 1, 0];
			flamingoRef.current.group.position.set(...spawnPos);
			flamingoRef.current?.resetLinVel();
		}
	}, [currentRoom]);

	useFrame(() => {
		if (flamingoRef.current && flamingoRef.current.group && cameraRef.current) {
			cameraRef.current.moveTo(
				flamingoRef.current.group.position.x,
				flamingoRef.current.group.position.y + 0.5,
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
					minPolarAngle={-Math.PI * 0.5}
					maxPolarAngle={Math.PI / 2.2}
					minAzimuthAngle={-Math.PI * 0.1}
					maxAzimuthAngle={Math.PI * 0.1}
					maxDistance={4}
					minDistance={1}
				/>
				<BVHEcctrl
					ref={flamingoRef}
					animated={true}
					floatHeight={0}
					floatDamping={6}
					capsuleHalfHeight={1}
					debug={false}
					capsuleRadius={0.5}
					position={[0, 1.1, 0]}
					speed={1.6}
					linearDamping={3}
					grounded={true}
					angularDamping={3}>
					<FernandoTheFlamingo />
				</BVHEcctrl>
			</Bvh>
		</>
	);
}
