import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import "./testimonial.css";

export default function Testimonials() {
	const { foundTestimonies, isTestimonyPanelOpen, closeTestimonyPanel } =
		useGameStore();
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		if (isTestimonyPanelOpen) {
			setIsAnimating(true);
		}
	}, [isTestimonyPanelOpen]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			closeTestimonyPanel();
		}, 300);
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!isTestimonyPanelOpen) return null;

	return (
		<>
			<div
				className={`testimonials-overlay ${
					isAnimating ? "animate-in" : "animate-out"
				}`}
				onClick={handleBackdropClick}>
				<div className='testimonials'>
					<div className='testimonials-header'>
						<h2 className='testimonials-title'>Testimonials</h2>
						<button
							className='close-button'
							onClick={handleClose}
							aria-label='Close'>
							x
						</button>
					</div>
					<div className='testimonials-content'>
						{foundTestimonies.length === 0 ? (
							<p className='no-testimonies'>
								No testimonials found yet. Try talking to characters to get more
								information
							</p>
						) : (
							foundTestimonies.map((testimony, index) => (
								<div key={index} className='foundTestimony'>
									<h3 className='testimony-title'>
										{index + 1} - {testimony.title}
									</h3>
									<p className='testimony-description'>
										{testimony.description}
									</p>
								</div>
							))
						)}
					</div>
					<div className='testimonials-footer'>
						<button className='dismiss-button' onClick={handleClose}>
							Continue
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
