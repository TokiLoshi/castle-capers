import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import "./notebookStyle.css";

export default function Notebook() {
	const { foundClues, isNotebookOpen, closeNotebook } = useGameStore();
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (isNotebookOpen) {
			setIsAnimating(true);
		}
	}, [isNotebookOpen]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			closeNotebook();
		}, 300);
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};
	if (!isNotebookOpen) return null;

	const actualClues = foundClues.filter((clue) => clue.isClue);

	return (
		<>
			<div
				className={`notebook-overlay ${
					isAnimating ? "animate-in" : "animate-out"
				}`}
				onClick={handleBackdropClick}>
				<div className='notebook'>
					<div className='notebook-header'>
						<h2 className='notebook-title'>Notebook</h2>
						<button
							className='close-button'
							onClick={handleClose}
							aria-label='Close'>
							x
						</button>
					</div>

					<div className='notebook-content'>
						{actualClues.length === 0 ? (
							<p className='no-clues'>
								No clues found yet. Keep investigating!
							</p>
						) : (
							actualClues.map((clue, index) => (
								<div key={index} className='foundClue'>
									<h3 className='clue-title'>
										{index + 1} - {clue.title}
									</h3>
									<p className='clue-description'>{clue.description}</p>
								</div>
							))
						)}
					</div>
					<div className='notebook-footer'>
						<button className='dismiss-button' onClick={handleClose}>
							Continue
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
