import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { KeyboardControls, Loader, Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import Experience from "./Experience";
import ClueModal from "./modals/ClueModal";
import Notebook from "./modals/Notebook";
import UIBar from "./modals/UIBar";
import Testimonials from "./modals/Testimonials";
import SolveModal from "./modals/SolveModal";
import DialogModal from "./modals/DialogModal";
import { useGameStore } from "./store/gameStore";
import GameOverModal from "./modals/GameOverModal";
import InstructionsModal from "./modals/InstructionsModal";
import { Analytics } from "@vercel/analytics/react";
import CreditButton from "./modals/CreditButton";
import CreditOverlay from "./modals/CreditModal";

export default function App() {
	const { showStats, toneMappingEnabled } = useControls(
		"Debug",
		{
			showStats: false,
			toneMappingEnabled: true,
		},
		{ collapsed: true }
	);

	const { gameEnded } = useGameStore();

	const keyboardMap = [
		{ name: "forward", keys: ["ArrowUp", "KeyW"] },
		{ name: "backward", keys: ["ArrowDown", "KeyS"] },
		{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
		{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
		{ name: "jump", keys: ["Space"] },
		{ name: "run", keys: ["Shift"] },
	];

	return (
		<>
			<Analytics />
			<KeyboardControls map={keyboardMap}>
				{showStats && <Stats />}
				<Canvas
					shadows
					style={{
						background:
							"linear-gradient( 180deg, #1a1a2e 0%, #16213e 15%, #0f3460 20%, #533a71 55%, #7c2d12 100%",
					}}
					gl={{
						toneMapping: toneMappingEnabled
							? ACESFilmicToneMapping
							: THREE.NoToneMapping,
					}}>
					<ambientLight intensity={0.5} />
					<directionalLight position={[5, 5, 5]} intensity={1} />
					<directionalLight position={[-5, 5, 5]} intensity={1} />
					<Suspense fallback={null}>
						<Experience />
					</Suspense>
				</Canvas>
				<Leva collapsed={true} hidden={location.hash !== "#debug"} />
			</KeyboardControls>
			<Loader
				containerStyles={{
					background: "linear-gradient(135deg, #1a0f0a 0%, #985d25 100%)",
				}}
				innerStyles={{
					background: "rgba(255, 255, 255, 0.1)",
					color: "#e6d7c3",
				}}
				barStyles={{
					background: "linear-gradient(135deg, #8b6914, #b8860b)",
					width: "50px",
					justifyContent: "center",
				}}
				dataStyles={{
					color: "#e6d7c3",
					fontFamily: "Georgia, serif",
					textAlign: "center",
					fontSize: "18px",
				}}
				dataInterpolation={(p) =>
					`Castle Capers\n\nLoading Mystery... ${p.toFixed(0)}%`
				}
			/>
			<UIBar />
			<ClueModal />
			<Notebook />
			<Testimonials />
			<SolveModal />
			<DialogModal />
			<InstructionsModal />
			<CreditButton />
			<CreditOverlay />

			{gameEnded && <GameOverModal />}
		</>
	);
}
