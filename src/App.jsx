import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bedroom from "./rooms/bedroom";
import { ACESFilmicToneMapping } from "three";
import { Library } from "./rooms/library";
import { Kitchen } from "./rooms/kitchen";
import { AstroBee } from "./characters/Astrobee";
import { AstroFrog } from "./characters/Astrofrog";
// import { useControls } from "leva";
// import { useRef } from "react";

export default function App() {
	return (
		<Canvas
			shadows
			gl={{
				toneMapping: ACESFilmicToneMapping,
			}}>
			<OrbitControls />
			<ambientLight intensity={0.25} />
			<Stage
				preset='rembrandt'
				// options: ["rembrandt", "portrait", "upfront", "soft"]
				intensity={1}
				contactShadow={true}
				shadows>
				<Kitchen />
				{/* <AstroBee /> */}
				<AstroFrog />
			</Stage>
		</Canvas>
	);
}
