import { useEffect, useState } from "react";
import { useGameStore } from "./store/gameStore";
import "./clueModal.css";

export default function ClueModal() {
	const { activeClue, isClueModalOpen, closeClueModal } = useGameStore();
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (isClueModalOpen) {
			setIsAnimating(true);
		}
	}, [isClueModalOpen]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			closeClueModal();
		}, 300);
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!isClueModalOpen || !activeClue) return null;

	return (
		<div
			className={`clue-modal-overlay ${
				isAnimating ? "animate-in" : "animate-out"
			}`}
			onClick={handleBackdropClick}>
			<div className='clue-modal'>
				<div className='clue-header'>
					<h2 className='clue-title'>
						{activeClue.title}
						{activeClue.isClue && (
							<span className='clue-badge'>
								{activeClue.alreadyFound ? "Already Found" : "New Clue!"}
							</span>
						)}
					</h2>
					<button
						className='close-button'
						onClick={handleClose}
						aria-label='Close'>
						X
					</button>
				</div>
				<div className='clue-content'>
					<p className='clue-description'>{activeClue.description}</p>
					{activeClue.isClue && !activeClue.alreadyFound && (
						<div className='clue-notification'>
							🪶 This clue has been added to your investigation notes
						</div>
					)}
				</div>
				<div className='clue-footer'>
					<button className='dismiss-button' onClick={handleClose}>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}
