import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import "./DialogModalStyle.css";

export default function DialogModal() {
	const {
		isDialogOpen,
		activeDialog,
		currentDialogIndex,
		dialogHasEnded,
		getCurrentDialogStep,
		handleNextDialog,
		closeDialog,
	} = useGameStore();

	const [isAnimating, setIsAnimating] = useState(false);
	const currentStep = getCurrentDialogStep();

	useEffect(() => {
		if (isDialogOpen) {
			setIsAnimating(true);
		}
	}, [isDialogOpen]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			closeDialog();
		}, 300);
	};

	const handleContinue = () => {
		if (dialogHasEnded) {
			handleClose();
		} else {
			handleNextDialog();
		}
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			e.stopPropagation();
		}
	};

	if (!isDialogOpen || !activeDialog || !currentStep) return null;
	return (
		<div
			className={`dialog-overlay ${isAnimating ? "animate-in" : "animate-out"}`}
			onClick={handleBackdropClick}>
			<div className='dialog-bubble'>
				<div className='dialog-header'>
					<div className='character-name'>{activeDialog.npcName}</div>
					<button
						className='close-button'
						onClick={handleClose}
						aria-label='Close'>
						x
					</button>
				</div>
				<div className='dialog-content'>
					<p className='dialog-text'>{currentStep.text}</p>
					{currentStep.isTestimony && (
						<div className='testimony-indicator'>
							<span className='testimony-badge'>🖋️ Testimony</span>
						</div>
					)}
				</div>
				<div className='dialog-footer'>
					<div className='dialog-progress'>
						{currentDialogIndex + 1} / {activeDialog.dialogSteps.length}
					</div>
					<button className='continue-button' onClick={handleContinue}>
						{dialogHasEnded ? "Close" : "Continue"}
					</button>
				</div>
				<div className='bubble-tail'></div>
			</div>
		</div>
	);
}
