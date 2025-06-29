import { ContactShadows, Grid, Plane } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

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

	// Grid:
	const { showGrid, gridSize, gridDivisions, gridColor, followCamera } =
		useControls(
			"Grid",
			{
				showGrid: true,
				gridSize: { value: 20, min: 5, max: 50 },
				gridDivisions: { value: 20, min: 5, max: 50 },
				gridColor: "#ff0000",
				followCamera: false,
			},
			{ collapsed: true }
		);

	return (
		<>
			<ambientLight intensity={ambientIntensity} />
			<directionalLight
				position={directionalPosition}
				intensity={directionalIntensity}
				castShadow={enableShadows}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-camera-far={50}
				shadow-camera-left={-20}
				// shaodw-camera-right={20}
				shadow-camera-top={20}
				shadow-camera-bottom={-20}
			/>
			<ContactShadows
				position={[0, 0.01, 0]}
				opacity={shadowOpacity}
				scale={20}
				blur={2}
				far={10}
			/>
			<Plane
				args={[30, 30]}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -1, 0]}
				receiveShadow>
				<meshStandardMaterial color='#404040' roughness={0.8} metalness={0.1} />
			</Plane>
			<mesh
				position={[0, -0.1, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				receiveShadow>
				<planeGeometry args={[30, 30]} />
				<meshStandardMaterial
					color='grey'
					roughness={0.8}
					metalness={0.3}
					side={THREE.DoubleSide}
				/>
			</mesh>
			{showGrid && (
				<Grid
					args={[gridSize, gridDivisions]}
					cellColor={gridColor}
					sectionColor={"#0000ff"}
					cellThickness={0.5}
					sectionThickness={1}
					followCamera={followCamera}
					infiniteGrid={true}
					fadeDistance={100}
					fadeStrength={1}
				/>
			)}
		</>
	);
}
