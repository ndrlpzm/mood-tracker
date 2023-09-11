import React, { useEffect, useState } from "react";
import "./MoodDetail.css";

import ValueContainer from "./ValueContainer";
import TagDisplay from "./TagDisplay";
import useSWRMutation from "swr/mutation";

import { Mood } from "../data/classes/mood";
import { addMood } from "../data/apiMock";
import { MoodAction } from "../data/moodReducer";

interface MoodInput {
  moodList: Mood[];
  dispatchMoods: React.Dispatch<MoodAction>;
}
function MoodDetail({ moodList, dispatchMoods }: MoodInput) {
  const [mood, setMood] = useState(new Mood(-1, 0, new Date(), "", []));
  const [moodValue, setMoodValue] = useState(0);
  const { trigger: triggerAddMood, data: returnData } = useSWRMutation(
    "../data/apiMock.ts",
    (url) => addMood(url, mood)
  );
  useEffect(() => {
    if (!returnData) return;
    setMood({
      ...mood,
      id: returnData.id,
    });
    dispatchMoods({
      type: "add",
      mood: returnData,
      moodIndex: -1,
      newList: [],
    });
  }, [returnData]);

  useEffect(() => {
    setMood({
      ...mood,
      value: moodValue,
    });
  }, [moodValue]);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerAddMood();
    console.log(moodList);
  };
  return (
    <article className="mood-detail">
      <form onSubmit={handleSubmit}>
        <ValueContainer moodValue={moodValue} setMoodValue={setMoodValue} />
        <TagDisplay tagList={mood.tags}></TagDisplay>
        <input
          type="text"
          onChange={(e) => {
            setMood({
              ...mood,
              comment: e.currentTarget.value,
            });
          }}
        />
        <input className="filled-button" type="submit" value="Save" />
      </form>
    </article>
  );
}
export default MoodDetail;
