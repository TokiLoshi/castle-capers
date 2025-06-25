import { WallTower } from "./components/WallTower";
import { FernandoTheFlamingo } from "../characters/Monsters/AstroFlamingo";
import Crown from "../characters/Victim/Crown";

export default function Outside() {
	console.log("The game is starting!");
	return (
		<>
			<WallTower position={[0, 0, -3]} scale={4} />
			<Crown position={[1.5, 0, 1]} rotation={[0, -0.5, 0]} scale={0.7} />
			<FernandoTheFlamingo position={[0, 0, 1]} />
		</>
	);
}
