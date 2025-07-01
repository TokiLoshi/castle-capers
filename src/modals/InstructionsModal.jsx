import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import "./instructionsModalStyle.css";

export default function InstructionsModal() {
	const { showInstructions, hideInstructions } = useGameStore();
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (showInstructions) {
			setIsAnimating(true);
		}
	}, [showInstructions]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			hideInstructions();
		}, 300);
	};
	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!showInstructions) return null;

	return (
		<div
			className={`instructions-overlay ${
				isAnimating ? "animate-in" : "animate-out"
			}`}
			onClick={handleBackdropClick}>
			<div className='instructions-modal'>
				<div className='instructions-header'>
					<h2 className='instructions-title'>
						Welcome to Castle Capers, Detective Fernando
					</h2>
					<button
						className='close-button'
						onClick={handleClose}
						aria-label='Close'>
						x
					</button>
				</div>
				<div className='instructions-content'>
					<div className='instructions-section'>
						<h3>Welcome Detective Fernando Flamingo</h3>
						<p>
							You have been summoned to the Castle on Urgent Business. During
							the night the king was murdered! As you are an esteemed member of
							the intergalactic crime solvers unit we could think of no-one
							better to help us find the killer. Please help us solve this case
						</p>
					</div>
					<div className='instructions-section'>
						<h3>How to Solve the case</h3>
						<ul>
							<li>
								<strong>Move:</strong> use WASD or the arrow keys to explore
							</li>
							<li>
								You are currently in the Hall, click on the doors to explore
								other rooms
							</li>
							<li>
								<strong>Investigate:</strong> hover over objects to look for
								clues. If you see an outline click on them to read more
							</li>
							<li>
								<strong>Interrogate:</strong> Click on other characters to get
								their testimony, beware one of them is a liar.
							</li>
						</ul>
					</div>
					<div className='instructions-section'>
						<h3>Please note</h3>
						<ul>
							<li>
								You will only have <strong>3 guesses</strong> to solve the case
							</li>
							<li>
								If you think you know who the killer is you can click on the
								solve button and make an accusation
							</li>
							<li>
								You can check your notebook for clues collected, and testimonies
								to see other characters' accusations
							</li>
							<li>Good luck detective! We are counting on you</li>
						</ul>
					</div>
				</div>
				<div className='instructions-footer'>
					<button className='start-button' onCLick={handleClose}>
						🔎 Start investigating
					</button>
				</div>
			</div>
		</div>
	);
}
