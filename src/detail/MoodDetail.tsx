import React, { useEffect, useState } from "react";
import { Mood } from "./mood";
import ValueContainer from "./ValueContainer";
import useSWRMutation from "swr/mutation";
import { addMood } from "../data/apiMock";
interface MoodInput {
  moodList: Mood[];
  setMoodList: React.Dispatch<React.SetStateAction<Mood[]>>;
}
function MoodDetail({ moodList, setMoodList }: MoodInput) {
  const [mood, setMood] = useState(new Mood());
  const [moodValue, setMoodValue] = useState(0);
  const { trigger : triggerAddMood } = useSWRMutation('../data/apiMock.ts', (url)=>addMood(url,mood));
  
  useEffect(() => {
    setMood({
      ...mood,
      value: moodValue,
    });
  }, [moodValue]);
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerAddMood();
    setMoodList([...moodList, mood]);
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
