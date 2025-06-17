import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping, DoubleSide } from "three";
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
import { Suspense } from "react";
import { useControls } from "leva";
import Bedroom from "./rooms/bedroom";
import { Library } from "./rooms/library";
import { Kitchen } from "./rooms/kitchen";
import { AstroBee } from "./characters/Astrobee";
import { AstroFrog } from "./characters/Astrofrog";
import { AstroFlamingo } from "./characters/AstroFlamingo";

import { Bluey } from "./characters/Bluey";
import { Cactoro } from "./characters/Cactoro";
import { Demon } from "./characters/Demon";
import { Fish } from "./characters/Fish";
import { Ninja } from "./characters/Ninja";
import { Panda } from "./characters/Panda";
import { Shaun } from "./characters/Shaun";
import { Zombie } from "./characters/Zombie";
import * as THREE from "three";

// import { useRef } from "react";

function TestCharacter({ position = [0, 1, 0], color = "orange" }) {
	const { characterColor } = useControls("Test Character", {
		characterColor: color,
	});
	return (
		<group position={position}>
			<Sphere args={[0.5]} position={[0, 1.5, 0]} castShadow>
				<meshStandardMaterial color={characterColor} />
			</Sphere>
			<Box args={[1, 2, 0.5]} position={[0, 0, 0]} castShadow>
				<meshStandardMaterial color={characterColor} />
			</Box>
			<Box args={[0.2, 0.2, 1]} position={[0, 1, 0.75]} castShadow>
				<meshStandardMaterial color='red' />
			</Box>
			<Text
				position={[0, 3, 0]}
				fontSize={0.5}
				color='white'
				anchorX='center'
				anchorY='middle'>
				Test Character
			</Text>
		</group>
	);
}

function Scene() {
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
		</>
	);
}

function AnimationTest() {
	const { selectedAnimation } = useControls("AstroBeeAnimation", {
		selectedAnimation: {
			value: "idle",
			options: [
				"idle",
				"yes",
				"death",
				"duck",
				"hitReact",
				"idleGun",
				"jump",
				"jumpIdle",
				"jumpLand",
				"no",
				"punch",
				"run",
				"runGun",
				"runGunShoot",
				"walk",
				"walkGun",
				"wave",
				"weapon",
			],
		},
	});
	console.log("SelectedAnimation: ", selectedAnimation);
}

export default function App() {
	const { showStats, toneMappingEnabled } = useControls("Debug", {
		showStats: true,
		toneMappingEnabled: true,
	});
	return (
		<>
			<KeyboardControls
				map={[
					{ name: "forward", keys: ["ArrowUp", "KeyW"] },
					{ name: "backward", keys: ["ArrowDown", "KeyS"] },
					{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
					{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
					{ name: "jump", keys: ["Space"] },
				]}>
				{showStats && <Stats />}
				<Canvas
					shadows
					camera={{ position: [5, 5, 5], fov: 75 }}
					gl={{
						toneMapping: toneMappingEnabled
							? ACESFilmicToneMapping
							: THREE.NoToneMapping,
					}}>
					<OrbitControls />
					<ambientLight intensity={0.25} />
					<Suspense fallback={null}>
						<Scene />
						<AnimationTest />
						{/* <Stage
						preset='rembrandt'
						// options: ["rembrandt", "portrait", "upfront", "soft"]
						intensity={1}
						contactShadow={true}
						shadows> */}
						<mesh
							position={[0, -0.1, 0]}
							rotation={[-Math.PI / 2, 0, 0]}
							receiveShadow>
							<planeGeometry args={[30, 30]} />
							<meshStandardMaterial
								color='yellow'
								roughness={0.8}
								metalness={0.3}
								side={DoubleSide}
							/>
						</mesh>
						<Shaun />
						{/* </Stage> */}
					</Suspense>
				</Canvas>
			</KeyboardControls>
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
