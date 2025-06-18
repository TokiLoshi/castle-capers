import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";
import Bedroom from "./rooms/bedroom";
import {
	Box,
	CameraControls,
	ContactShadows,
	GizmoHelper,
	GizmoViewport,
	Grid,
	KeyboardControls,
	OrbitControls,
	PerspectiveCamera,
	Plane,
	Sky,
	Sphere,
	Stage,
	Stats,
	Text,
} from "@react-three/drei";
import { Shaun } from "./characters/Shaun";

export default function Experience() {
	// Camera
	const { cameraPosition, cameraTarget, fov } = useControls("Camera", {
		cameraPosition: { value: [5, 5, 5], step: 0.1 },
		cameraTarget: { value: [0, 0, 0], step: 0.1 },
		fov: { value: 75, min: 10, max: 120 },
	});

	// Lighting
	const {
		ambientIntensity,
		directionalIntensity,
		directionalPosition,
		enableShadows,
		shadowOpacity,
	} = useControls("Lighting", {
		ambientIntensity: { value: 1.0, min: 0, max: 2, step: 0.1 },
		directionalIntensity: { value: 1, min: 0, max: 3, step: 0.1 },
		directionalPosition: { value: [10, 10, 5], step: 0.5 },
		enableShadows: true,
		shadowOpacity: { value: 0.4, min: 0, max: 1, step: 0.1 },
	});

	// Grid:
	const { showGrid, gridSize, gridDivisions, gridColor, followCamera } =
		useControls("Grid", {
			showGrid: true,
			gridSize: { value: 20, min: 5, max: 50 },
			gridDivisions: { value: 20, min: 5, max: 50 },
			gridColor: "#ff0000",
			followCamera: false,
		});

	const shaunRef = useRef();
	useFrame((state) => {
		if (shaunRef.current) {
			const cameraPosition = new THREE.Vector3();
			const shaunPosition = shaunRef.current.position;
			cameraPosition.copy(shaunPosition);
			cameraPosition.z += 2.25;
			cameraPosition.y += 0.65;

			state.camera.position.lerp(cameraPosition, 0.1);
			state.camera.lookAt(shaunPosition);
		}
	});

	return (
		<>
			<PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />
			<OrbitControls
				target={cameraTarget}
				enablePan={true}
				enableZoom={true}
				enableRotat={true}
				minDistance={1}
				maxDistance={50}
			/>
			<GizmoHelper alignment='bottom-right' margin={[80, 80]}>
				<GizmoViewport
					axisColors={["red", "green", "blue"]}
					labelColor='black'
				/>
			</GizmoHelper>
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

			<Plane
				args={[30, 30]}
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -1, 0]}
				receiveShadow>
				<meshStandardMaterial color='#404040' roughness={0.8} metalness={0.1} />
			</Plane>
			<Shaun ref={shaunRef} />
			<ContactShadows
				position={[0, 0.01, 0]}
				opacity={shadowOpacity}
				scale={20}
				blur={2}
				far={10}
			/>

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

			{/* <TestCharacter position={[0, 1, 0]} color='orange' />
			<TestCharacter position={[3, 1, 0]} color='purple' />
			<TestCharacter position={[-3, 1, 0]} color='green' /> */}

			<Box args={[1, 1, 1]} position={[5, 0.5, 5]} castShadow>
				<meshStandardMaterial color='blue' />
			</Box>

			<Sphere args={[0.5]} position={[5, 0.5, 5]} castShadow>
				<meshStandardMaterial color='red' />
			</Sphere>

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

			<Text
				position={[0, 0.1, 5]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				+Z
			</Text>

			<Text
				position={[5, 0.1, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				+X
			</Text>
			<Bedroom />
		</>
	);
}

function Characters() {
	/* <Bedroom /> */
	/* <Kitchen /> */
	/* <AstroBee currentAnimation={selectedAnimation} /> */
	/* <AstroFrog /> */
	/* <AstroFlamingo /> */
	/* <Bluey /> */
	/* <Cactoro /> */
	/* <Demon /> */
	/* <Fish /> */
	/* <Ninja /> */
	/* <Panda /> */
	/* <Shaun /> */
	/* <Zombie /> */
}
