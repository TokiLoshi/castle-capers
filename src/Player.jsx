import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef } from "react";
import * as THREE from "three";

export const Player = forwardRef(function Player(
	{ position = [0, 0, 0] },
	playerRef
) {
	const [, get] = useKeyboardControls();
	useFrame((state, delta) => {
		if (!playerRef?.current) return;

		const { forward, backward, leftward, rightward } = get();
		const velocity = new THREE.Vector3();

		if (forward) velocity.z -= 1;
		if (backward) velocity.z += 1;
		if (rightward) velocity.x += 1;
		if (leftward) velocity.x -= 1;

		if (velocity.length() > 0) {
			velocity.normalize();
			velocity.multiplyScalar(delta * 5);
			playerRef.current.position.add(velocity);
		}
	});
	console.log("Player ref: ", playerRef);
	return (
		<group ref={playerRef} position={position}>
			<mesh position={[0, 0.5, 0]} castShadow>
				<boxGeometry args={[0.5, 1, 0.5]} />
				<meshStandardMaterial color='orange' />
			</mesh>
			<mesh position={[0, 1.2, 0]} castShadow>
				<sphereGeometry args={[0.3]} />
				<meshStandardMaterial color='peachpuff' />
			</mesh>
		</group>
	);
});
