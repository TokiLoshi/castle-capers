import { Text } from "@react-three/drei";
import { useGameStore } from "../store/gameStore";
import "./gameOverModalStyle.css";
import { useEffect, useState } from "react";

export default function GameOverModal() {
	const { gameEnded, gameWon, resetGame, initializeGame } = useGameStore();
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (gameEnded) {
			setIsAnimating(true);
		}
	}, [gameEnded]);

	const handleRestart = () => {
		setIsAnimating(false);
		setTimeout(() => {
			resetGame();
			initializeGame();
		}, 300);
	};

	if (!gameEnded) return null;

	return (
		<>
			<div
				className={`game-over-overlay ${
					isAnimating ? "animate-in" : "animate-out"
				}`}>
				<div className='game-over-modal'>
					<div className='game-over-header'>
						<h2 className='game-over-title'>
							{gameWon ? "Victory" : "Defeat"}
						</h2>
					</div>
					<div className='game-over-content'>
						<p className='game-over-description'>
							{gameWon
								? "Congratulations Detective! The Castle is safe again thanks to you"
								: "The murder remains a mystery. The killer has escaped."}
						</p>
					</div>
					<div className='game-over-footer'>
						<button className='restart-button' onClick={handleRestart}>
							🔄 Play Again
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
