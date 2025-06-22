import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import "./solveModalStyle.css";

export default function SolveModal() {
	const { isSolvePanelOpen, closeSolvePanel, solution } = useGameStore();
	const [isAnimating, setIsAnimating] = useState(false);

	console.log("Solve Panel: isSolvePanelOpen: ", isSolvePanelOpen);

	useEffect(() => {
		if (isSolvePanelOpen) {
			setIsAnimating(true);
		}
	}, [isSolvePanelOpen]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			closeSolvePanel();
		}, 300);
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!isSolvePanelOpen) return null;

	console.log("Solution from game store: ", solution);

	return (
		<div
			className={`solution-overlay ${
				isAnimating ? "animate-in" : "animate-out"
			}`}
			onClick={handleBackdropClick}>
			<div className='solve-modal'>
				<div className='solve-modal-header'>
					<h2 className='solve-modal-title'>Solve The Case</h2>
					<button
						className='close-button'
						onClick={handleClose}
						aria-label='Close'>
						x
					</button>
				</div>
				<div className='solve-modal-content'>
					<p className='no-solution'>No content found</p>
				</div>
				<div className='solve-modal-footer'>
					<button className='dismiss-button' onClick={handleClose}>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
}
