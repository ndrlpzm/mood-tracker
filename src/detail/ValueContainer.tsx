import React, { useState } from "react";
interface ValueContainerInput {
  moodValue: number;
  setMoodValue:  React.Dispatch<React.SetStateAction<number>>;
}
function ValueContainer({ moodValue, setMoodValue }: ValueContainerInput) {
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
      setMoodValue(parseInt(e.currentTarget.value));
      // Remove parseint, try using valueAsNumber by changing the htmlelement used
  };
  const ratings: number[] = [1,2,3,4,5,6];
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
