import React from "react";
import MoodValueButton from "../common-components/MoodValueButton";
import { Mood } from "../data/classes/mood";
interface ValueContainerInput {
  mood: Mood;
  setMood:  React.Dispatch<React.SetStateAction<Mood>>;
}
function ValueContainer({ mood, setMood }: ValueContainerInput) {
  const ratings: number[] = [1,2,3,4,5];
  return (
    <div id="value-container">
      {ratings.map(function (i) {
        return (
          <MoodValueButton key={i} moodValue={i} mood={mood} setMood={setMood} isSelected={mood.value===i} displayOnly={false}></MoodValueButton>
        );
      })}
    </div>
  );
}
export default ValueContainer;
