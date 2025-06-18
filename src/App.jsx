import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import {
	KeyboardControls,
	OrbitControls,
	Stage,
	Stats,
} from "@react-three/drei";
import { Suspense } from "react";
import { useControls } from "leva";
import Bedroom from "./rooms/bedroom";
import { Library } from "./rooms/library";
import { Kitchen } from "./rooms/kitchen";
import { AstroBee } from "./characters/Astrobee";
import { AstroFrog } from "./characters/AstroFrog";
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
import Experience from "./Experience";

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
					<ambientLight intensity={0.5} />
					<directionalLight position={[5, 5, 5]} intensity={1} />
					<directionalLight position={[-5, 5, 5]} intensity={1} />
					<Suspense fallback={null}>
						<Experience />
					</Suspense>
				</Canvas>
			</KeyboardControls>
		</>
	);
}
