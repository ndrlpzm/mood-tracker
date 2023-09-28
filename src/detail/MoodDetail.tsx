import React, { useContext, useEffect, useState } from "react";
import "./MoodDetail.css";
import { useNavigate, useParams } from "react-router-dom";

import ValueContainer from "./ValueContainer";
import useSWRMutation from "swr/mutation";

import { Mood } from "../data/classes/mood";
import { addMood, retrieveMood, updateMood, deleteMood } from "../data/apiMock";
import { MoodsDispatchContext } from "../data/moodReducer";
import TagSelector from "./TagSelector";
import IconButton from "../common-components/IconButton";
import leftArrowIcon from "../resources/icons8-chevron-left-50.png";
import xIcon from "../resources/icons8-x-50.png";

interface MoodInput {
  id: number;
}
//Converts idParam so it can be passed as a prop to the MoodDetail hook
export const MoodDetailWrapper = () => {
  const { idParam } = useParams();
  var moodId: number = -1;
  if (idParam !== undefined && !isNaN(Number(idParam))) {
    moodId = parseInt(idParam);
  }
  return <MoodDetail id={moodId} />;
};
export function MoodDetail({ id }: MoodInput) {
  const navigate = useNavigate();
  const [mood, setMood] = useState(new Mood(-1, 0, new Date(), "", []));
  const [moodValue, setMoodValue] = useState(0);
  const dispatch = useContext(MoodsDispatchContext);

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

  const { trigger: triggerDeleteMood, data: returnDeleteData } = useSWRMutation(
    "../data/apiMock.ts",
    (url) => deleteMood(url, mood.id)
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
    //TODO: Error handling
    // dispatch({
    //   type: "add",
    //   mood: returnData,
    //   moodIndex: -1,
    //   newList: [],
    // });
    id = returnData.id;
  }, [returnData]);
  useEffect(() => {
    //TODO: Error handling
    //if (!returnUpdateData) return;
    // dispatch({
    //   type: "update",
    //   mood: mood,
    //   moodIndex: -1,
    //   newList: [],
    // });
  }, [returnUpdateData]);
  useEffect(() => {
    console.log(returnDeleteData);
    if (!returnDeleteData) return;
    //TODO: Error handling
    // dispatch({
    //   type: "delete",
    //   mood: mood,
    //   moodIndex: mood.id,
    //   newList: [],
    // });
    navigate(`/`);
  }, [returnDeleteData]);
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
  };
  const goBack = () => {
    navigate(`/`);
  };
  const handleDelete = () => {
    triggerDeleteMood();
  };
  return (
    <>
      <IconButton
        displayImg={leftArrowIcon}
        callbackFunction={goBack}
        description="Back"
      ></IconButton>
      <IconButton
        displayImg={xIcon}
        callbackFunction={handleDelete}
        description="Delete"
      ></IconButton>
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
    </>
  );
}
export default MoodDetail;
