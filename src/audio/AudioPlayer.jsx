import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";
import "./audioStyles.css";

export default function AudioPlayer() {
	const [isPlaying, setIsPlaying] = useState(true);
	const [isReady, setIsReady] = useState(false);
	// const [volume, setVolume] = useState(0.5);
	const audioRef = useRef(null);
	const audioFilePath = "./music/eco-technology.mp3";

	useEffect(() => {
		if (!audioFilePath) return;

		const audio = new Audio(audioFilePath);
		audioRef.current = audio;

		audio.volume = 0.5;
		audio.loop = true;

		const handleCanPlayThrough = () => {
			setIsReady(true);
		};
		const handleError = (e) => {
			console.error("Audio loading error: ", e);
			setIsReady(false);
		};

		audio.addEventListener("canplaythrough", handleCanPlayThrough);
		audio.addEventListener("error", handleError);
		audio.load();

		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.removeEventListener(
					"canplaythrough",
					handleCanPlayThrough
				);
				audioRef.current.removeEventListener("error", handleError);
			}
		};
	}, [audioFilePath]);

	useEffect(() => {
		if (!audioRef.current || !isReady) return;

		if (isPlaying) {
			audioRef.current.play().catch((error) => {
				console.log("Error playing audio: ", error);
				setIsPlaying(false);
			});
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	}, [isReady, isPlaying]);

	// useEffect(() => {
	// 	if (audioRef.current) {
	// 		audioRef.current.volume = volume;
	// 	}
	// }, [volume]);

	const togglePlayPause = (event) => {
		event.stopPropagation();
		if (isReady) {
			setIsPlaying(!isPlaying);
		}
	};

	// const handleVolumeChange = (event) => {
	// 	event.stopPropagation();
	// 	const newVolume = parseFloat(event.target.value);
	// 	setVolume(newVolume);
	// };

	return (
		<div className='audio-player'>
			<div onClick={togglePlayPause} className='audio-button'>
				{isPlaying ? (
					<Music size={24} color='white' />
				) : (
					<VolumeX size={24} color='white' />
				)}
			</div>
			{/* <input
				type='range'
				min='0'
				max='1'
				step='0.1'
				value={volume}
				onChange={handleVolumeChange}
				className='volume-slider'
				style={{ width: "60px", marginLeft: "8px" }}
			/> */}
		</div>
	);
}
