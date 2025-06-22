import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { KeyboardControls, OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import Experience from "./Experience";
import ClueModal from "./modals/ClueModal";
import Notebook from "./modals/Notebook";
import UIBar from "./modals/UIBar";
import Testimonials from "./modals/Testimonials";
import SolveModal from "./modals/SolveModal";

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
				<Leva collapsed={true} />
			</KeyboardControls>
			<UIBar />
			<ClueModal />
			<Notebook />
			<Testimonials />
			<SolveModal />
		</>
	);
}
