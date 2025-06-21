import { useGameStore } from "./store/gameStore";
import "./UIBarStyle.css";

export default function UIBar() {
	const { foundClues, openNotebook } = useGameStore();
	const clueCount = foundClues.filter((clue) => clue.isClue).length;

	// const handleOpenNotebook = () => {
	// 	console.log("Opening notebooke with: ", foundClues);
	// 	openNotebook();
	// };
	return (
		<div className='UI-Bar'>
			<div style={{ color: "white" }}>Clues: {clueCount}</div>
			<button className='open-modal' onClick={openNotebook}>
				📖 Clues
			</button>
			<button className='open-modal' onClick={openNotebook}>
				🗣️ Testimonies
			</button>
		</div>
	);
}
