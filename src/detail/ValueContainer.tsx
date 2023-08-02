import React, { useState } from "react";
interface ValueContainerInput {
  moodValue: number;
  setMoodValue:  React.Dispatch<React.SetStateAction<number>>;
}
function ValueContainer({ moodValue, setMoodValue }: ValueContainerInput) {
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
      setMoodValue(parseInt(e.currentTarget.value));
      // Fix parse int, remove when value is actually a number
  };
  const ratings: number[] = [];
  for (let i = 1; i < 6; i++) {
    ratings.push(i);
  }
  return (
    <div>
      {ratings.map(function (i) {
        return (
          <button onClick={handleClickRating} key={i} value={i}>
            {i}
          </button>
        );
      })}
    </div>
  );
}
export default ValueContainer;
