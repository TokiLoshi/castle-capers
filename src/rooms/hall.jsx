// import Crown from "../characters/Victim/Crown";
// import Wizard from "../characters/testimonies/Wizard";
import { Wall } from "./components/Wall";
import { ArchDoor } from "./components/ArchDoor";
import { DoorRound } from "./components/DoorRound";
import { TrapDoor } from "./components/TrapDoor";
import { Window } from "./components/Window";
import { WallTower } from "./components/WallTower";

export default function Hall() {
	return (
		<>
			{/* <Crown position={[2, 0, 0]} /> */}
			{/* <Wizard position={[2, 0, 0]} /> */}
			{/* <Adventurer position={[2, 0, 0]} /> */}
			{/* <HoodedAdventurer position={[2, 0, 0]} /> */}
			{/* <Man position={[2, 0, 0]} /> */}
			{/* <Witch position={[2, 0, 0]} /> */}
			{/* <AstroBee position={[2, 0, 0]} /> */}
			{/* <AstroFrog position={[2, 0, 0]} /> */}
			{/* <Bluey position={[2, 0, 0]} /> */}
			{/* <Demon position={[2, 0, 0]} /> */}
			{/* <Fish position={[2, 0, 0]} /> */}
			{/* <Panda position={[2, 0, 0]} /> */}
			{/* <Ninja position={[2, 0, 0]} /> */}
			{/* <Zombie position={[2, 0, 0]} /> */}
			<Wall position={[2, 0, -2]} scale={4} />
			<Window position={[-4, 0, -2]} />
			<ArchDoor position={[-2, 0, 3]} />
			<DoorRound position={[2, 0, 3]} />
			<TrapDoor position={[5, 0, 2]} />
			<WallTower />
		</>
	);
}
