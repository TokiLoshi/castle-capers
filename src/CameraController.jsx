import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CameraController({ target }) {
	useFrame((state) => {
		if (!target?.current) return;

		const playerPosition = target.current.position;
		const idealCameraPosition = new THREE.Vector3();

		idealCameraPosition.copy(playerPosition);
		idealCameraPosition.z += 3;
		idealCameraPosition.y += 1.5;

		// Smooth camera movement
		state.camera.position.lerp(idealCameraPosition, 0.1);
		state.camera.lookAt(playerPosition);
	});
	return null;
}
