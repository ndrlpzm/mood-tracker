import React, { useEffect, useState } from "react";
import "./MoodDetail.css";

import ValueContainer from "./ValueContainer";
import useSWRMutation from "swr/mutation";

import { Mood } from "../data/classes/mood";
import { addMood, retrieveMood, updateMood } from "../data/apiMock";
import { MoodAction } from "../data/moodReducer";
import TagSelector from "./TagSelector";
import { useParams } from "react-router-dom";

interface MoodInput {
  id: number;
  dispatchMoods: React.Dispatch<MoodAction>;
}
//Converts idParam so it can be passed as a prop to the MoodDetail hook
export const MoodDetailWrapper = ({ dispatchMoods }: MoodInput) => {
  const { idParam } = useParams();
  var moodId: number = -1;
  if (idParam !== undefined && !isNaN(Number(idParam))) {
    moodId = parseInt(idParam);
  }
  return <MoodDetail id={moodId} dispatchMoods={dispatchMoods} />;
};
export function MoodDetail({ id, dispatchMoods }: MoodInput) {
  const [mood, setMood] = useState(new Mood(-1, 0, new Date(), "", []));
  const [moodValue, setMoodValue] = useState(0);

  const { trigger: triggerRetrieveMood, data: returnExistingMood } =
    useSWRMutation("../data/apiMock.ts", (url) => retrieveMood(url, id));
    const { trigger: triggerAddMood, data: returnData } = useSWRMutation(
      "../data/apiMock.ts",
      (url) => addMood(url, mood)
    );
    const { trigger: triggerUpdateMood, data: returnUpdateData } = useSWRMutation(
      "../data/apiMock.ts",
      (url) => updateMood(url, mood)
    );

  if (id > -1) {
    //id -1 represents a new mood, any other id should be retrieved to be edited
    triggerRetrieveMood();
  }
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
    id=returnData.id;
  }, [returnData]);
  useEffect(() => {
    if (!returnUpdateData) return;
    dispatchMoods({
      type: "replace",
      mood: mood,
      moodIndex: -1,
      newList: returnUpdateData,
    });
  }, [returnUpdateData]);
  useEffect(() => {
    console.log(`useEffect ${returnExistingMood}`);
    if (!returnExistingMood) return;
    setMood({
      ...returnExistingMood,
    });
    setMoodValue(returnExistingMood.value);
  }, [returnExistingMood]);
  useEffect(() => {
    setMood({
      ...mood,
      value: moodValue,
    });
  }, [moodValue]);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    id > -1 ? triggerUpdateMood() : triggerAddMood();
  }
  return (
    <article className="mood-detail">
      <form onSubmit={handleSubmit}>
        <ValueContainer moodValue={moodValue} setMoodValue={setMoodValue} />
        <TagSelector tagList={mood.tags}></TagSelector>
        <textarea
          id="comment-input"
          onChange={(e) => {
            setMood({
              ...mood,
              comment: e.currentTarget.value,
            });
          }}
          value={mood.comment}
        />
        <div className="filled-button-container">
          <input className="filled-button" type="submit" value="Save" />
        </div>
      </form>
    </article>
  );
}
export default MoodDetail;
