import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import "./testimonial.css";

const CHARACTER_PROFILES = {
	Adventurer: {
		name: "Gregory the Great",
		image: "/profiles/adventurer.png",
	},
	HoodedAdventurer: {
		name: "Sable the Shrouded",
		image: "/profiles/shrouded.png",
	},
	Man: {
		name: "Artie the Ordinary",
		image: "/profiles/man.png",
	},
	Shaun: {
		name: "Shaun the Strange",
		image: "/profiles/shaun.png",
	},
	Witch: {
		name: "Wendeline the Witch",
		image: "/profiles/witch.png",
	},
	Wizard: {
		name: "Dorian the Grey Wizard",
		image: "/profiles/wizard.png",
	},
};

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

	const getCharacterProfile = (testimonyId) => {
		return CHARACTER_PROFILES[testimonyId];
	};

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
							foundTestimonies.map((testimony, index) => {
								const profile = getCharacterProfile(testimony.testimonyId);
								return (
									<div key={index} className='foundTestimony'>
										<div className='testimony-header'>
											<img
												src={profile.image}
												alt={profile.name}
												className='profile-image'
											/>
											<h3 className='testimony-title'>{testimony.title}</h3>
										</div>
										<p className='testimony-description'>
											{testimony.description}
										</p>
									</div>
								);
							})
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
