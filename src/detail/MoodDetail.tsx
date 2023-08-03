import React, { useEffect, useState } from "react";
import { Mood } from "./mood";
import ValueContainer from "./ValueContainer";
interface MoodInput {
  moodList: Mood[];
  setMoodList: React.Dispatch<React.SetStateAction<Mood[]>>;
}
function MoodDetail({ moodList, setMoodList }: MoodInput) {
  const [mood, setMood] = useState(new Mood());
  const [moodValue, setMoodValue] = useState(0);
  useEffect(() => {
    setMood({
      ...mood,
      value: moodValue,
    });
  }, [moodValue]);
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMoodList([...moodList, mood]);
    console.log(moodList);
  };
  return (
    <article>
      <form onSubmit={handleSubmit}>
        <ValueContainer moodValue={moodValue} setMoodValue={setMoodValue} />
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
