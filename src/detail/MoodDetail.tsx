import React from "react";
import { Mood } from "./mood";
interface MoodInput{
	mood:Mood,
	setMood: React.Dispatch<React.SetStateAction<Mood>>
}
function MoodDetail({mood, setMood}: MoodInput){
	const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setMood({
				...mood,
				value: parseInt(e.currentTarget.value)
			});
		// Fix parse int, remove when value is actually a number
		console.log(mood);
	  };

	return(
	<article>
		<div>
			<button onClick={handleClickRating} value={1}>1</button>
			<button onClick={handleClickRating} value={2}>2</button>
			<button onClick={handleClickRating} value={3}>3</button>
			<button onClick={handleClickRating} value={4}>4</button>
			<button onClick={handleClickRating} value={5}>5</button>
		</div>
		<button>Save</button>
		</article>
		);
}
export default MoodDetail;