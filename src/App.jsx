import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
	return (
		<Canvas shadows>
			<OrbitControls />
			<ambientLight intensity={1.5} />
			<mesh>
				<boxGeometry />
				<meshStandardMaterial color='hotpink' />
			</mesh>
		</Canvas>
	);
}
