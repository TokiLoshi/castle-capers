import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export function InstancedDoor({ instances = [] }) {
	const { nodes, materials } = useGLTF("models/components/DoorRound.glb");
	const instancedMeshRef1 = useRef();
	const instancedMeshRef2 = useRef();
	const instancedMeshRef3 = useRef();
	const instancedMeshRef4 = useRef();

	useEffect(() => {
		if (instancedMeshRef1.current && instancedMeshRef2.current && instancedMeshRef3.current && instancedMeshRef4.current && instances.length > 0) {
			// Set up the instances for all four mesh parts
			instances.forEach((instance, index) => {
				const matrix = new THREE.Matrix4();
				
				// Apply the group transformation (rotation and scale) first
				const groupMatrix = new THREE.Matrix4();
				groupMatrix.makeRotationX(-Math.PI / 2);
				groupMatrix.scale(new THREE.Vector3(100, 100, 100));
				
				// Then apply the instance transformation
				const instanceMatrix = new THREE.Matrix4();
				instanceMatrix.compose(
					new THREE.Vector3(instance.position[0], instance.position[1], instance.position[2]),
					new THREE.Quaternion().setFromEuler(new THREE.Euler(instance.rotation[0], instance.rotation[1], instance.rotation[2])),
					new THREE.Vector3(instance.scale || 1, instance.scale || 1, instance.scale || 1)
				);
				
				// Combine the matrices
				matrix.multiplyMatrices(instanceMatrix, groupMatrix);
				
				instancedMeshRef1.current.setMatrixAt(index, matrix);
				instancedMeshRef2.current.setMatrixAt(index, matrix);
				instancedMeshRef3.current.setMatrixAt(index, matrix);
				instancedMeshRef4.current.setMatrixAt(index, matrix);
			});
			
			instancedMeshRef1.current.instanceMatrix.needsUpdate = true;
			instancedMeshRef2.current.instanceMatrix.needsUpdate = true;
			instancedMeshRef3.current.instanceMatrix.needsUpdate = true;
			instancedMeshRef4.current.instanceMatrix.needsUpdate = true;
		}
	}, [instances]);

	return (
		<>
			{/* Door_Round_1 instances */}
			<instancedMesh
				ref={instancedMeshRef1}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow
			>
				<bufferGeometry {...nodes.Door_Round_1.geometry} />
				<meshStandardMaterial {...materials.Stone_Dark} />
			</instancedMesh>
			
			{/* Door_Round_2 instances */}
			<instancedMesh
				ref={instancedMeshRef2}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow
			>
				<bufferGeometry {...nodes.Door_Round_2.geometry} />
				<meshStandardMaterial {...materials.Wood} />
			</instancedMesh>
			
			{/* Door_Round_3 instances */}
			<instancedMesh
				ref={instancedMeshRef3}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow
			>
				<bufferGeometry {...nodes.Door_Round_3.geometry} />
				<meshStandardMaterial {...materials.Wood_Light} />
			</instancedMesh>
			
			{/* Door_Round_4 instances */}
			<instancedMesh
				ref={instancedMeshRef4}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow
			>
				<bufferGeometry {...nodes.Door_Round_4.geometry} />
				<meshStandardMaterial {...materials.Stone_Light} />
			</instancedMesh>
		</>
	);
}

useGLTF.preload("models/components/DoorRound.glb"); 