/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function AstroBee(props) {
	const group = useRef();
	const { nodes, materials, animations } = useGLTF(
		"models/characters/AstroBee.glb"
	);
	const { actions } = useAnimations(animations, group);


	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Root_Scene'>
				<group name='RootNode'>
					<group
						name='CharacterArmature'
						rotation={[-Math.PI / 2, 0, 0]}
						scale={60}>
						<primitive object={nodes.Root} />
					</group>
					<skinnedMesh
						name='BarbaraTheBee'
						geometry={nodes.BarbaraTheBee.geometry}
						material={materials.Atlas}
						skeleton={nodes.BarbaraTheBee.skeleton}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}
					/>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("models/characters/AstroBee.glb");
