/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Bluey(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF(
		"models/characters/Bluey.glb"
	);
	const { actions } = useAnimations(animations, group);

	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Root_Scene'>
				<group name='RootNode'>
					<group
						name='CharacterArmature'
						rotation={[-Math.PI / 2, 0, 0]}
						scale={50}>
						<primitive object={nodes.Root} />
					</group>
					<group name='Body_1' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<skinnedMesh
							name='Body_2'
							geometry={nodes.Body_2.geometry}
							material={materials.Main}
							skeleton={nodes.Body_2.skeleton}
						/>
						<skinnedMesh
							name='Body_3'
							geometry={nodes.Body_3.geometry}
							material={materials.Main_Light}
							skeleton={nodes.Body_3.skeleton}
						/>
						<skinnedMesh
							name='Body_4'
							geometry={nodes.Body_4.geometry}
							material={materials.Main2}
							skeleton={nodes.Body_4.skeleton}
						/>
					</group>
					<skinnedMesh
						name='Ears'
						geometry={nodes.Ears.geometry}
						material={materials.Main}
						skeleton={nodes.Ears.skeleton}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
					<group name='Head_1' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<skinnedMesh
							name='Head_2'
							geometry={nodes.Head_2.geometry}
							material={materials.Main}
							skeleton={nodes.Head_2.skeleton}
						/>
						<skinnedMesh
							name='Head_3'
							geometry={nodes.Head_3.geometry}
							material={materials.Main_Light}
							skeleton={nodes.Head_3.skeleton}
						/>
						<skinnedMesh
							name='Head_4'
							geometry={nodes.Head_4.geometry}
							material={materials.EyeColor}
							skeleton={nodes.Head_4.skeleton}
						/>
						<skinnedMesh
							name='Head_5'
							geometry={nodes.Head_5.geometry}
							material={materials.White}
							skeleton={nodes.Head_5.skeleton}
						/>
						<skinnedMesh
							name='Head_6'
							geometry={nodes.Head_6.geometry}
							material={materials.Black}
							skeleton={nodes.Head_6.skeleton}
						/>
					</group>
					<group name='Arms' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
						<skinnedMesh
							name='Arms_1'
							geometry={nodes.Arms_1.geometry}
							material={materials.Main}
							skeleton={nodes.Arms_1.skeleton}
						/>
						<skinnedMesh
							name='Arms_2'
							geometry={nodes.Arms_2.geometry}
							material={materials.Main_Light}
							skeleton={nodes.Arms_2.skeleton}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("models/characters/Bluey.glb");
