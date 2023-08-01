import React, { useState } from "react";
import { Mood } from "./mood";
interface MoodInput{
	moodList:Mood[],
	setMoodList: React.Dispatch<React.SetStateAction<Mood[]>>
}
function MoodDetail({moodList, setMoodList}: MoodInput){
	const [mood, setMood] = useState(new Mood());
	const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setMood({
				...mood,
				value: parseInt(e.currentTarget.value)
			});
		// Fix parse int, remove when value is actually a number
	  };
	  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		  e.preventDefault();
		  setMoodList([...moodList, mood]);
		  console.log(moodList);
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
		<button onClick={handleSubmit}>Save</button>
		</article>
		);
}
export default MoodDetail;