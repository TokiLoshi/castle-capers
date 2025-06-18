import { useControls } from "leva";
import * as THREE from "three";
import {
	GizmoHelper,
	GizmoViewport,
	PerspectiveCamera,
} from "@react-three/drei";
import Room from "./Room";
import { Player } from "./Player";
import Environment from "./Environment";
import { CameraController } from "./CameraController";
import { useRef } from "react";

export default function Experience() {
	// Camera
	const { cameraPosition, cameraTarget, fov } = useControls("Camera", {
		cameraPosition: { value: [5, 5, 5], step: 0.1 },
		cameraTarget: { value: [0, 0, 0], step: 0.1 },
		fov: { value: 75, min: 10, max: 120 },
	});

	const playerRef = useRef();

	return (
		<>
			<PerspectiveCamera
				makeDefault
				position={cameraPosition}
				target={cameraTarget}
				fov={fov}
			/>
			<CameraController target={playerRef} />
			{/* <OrbitControls
				enablePan={true}
				enableZoom={true}
				enableRotat={true}
				minDistance={1}
				maxDistance={50}
			/> */}
			<GizmoHelper alignment='bottom-right' margin={[80, 80]}>
				<GizmoViewport
					axisColors={["red", "green", "blue"]}
					labelColor='black'
				/>
			</GizmoHelper>
			<Environment />
			<Player />
			<Room />
		</>
	);
}
