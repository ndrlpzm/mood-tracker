import React, { useState } from "react";
import { Mood } from "./mood";
interface MoodInput {
  moodList: Mood[];
  setMoodList: React.Dispatch<React.SetStateAction<Mood[]>>;
}
function MoodDetail({ moodList, setMoodList }: MoodInput) {
  const [mood, setMood] = useState(new Mood());
  const handleClickRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMood({
      ...mood,
      value: parseInt(e.currentTarget.value),
      // Fix parse int, remove when value is actually a number
    });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMoodList([...moodList, mood]);
    console.log(moodList);
  };
  const ratings: number[] = [];
  for (let i = 1; i < 6; i++) {
    ratings.push(i);
  }
  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          {ratings.map(function (i) {
            return (
              <button onClick={handleClickRating} key={i} value={i}>
                {i}
              </button>
            );
          })}
        </div>
        <input
          type="text"
          onChange={(e) => {
            setMood({
              ...mood,
              comment: e.currentTarget.value,
            });
          }}
        />
        <input type="submit" value="Save" />
      </form>
    </article>
  );
}
export default MoodDetail;
