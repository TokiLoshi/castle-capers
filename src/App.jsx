import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bedroom from "./rooms/bedroom";
import { ACESFilmicToneMapping } from "three";

export default function App() {
	return (
		<Canvas
			shadows
			gl={{
				toneMapping: ACESFilmicToneMapping,
			}}>
			<OrbitControls />
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 10, 0]} intensity={2} castShadow />
			<Stage
				preset='rembrandt'
				// options: ["rembrandt", "portrait", "upfront", "soft"]
				intensity={1}
				contactShadow={true}
				shadows>
				<Bedroom />
			</Stage>
		</Canvas>
	);
}
