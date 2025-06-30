import { useEffect, useState } from "react";
import { useGameStore, GAME_CONFIG } from "../store/gameStore";
import "./solveModalStyle.css";

export default function SolveModal() {
	const {
		isSolvePanelOpen,
		closeSolvePanel,
		solution,
		checkSolution,
		guessesRemaining,
		gameEnded,
		gameWon,

		// gameLost,
	} = useGameStore();
	console.log("Solution: ", solution);
	const [isAnimating, setIsAnimating] = useState(false);
	const [selectedMurderer, setSelectedMurderer] = useState("");
	const [selectedMurderWeapon, setSelectedMurderWeapon] = useState("");
	const [showResult, setShowResult] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [hasSubmitted, setHasSubmitted] = useState(false);

	console.log("Solve Panel: isSolvePanelOpen: ", isSolvePanelOpen);

	useEffect(() => {
		if (isSolvePanelOpen) {
			setIsAnimating(true);
		}
		setSelectedMurderer("");
		setSelectedMurderWeapon("");
		setShowResult(false);
		setHasSubmitted(false);
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

	const handleSubmitGuess = (selectedMurderer, selectedWeapon) => {
		if (!selectedMurderer || !selectedMurderWeapon) {
			alert("Please select both a murderer and a weapon");
			return;
		}
		const correct = checkSolution(selectedMurderer, selectedWeapon);
		setIsCorrect(correct);
		setShowResult(true);
		setHasSubmitted(true);

		if (correct) {
			setTimeout(() => {
				handleClose();
			}, 3000);
		}
	};

	const canSubmit =
		selectedMurderer && selectedMurderWeapon && !hasSubmitted && !gameEnded;

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
					{gameEnded ? (
						<div className='game-ended'>
							<h3>{gameWon ? "🥳 Case Solved!" : "🙁Case Closed"}</h3>
							<p>
								{gameWon
									? "Congratulations, detective, the Castle thanks you!"
									: "Better luck next time, Detective. The castle will remain on their toes while the killer is still at large"}
							</p>
						</div>
					) : (
						<>
							<div className='guess-section'>
								<p className='instructions'>
									Make your accusation! You have {guessesRemaining} guess
									{guessesRemaining !== 1 ? "es" : ""} remaining.
								</p>
								<div className='selection-group'>
									<label className='selection-label'>
										Who is the murderer?
									</label>
									<select
										value={selectedMurderer}
										onChange={(e) => setSelectedMurderer(e.target.value)}
										className='suspect-select'
										disabled={hasSubmitted}>
										<option value=''>Select a suspect...</option>
										{GAME_CONFIG.suspects.map((suspect) => (
											<option key={suspect.id} value={suspect.id}>
												{suspect.name}
											</option>
										))}
									</select>
								</div>
								<div className='selection-group'>
									<label className='selection-group'>
										What was the murder weapon
									</label>
									<select
										value={selectedMurderWeapon}
										onChange={(e) => setSelectedMurderWeapon(e.target.value)}
										className='weapon-select'
										disabled={hasSubmitted}>
										<option value=''>Select a weapon...</option>
										{GAME_CONFIG.weapons.map((weapon) => (
											<option key={weapon.name} value={weapon.name}>
												{weapon.name.charAt(0).toUpperCase() +
													weapon.name.slice(1)}
											</option>
										))}
									</select>
								</div>
							</div>
							{showResult && (
								<div
									className={`result-section ${
										isCorrect ? "correct" : "incorrect"
									}`}>
									{isCorrect ? (
										<div className='success-message'>
											<h3>Correct!</h3>
											<p>You've solved the mystery! Well done, detective</p>
											<p>The castle celebrates your victory</p>
										</div>
									) : (
										<div classNae='failure-message'>
											<h3>Incorrect</h3>
											<p>
												Tha'ts not correct.{" "}
												{guessesRemaining - 1 > 0
													? "keep investigating and catch the killer"
													: "No more guesses remaining. The killer has gone undedtected."}
											</p>
										</div>
									)}
								</div>
							)}
						</>
					)}
				</div>
				<div className='solve-modal-footer'>
					{!gameEnded && !showResult && (
						<button
							className={`submit-button ${canSubmit ? "enabled" : "disabled"}`}
							onClick={handleSubmitGuess}
							disabled={!canSubmit}>
							Make accusation
						</button>
					)}
					<button className='dismiss-button' onClick={handleClose}>
						{showResult && isCorrect ? "Celebrate" : "Continue"}
					</button>
				</div>
			</div>
		</div>
	);
}
