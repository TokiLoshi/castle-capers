import { ContactShadows, Stars, useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import * as THREE from "three";
import { StaticCollider } from "bvhecctrl";

export default function Environment() {
	// Lighting
	const {
		ambientIntensity,
		directionalIntensity,
		directionalPosition,
		enableShadows,
		shadowOpacity,
	} = useControls(
		"Lighting",
		{
			ambientIntensity: { value: 1.0, min: 0, max: 2, step: 0.1 },
			directionalIntensity: { value: 1, min: 0, max: 3, step: 0.1 },
			directionalPosition: { value: [10, 10, 5], step: 0.5 },
			enableShadows: true,
			shadowOpacity: { value: 0.4, min: 0, max: 1, step: 0.1 },
		},
		{ collapsed: true }
	);

	// Floor materials
	const {
		floorRepeat,
		floorRoughness,
		floorMetalness,
		displacementScale,
		normalScale,
	} = useControls(
		"Floor Material",
		{
			useTextures: true,
			floorRepeat: { value: 10, min: 1, max: 20, step: 1 },
			floorRoughness: { value: 0.9, min: 0, max: 1, step: 0.01 },
			floorMetalness: { value: 0.1, min: 0, max: 1, step: 0.01 },
			displacementScale: { value: 0.05, min: 0, max: 0.1, step: 0.01 },
			normalScale: { value: 0.5, min: 0, max: 2, step: 0.1 },
		},
		{ collapsed: true }
	);

	const textures = useTexture([
		"/textures/woodenfloor/Stylized_Wood_Planks_002_basecolor.png",
		"/textures/woodenfloor/Stylized_Wood_Planks_002_normal.png",
		"/textures/woodenfloor/Stylized_Wood_Planks_002_roughness.png",
		"/textures/woodenfloor/Stylized_Wood_Planks_002_ambientOcclusion.png",
		"/textures/woodenfloor/Stylized_Wood_Planks_002_height.png",
	]);

	const [
		baseColorMap,
		normalMap,
		roughnessMap,
		ambientOcclusionMap,
		heightMap,
	] = textures;

	useEffect(() => {
		[
			baseColorMap,
			normalMap,
			roughnessMap,
			ambientOcclusionMap,
			heightMap,
		].forEach((texture) => {
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set(floorRepeat, floorRepeat);
			texture.needsUpdate = true;
		});
	}, [
		floorRepeat,
		baseColorMap,
		normalMap,
		roughnessMap,
		ambientOcclusionMap,
		heightMap,
	]);

	return (
		<>
			<ambientLight intensity={ambientIntensity} />
			<directionalLight
				position={directionalPosition}
				intensity={directionalIntensity}
				castShadow={enableShadows}
				shadow-mapSize-width={1024}
				shadow-mapSize-height={1024}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-top={20}
				shadow-camera-bottom={-20}
			/>
			<Stars
				radius={100}
				depth={50}
				count={5000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>

			<ContactShadows
				position={[0, 0.01, 0]}
				opacity={shadowOpacity}
				scale={20}
				blur={2}
				far={10}
			/>

			<StaticCollider>
				<mesh
					position={[0, 0, 0]}
					rotation={[-Math.PI / 2, 0, 0]}
					receiveShadow>
					<planeGeometry args={[20, 20]} />

					<meshStandardMaterial
						map={baseColorMap}
						normalMap={normalMap}
						roughnessMap={roughnessMap}
						aoMap={ambientOcclusionMap}
						displacementMap={heightMap}
						displacementScale={displacementScale}
						normalScale={[normalScale, normalScale]}
						roughness={floorRoughness}
						metalness={floorMetalness}
					/>
				</mesh>
			</StaticCollider>
		</>
	);
}
