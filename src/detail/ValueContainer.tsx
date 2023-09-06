import React from "react";
import MoodValueButton from "../common-components/MoodValueButton";
interface ValueContainerInput {
  moodValue: number;
  setMoodValue:  React.Dispatch<React.SetStateAction<number>>;
}
function ValueContainer({ moodValue, setMoodValue }: ValueContainerInput) {
  const ratings: number[] = [1,2,3,4,5];
  return (
    <div>
      {ratings.map(function (i) {
        return (
          <MoodValueButton moodValue={i} setMoodValue={setMoodValue} isSelected={moodValue===i}></MoodValueButton>
        );
      })}
    </div>
  );
}
export default ValueContainer;
