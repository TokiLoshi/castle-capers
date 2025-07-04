import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";

export default function AudioPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const audioRef = useRef(null);
	const audioFilePath = "./music/eco-technology";

	useEffect(() => {
		if (!audioFilePath) return;
		const audio = new Audio(audioFilePath);
		audioRef.current = audio;
		const handleCanPlayThrough = () => {
			setIsReady(true);
		};
		audio.addEventListener("canplaythrough", handleCanPlayThrough);
		audio.load();
		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current.removeEventListener(
					"canplaythrough",
					handleCanPlayThrough
				);
			}
		};
	}, [audioFilePath]);

	useEffect(() => {
		if (!audioRef.current || isReady) return;

		if (isPlaying) {
			audioRef.current.play().catch((error) => {
				console.log("Error playing audio: ", error);
				setIsPlaying(false);
			});
		} else {
			audioRef.current.pause();
		}
	}, [isReady, isPlaying]);
}
