import { useGameStore } from "../store/gameStore";
import "./UIBarStyle.css";

export default function UIBar() {
	const {
		foundClues,
		openNotebook,
		foundTestimonies,
		openTestimonyModal,
		openSolvePanel,
	} = useGameStore();

	const clueCount = foundClues.filter((clue) => clue.isClue).length;
	console.log("Testimonies: ", foundTestimonies);

	const testimoniesCount = foundTestimonies.length;
	console.log("Testimonies Count: ", testimoniesCount);

	// const handleOpenNotebook = () => {
	// 	console.log("Opening notebooke with: ", foundClues);
	// 	openNotebook();
	// };

	// const handleAccusation = () => {
	// 	console.log("Making accusation... ");
	// };

	return (
		<div className='UI-Bar'>
			<div className='ui-section'>
				<div className='progress-info'>
					<span className='clue-counter'>
						{clueCount === 1 ? `🔍 ${clueCount} Clue` : `🔎 ${clueCount} Clues`}
					</span>
					<span className='clue-counter'>
						🙊 {testimoniesCount} Testimonies{" "}
					</span>
					<div className='progress-bar'>
						<div
							className='progress-fill'
							style={{
								width: `${Math.min((clueCount / 5) * 100, 100)}%`,
							}}></div>
					</div>
				</div>
			</div>
			<div className='ui-section button-group'>
				<button className='ui-button clues-btn' onClick={openNotebook}>
					📖 Evidence
				</button>
				<button
					className='ui-button testimonies-btn'
					onClick={openTestimonyModal}>
					🗣️ Testimonies
				</button>
				<button className='ui-button accusation-btn' onClick={openSolvePanel}>
					⚖️ Solve Case
				</button>
			</div>
		</div>
	);
}
