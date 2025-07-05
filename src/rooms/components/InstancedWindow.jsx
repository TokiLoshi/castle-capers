import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export function InstancedWindow({ instances = [] }) {
	const { nodes, materials } = useGLTF("models/components/WindowBars.glb");
	const instancedMeshRef1 = useRef();
	const instancedMeshRef2 = useRef();
	const instancedMeshRef3 = useRef();

	useEffect(() => {
		if (
			instancedMeshRef1.current &&
			instancedMeshRef2.current &&
			instancedMeshRef3.current &&
			instances.length > 0
		) {
			// Set up the instances for all three mesh parts
			instances.forEach((instance, index) => {
				const matrix = new THREE.Matrix4();

				// Apply the group transformation (rotation and scale) first
				const groupMatrix = new THREE.Matrix4();
				groupMatrix.makeRotationX(Math.PI);
				groupMatrix.scale(new THREE.Vector3(100, 100, 5.973));

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
				instancedMeshRef3.current.setMatrixAt(index, matrix);
			});

			instancedMeshRef1.current.instanceMatrix.needsUpdate = true;
			instancedMeshRef2.current.instanceMatrix.needsUpdate = true;
			instancedMeshRef3.current.instanceMatrix.needsUpdate = true;
		}
	}, [instances]);

	return (
		<>
			{/* Window_Bars_1 instances */}
			<instancedMesh
				ref={instancedMeshRef1}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow>
				<bufferGeometry {...nodes.Window_Bars_1.geometry} />
				<meshStandardMaterial {...materials.Highlights} />
			</instancedMesh>

			{/* Window_Bars_2 instances */}
			<instancedMesh
				ref={instancedMeshRef2}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow>
				<bufferGeometry {...nodes.Window_Bars_2.geometry} />
				<meshStandardMaterial {...materials.Main} />
			</instancedMesh>

			{/* Window_Bars_3 instances */}
			<instancedMesh
				ref={instancedMeshRef3}
				args={[null, null, instances.length]}
				castShadow
				receiveShadow>
				<bufferGeometry {...nodes.Window_Bars_3.geometry} />
				<meshStandardMaterial {...materials.Metal} />
			</instancedMesh>
		</>
	);
}

useGLTF.preload("models/components/WindowBars.glb");
