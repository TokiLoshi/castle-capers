import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Bedroom from "./rooms/bedroom";
import { ACESFilmicToneMapping } from "three";
import { Library } from "./rooms/library";
import { Kitchen } from "./rooms/kitchen";
import { AstroBee } from "./characters/Astrobee";
import { AstroFrog } from "./characters/Astrofrog";
import { AstroFlamingo } from "./characters/AstroFlamingo";
import { Suspense } from "react";
import { Bluey } from "./characters/Bluey";
import { Cactoro } from "./characters/Cactoro";
import { Demon } from "./characters/Demon";
import { Fish } from "./characters/Fish";
import { Ninja } from "./characters/Ninja";
import { Panda } from "./characters/Panda";
import { Shaun } from "./characters/Shaun";
import { Zombie } from "./characters/Zombie";

import { useControls } from "leva";
// import { useRef } from "react";

export default function App() {
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
				"yes",
			],
		},
	});
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
				<Suspense fallback={null}>
					<Bedroom />
					{/* <Kitchen /> */}
					<AstroBee currentAnimation={selectedAnimation} />
					{/* <AstroFrog /> */}
					{/* <AstroFlamingo /> */}
					{/* <Bluey /> */}
					{/* <Cactoro /> */}
					{/* <Demon /> */}
					{/* <Fish /> */}
					{/* <Ninja /> */}
					{/* <Panda /> */}
					{/* <Shaun /> */}
					{/* <Zombie /> */}
				</Suspense>
			</Stage>
		</Canvas>
	);
}
