import { Text } from "@react-three/drei";
import { Player } from "./Player";
import Bedroom from "./rooms/bedroom";

export default function Room() {
	return (
		<>
			<Text
				position={[0, 0.1, 5]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				NORTH (+Z)
			</Text>
			<Text
				position={[0, 0.1, -5]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				SOUTH (-Z)
			</Text>

			<Text
				position={[6, 0.1, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				EAST (+X)
			</Text>
			<Text
				position={[-7, 0.1, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				fontSize={1}
				color='white'
				anchorX='center'
				anchorY='middle'>
				WEST (-X)
			</Text>
			<Player />
			<Bedroom />
		</>
	);
}
