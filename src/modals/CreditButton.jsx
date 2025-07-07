import { Castle } from "lucide-react";
import { useGameStore } from "../store/gameStore";
import "./creditButton.css";

export default function CreditButton() {
	const { openCreditsPanel } = useGameStore();

	const handleClick = () => {
		openCreditsPanel();
	};
	return (
		<>
			<button
				className='credit-button'
				onClick={handleClick}
				aria-label='Open instructions and credits'>
				<Castle />
			</button>
		</>
	);
}
