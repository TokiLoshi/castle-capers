import { useGLTF } from "@react-three/drei";
import { StaticCollider } from "bvhecctrl";
import { useRef, useEffect } from "react";
import * as THREE from "three";

// Thanks to nallovint for the instancing adds for performance improvements
export function InstancedWall({ instances = [] }) {
	const { nodes, materials } = useGLTF("models/components/Wall.glb");
	const instancedMeshRef1 = useRef();
	const instancedMeshRef2 = useRef();

	useEffect(() => {
		if (
			instancedMeshRef1.current &&
			instancedMeshRef2.current &&
			instances.length > 0
		) {
			// Set up the instances for Wall_1
			instances.forEach((instance, index) => {
				const matrix = new THREE.Matrix4();

				// Apply the group transformation (rotation and scale) first
				const groupMatrix = new THREE.Matrix4();
				groupMatrix.makeRotationX(-Math.PI / 2);
				groupMatrix.scale(new THREE.Vector3(100, 100, 100));

				// Then apply the instance transformation
				const instanceMatrix = new THREE.Matrix4();
				instanceMatrix.compose(
					new THREE.Vector3(
						instance.position[0],
						instance.position[1],
						instance.position[2]
					),
					new THREE.Quaternion().setFromEuler(
						new THREE.Euler(
							instance.rotation[0],
							instance.rotation[1],
							instance.rotation[2]
						)
					),
					new THREE.Vector3(
						instance.scale || 1,
						instance.scale || 1,
						instance.scale || 1
					)
				);

				// Combine the matrices
				matrix.multiplyMatrices(instanceMatrix, groupMatrix);

				instancedMeshRef1.current.setMatrixAt(index, matrix);
				instancedMeshRef2.current.setMatrixAt(index, matrix);
			});
			instancedMeshRef1.current.instanceMatrix.needsUpdate = true;
			instancedMeshRef2.current.instanceMatrix.needsUpdate = true;
		}
	}, [instances]);

	return (
		<>
			{/* Wall_1 instances */}

			<instancedMesh
				ref={instancedMeshRef1}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow>
				<bufferGeometry {...nodes.Wall_1.geometry} />
				<meshStandardMaterial {...materials.Highlights} />
			</instancedMesh>

			{/* Wall_2 instances */}
			<instancedMesh
				ref={instancedMeshRef2}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow>
				<bufferGeometry {...nodes.Wall_2.geometry} />
				<meshStandardMaterial {...materials.Main} />
			</instancedMesh>

			{/* added to resolve walking through windows */}
			{instances.map((instance, index) => (
				<mesh
					key={index}
					position={[
						instance.position[0],
						instance.position[1] + 2,
						instance.position[2],
					]}
					rotation={[
						instance.rotation[0],
						instance.rotation[1],
						instance.rotation[2],
					]}
					scale={[
						instance.scale || 1,
						instance.scale || 1,
						instance.scale || 1,
					]}
					visible={false}>
					<boxGeometry args={[4, 4, 0.5]} />
					<meshBasicMaterial transparent opacity={0} />
				</mesh>
			))}
		</>
	);
}

useGLTF.preload("models/components/Wall.glb");
