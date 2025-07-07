import { Info, Code } from "lucide-react";
import { useState, useEffect } from "react";
import { useGameStore } from "../store/gameStore";
import "./creditStyle.css";

export default function CreditOverlay() {
	const [isAnimating, setIsAnimating] = useState(false);
	const { guessesRemaining, isCreditModalOpen, closeCreditsPanel } =
		useGameStore();

	useEffect(() => {
		if (isCreditModalOpen) {
			setIsAnimating(true);
		}
	}, [isCreditModalOpen]);

	const handleClose = () => {
		setIsAnimating(false);
		setTimeout(() => {
			closeCreditsPanel();
		}, 300);
	};

	const handlBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!isCreditModalOpen) return null;

	return (
		<>
			<div
				className={`credit-overlay ${
					isAnimating ? "animate-in" : "animate-out"
				}`}
				onClick={handlBackdropClick}>
				<div className='credits'>
					<div className='credits-header'>
						<h2 className='credits-title'>
							<Info className='credits-icon' />
							Instructions & Credits
						</h2>

						<button
							className='close-button'
							onClick={handleClose}
							areia-label='Close'>
							x
						</button>
					</div>

					<div className='credits-content'>
						<section className='instructuions-section'>
							<h3>🎮 How to Play</h3>
							<p className='instruction-text'>
								You have <span className='highlight'>{guessesRemaining}</span>{" "}
								guesses left to solve the case. Use the arrow keys or{" "}
								<em>WASD</em> to move around. Hover over objects to discover
								clues and click on characters to get their testimonies.
							</p>
						</section>

						{/**Asset credits */}
						<section className='credits-section'>
							<h3 className='section-title'>🏰 Castle Capers Credits</h3>
							<p className='instruction-text'>
								Castle Capers is a murder mystery explorer game inspired by the
								boardgame Cluedo but with a 3D twist. It was developed as a
								learning project for the three.js journey commuinity challenge
								#18.
							</p>

							<div className='credit-category'>
								<h4 className='credit-title'>Room Assets</h4>
								<p className='credit-item'>
									<strong>FantasyPropsMegaKit</strong> by{" "}
									<a
										href='https://quaternius.com/packs/fantasypropsmegakit.html'
										target='_blank'
										rel='noopener noreferrer'>
										Quaternius
									</a>
									- CCO License
								</p>
								<p className='credit-item'>
									Additional room elements by{" "}
									<a
										href='https://poly.pizza/u/Quaternius'
										target='_blank'
										rel='noopener noreferrer'>
										Quaternius via poly.pizza
									</a>
									- CCO{" "}
									<a
										href='https://creativecommons.org/publicdomain/zero/1.0/'
										target='_blank'
										rel='noopener noreferrer'>
										License
									</a>
								</p>
							</div>

							<div className='credit-category'>
								<h4 className='category-title'>Characters</h4>
								<ul className='character-list'>
									<li>
										<strong>Fernando</strong>(Flamingo Astronaut) - Your
										Detective
									</li>
									<li>
										<strong>The King</strong> - The Victim
									</li>
									<li>
										<strong>
											Witch, Adventurer, Hooded Adventurer, Man, Wizard, Shaun
										</strong>{" "}
										- Suspects (one of them is the murderer)
									</li>
								</ul>
								<p className='credit-item'>
									All characters by{" "}
									<a
										href='https://poly.pizza/u/Quaternius'
										target='_blank'
										rel='noopener noreferrer'>
										Quaternius
									</a>{" "}
									via poly.pizza - CCO{" "}
									<a
										href='https://creativecommons.org/publicdomain/zero/1.0/'
										target='_blank'
										rel='noopener noreferrer'>
										License
									</a>
								</p>
							</div>
							<div className='credit-category'>
								<h4 className='category-title'>Audio & Textures</h4>
								<p className='credit-item'>
									<strong>Music</strong> by{" "}
									<a
										href='https://pixabay.com/users/lexin_music-28841948/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145636'
										target='_blank'
										rel='noopener noreferrer'>
										Aleksey Chistilin
									</a>{" "}
									from{" "}
									<a
										href='https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=145636'
										target='_blank'
										rel='noopener noreferrer'>
										Pixabay
									</a>
								</p>
								<p className='credit-item'>
									<strong>Stylized Wood Planks 002 Wooden Textures</strong>{" "}
									created by {""}
									<a
										href='https://3dtextures.me/2024/07/19/stylized-wood-planks-002/'
										target='_blank'
										rel='noopener noreferrer'>
										João Paulo
									</a>{" "}
									via 3dTextures.me
								</p>
							</div>
						</section>

						<section className='thanks-section'>
							<h3 className='section-title'>Contributors</h3>
							<p className='thanks-text'>
								Huge thanks to <strong>NalloVint</strong> for helping with the
								instancing and placement of the collision detector, and for
								bringing Fernando back down to earth.
							</p>
						</section>

						<section className='developer-section'>
							<h3 className='section-title'>Developer</h3>
							<div className='developer-info'>
								<div className='developer-links'>
									<p className='thanks-text'>
										Corny dialog was written by the developer, with full
										recognition that it might have been more interesting and
										less error-prone had an AI written it, but she hopes you had
										fun anyway.
									</p>

									<a
										href='https://github.com/TokiLoshi/castle-capers'
										target='_blank'
										rel='noopener noreferrer'
										classNam='project-link'>
										The code for Castle Capers is available on GitHub
									</a>
									<p className='made-by'>
										Made with 😁 by{" "}
										<a
											href='https://github.com/TokiLoshi'
											target='_blank'
											rel='noopener noreferrer'>
											TokiLoshi (Bee🐝)
										</a>
									</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
